import { FormEvent, useContext, useState } from "react";
import { Modal } from "../../../../components/Modal";
import { ProjectContext } from "../../../../contexts/ProjectContext";
import { Project } from "../../../../shared/interfaces/Project";
import { Task } from "../../../../shared/interfaces/Task";
import { ProjectForm } from "./styles";

interface ProjectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  edit?: boolean;
  project?: Project;
}

interface UpsertProjectType {
  id?: string;
  title: string;
  tasks: Task[]
}

export function ProjectModal({ isOpen, onRequestClose, edit, project }: ProjectModalProps) {
  const [projectName, setProjectName] = useState('');
  const { onCreateProject, onEditProject } = useContext(ProjectContext);

  function handleProjectSubmit(event: FormEvent) {
    event.preventDefault();

    const upsertProject: UpsertProjectType = {
      title: projectName,
      tasks: []
    }

    if(project?.id) {
      upsertProject.id = project.id;
    }

    if(project?.tasks) {
      upsertProject.tasks = project.tasks;
    }

    if(edit) {
      onEditProject(upsertProject);
    } else {
      onCreateProject(upsertProject);
    }

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
        <button type="submit" disabled={projectName.length ? false : true}>
          {
            edit ? 'Edit project' : 'Create project'
          }
        </button>
      </ProjectForm>
    </Modal>
  )
}