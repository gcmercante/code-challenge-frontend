import { useState } from "react";
import { Header } from "../../components/Header";
import { LoginModal } from "../../components/LogInModal";
import { ProjectModal } from "../../components/ProjectModal";
import { SignUpModal } from "../../components/SignUpModal";
import { Project } from "../../shared/interfaces/Project";
import { Task } from "../../shared/interfaces/Task";
import { HasProject } from "./components/HasProject";
import { NoProject } from "./components/NoProject";
import { NotLogged } from "./components/NotLogged";
import { Container, CreateButton } from "./styles";


const currentProjects = [
  {
    id: 1,
    name: 'Project 1',
    tasks: [
      {
        id: 1,
        name: 'Task 1',
        done: false
      },
      {
        id: 2,
        name: 'Task 2',
        done: false
      },
    ],
  },
  {
    id: 2,
    name: 'Project 2',
    tasks: [
      {
        id: 3,
        name: 'Task 1',
        done: false
      },
    ]
  },
];

export function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const [projects, setProjects] = useState(currentProjects);

  function handleOpenProjectModal() {
    setIsProjectModalOpen(true);
  }

  function handleCloseProjectModal() {
    setIsProjectModalOpen(false);
  }

  function handleOpenSignUpModal() {
    setIsSignUpModalOpen(true);
  }

  function handleCloseSignUpModal() {
    setIsSignUpModalOpen(false);
  }

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  function handleDoneTask(done: boolean, taskId: number) {
    const updatedProjects = projects.map((project) => {
      const index = project.tasks.findIndex(task => task.id === taskId);

      if(index !== -1) {
        project.tasks[index].done = done;
        const [taskToUpdate] = project.tasks.splice(index, 1);

        if(done) {
          project.tasks.push(taskToUpdate);
        } else {
          project.tasks.unshift(taskToUpdate);
        }
      }

      return project;
    });

    setProjects(updatedProjects);
  }

  function handleTaskCreation(projectId: number, task: Task) {
    const updatedProjects = projects.map((project) => {
      if(project.id === projectId) {
        project.tasks.push(task);
      }

      return project;
    });

    setProjects(updatedProjects);
  }

  function handleRemoveTask(taskId: number) {
    const updatedProjects = projects.map((project) => {
      const index = project.tasks.findIndex(task => task.id === taskId);
      if(index !== -1) {
        project.tasks.splice(index, 1);
      }

      return project;
    });

    setProjects(updatedProjects);
  }

  function handleCreateProject(project: Project) {
    setProjects([project, ...projects]);
  }

  function handleDeleteProject(projectId: number) {
    const updatedProjects = projects.filter(project => project.id !== projectId);

    setProjects(updatedProjects);
  }

  const isLoggedIn = true;
  const hasProject = projects.length;

  return (
    <div>
      <Header 
        onOpenLoginModal={handleOpenLoginModal}
        onOpenSignUpModal={handleOpenSignUpModal}
      />
      {
        isLoggedIn ?
        (
          <CreateButton>
            <button onClick={handleOpenProjectModal}>Create project</button>
          </CreateButton>
        ): ''
      }
      <Container>
        {
          isLoggedIn && hasProject ? (
            <HasProject 
              projects={projects}
              onAddTask={handleTaskCreation}
              onTaskRemove={handleRemoveTask}
              onChecked={handleDoneTask}
              onRemoveProject={handleDeleteProject}
            />
          ) : isLoggedIn && !hasProject ? (
            <NoProject />
          ) : (
            <NotLogged />
          )
        }
      </Container>
      <LoginModal 
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
      <SignUpModal 
        isOpen={isSignUpModalOpen}
        onRequestClose={handleCloseSignUpModal}
      />
      <ProjectModal
        isOpen={isProjectModalOpen}
        onRequestClose={handleCloseProjectModal}
        onAddProject={handleCreateProject}
      />
    </div>
  )
}