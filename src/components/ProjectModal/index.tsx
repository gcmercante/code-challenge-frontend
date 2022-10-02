import { X } from "phosphor-react";
import { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import { Project } from "../../shared/interfaces/Project";
import { ProjectForm } from "./styles";

interface ProjectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddProject: (project: Project) => void;
}

export function ProjectModal({ isOpen, onRequestClose, onAddProject }: ProjectModalProps) {
  const [projectName, setProjectName] = useState('');

  function handleProjectSubmit(event: FormEvent) {
    event.preventDefault();

    const project = {
      id: Math.random() * (100 - 3) + 3,
      name: projectName,
      tasks: [],
    }

    onAddProject(project);

    onRequestClose();
    setProjectName('');
  }

  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <X size={24} />
      </button>
      <ProjectForm onSubmit={handleProjectSubmit}>
        <h2>Create a project</h2>
        <input 
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button type="submit">Create project</button>
      </ProjectForm>
    </ReactModal>
  )
}