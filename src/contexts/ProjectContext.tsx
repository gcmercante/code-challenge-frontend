import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { api } from "../api";
import { Project } from "../shared/interfaces/Project";
import { ProviderProps } from "../shared/interfaces/ProviderProps";
import { Task } from "../shared/interfaces/Task";
import { AuthContext } from "./AuthContext";

interface ProjectContextType {
  projects: Project[],
  onCreateProject: (project: Project) => void;
  onEditProject: (project: Project) => void;
  onDeleteProject: (projectId: string) => void;
  onTaskCreate: (projectId: string, task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onCheckTask: (taskId: string) => void;
}

interface ProjectResponse {
  data: Project[]
}

export const ProjectContext = createContext({} as ProjectContextType);

export function ProjectContextProvider({ children }: ProviderProps) {
  const { authToken } = useContext(AuthContext);
  const [projects, setProjects] = useState<Project[]>([]);

  const requestHeaders = {
    headers: {
      authorization: `Bearer ${authToken}` 
    }
  }

  async function loadProjects() {
    try {
      const { data } = await api.get('/project', requestHeaders) as ProjectResponse;
  
      setProjects(data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    if(authToken) {
      loadProjects()
    }
  }, [authToken])

  async function onCreateProject(project: Project) {
    try {
      const { data } = await api.post('/project', { ...project }, requestHeaders)

      setProjects(state => [data, ...state]);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  async function onEditProject(project: Project) {
    try {
      const { data } = await api.put(`/project/${project.id}`,{ ...project }, requestHeaders);
  
      const updatedProjects = projects.map((project) => {
        if(project.id === data.id) {
          return data;
        }
  
        return project;
      });
  
      setProjects(updatedProjects);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  async function onDeleteProject(projectId: string) {
    try {
      await api.delete(`/project/${projectId}`, requestHeaders);
  
      const updatedProjects = projects.filter(project => project.id !== projectId);
  
      setProjects(updatedProjects);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  async function onTaskCreate(projectId: string, task: Task) {
    try {
      const { data } = await api.post('/task', { projectId, description: task.description }, requestHeaders);
  
      const updatedProjects = projects.map((project) => {
        if(project.id === projectId) {
          project.tasks.unshift(data);
        }
  
        return project;
      });
  
      setProjects(updatedProjects);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  async function onDeleteTask(taskId: string) {
    try {
      await api.delete(`/task/${taskId}`, requestHeaders);
  
      const updatedProjects = projects.map((project) => {
        const index = project.tasks.findIndex(task => task.id === taskId);
        if(index !== -1) {
          project.tasks.splice(index, 1);
        }
  
        return project;
      });
  
      setProjects(updatedProjects);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  async function onCheckTask(taskId: string) {
    try {
      const { data } = await api.put(`/task/${taskId}`, { done: true }, requestHeaders);
  
      const updatedProjects = projects.map((project) => {
        const index = project.tasks.findIndex(task => task.id === taskId);
  
        if(index !== -1) {
          project.tasks[index].done = true;
          project.tasks[index].finished_at = data.finished_at;
          const [taskToUpdate] = project.tasks.splice(index, 1);
  
          project.tasks.push(taskToUpdate);
        }
  
        return project;
      });
  
      setProjects(updatedProjects);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        onCreateProject,
        onEditProject,
        onDeleteProject,
        onTaskCreate,
        onDeleteTask,
        onCheckTask
      }}
    >
      { children }
    </ProjectContext.Provider>
  )
}