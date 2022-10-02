import { FormEvent, useState } from "react";
import { Modal } from "../../../../components/Modal";
import { Project } from "../../../../shared/interfaces/Project";
import { ProjectForm } from "./styles";

interface ProjectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onUpsertProject: (project: Project) => void;
  edit?: boolean;
  project?: Project;
}

export function ProjectModal({ isOpen, onRequestClose, onUpsertProject, edit, project }: ProjectModalProps) {
  const [projectName, setProjectName] = useState('');

  function handleProjectSubmit(event: FormEvent) {
    event.preventDefault();

    const upsertProject = {
      id: Math.random() * (100 - 3) + 3,
      title: projectName,
      tasks: [],
    }

    if(project?.id) {
      upsertProject.id = project.id
    }

    onUpsertProject(upsertProject);

    onRequestClose();
    setProjectName('');
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <ProjectForm onSubmit={handleProjectSubmit}>
        <h2>
          {
            edit ? 'Edit project' : 'Create a project'
          }
        </h2>
        <input 
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button type="submit">
          {
            edit ? 'Edit project' : 'Create project'
          }
        </button>
      </ProjectForm>
    </Modal>
  )
}