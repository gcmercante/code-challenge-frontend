import { useContext } from "react";
import { ProjectContext } from "../../../../contexts/ProjectContext";
import { Project } from "../../../../shared/interfaces/Project";

import { Task } from "../../../../shared/interfaces/Task";
import { ProjectCard } from "../ProjectCard";
import { Container } from "./styles";

interface HasProjectProps {
  onEditProject: (project: Project) => void;
}

export function HasProject({
    onEditProject
}: HasProjectProps) {
  const { projects } = useContext(ProjectContext)

  return (
    <Container>
      {
        projects.map((project) => (
          <ProjectCard 
            project={project} 
            key={project.id}
            onProjectEdit={onEditProject}
          />
        ))
      }
    </Container>
  );
}