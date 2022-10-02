import { Project } from "../../../../shared/interfaces/Project";
import { Task } from "../../../../shared/interfaces/Task";
import { ProjectCard } from "../ProjectCard";
import { Container } from "./styles";

interface HasProjectProps {
  projects: Project[];
  onAddTask: (projectId: number, task: Task) => void;
  onTaskRemove: (taskId: number) => void;
  onChecked: (done: boolean, taskId: number) => void;
  onRemoveProject: (projectId: number) => void;
  onEditProject: (projectId: number) => void;
}

export function HasProject({ 
    projects, 
    onAddTask, 
    onTaskRemove, 
    onChecked, 
    onRemoveProject,
    onEditProject
}: HasProjectProps) {
  return (
    <Container>
      {
        projects.map((project) => (
          <ProjectCard 
            project={project} 
            key={project.id}
            onAddTask={onAddTask}
            onTaskRemove={onTaskRemove}
            onChecked={onChecked}
            onRemoveProject={onRemoveProject}
            onEditProject={onEditProject}
          />
        ))
      }
    </Container>
  );
}