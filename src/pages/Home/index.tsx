import { useContext, useState } from "react";

import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { ProjectContext } from "../../contexts/ProjectContext";
import { Project } from "../../shared/interfaces/Project";
import { HasProject } from "./components/HasProject";
import { LoginModal } from "./components/LogInModal";
import { NoProject } from "./components/NoProject";
import { NotLogged } from "./components/NotLogged";
import { ProjectModal } from "./components/ProjectModal";
import { SignUpModal } from "./components/SignUpModal";
import { Container, CreateButton } from "./styles";

export function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);

  const { projects } = useContext(ProjectContext);
  const { authToken } = useContext(AuthContext);

  const [currentProject, setCurrentProject] = useState({
    id: '',
    tasks: [],
    title: ''
  } as Project);

  function handleOpenEditProjectModal(project: Project) {
    setIsEditProjectModalOpen(true);
    setCurrentProject(project);
  }

  function handleCloseEditProjectModal() {
    setIsEditProjectModalOpen(false);
  }

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

  const isLoggedIn = authToken ? true : false;
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
              onEditProject={handleOpenEditProjectModal}
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
      />
      <ProjectModal
        isOpen={isEditProjectModalOpen}
        onRequestClose={handleCloseEditProjectModal}
        edit
        project={currentProject}
      />
    </div>
  )
}