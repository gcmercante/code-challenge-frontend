import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { HeaderComponent, LogInButton, ProfileButton } from "./styles";

interface HeaderProps {
  onOpenLoginModal: () => void;
  onOpenSignUpModal: () => void;
}

export function Header({ onOpenLoginModal, onOpenSignUpModal }: HeaderProps) {
  const { authToken, handleSignOut } = useContext(AuthContext);
  const [signOutOpen, setSignOutOpen] = useState(false);

  function onSignOut() {
    handleSignOut()
    setSignOutOpen(!signOutOpen)
  }
  
  return (
    <HeaderComponent>
      {
        authToken ? (
          <nav>
            <ProfileButton onClick={() => setSignOutOpen(!signOutOpen)}><img /></ProfileButton>
            { signOutOpen ? ( <ul><button onClick={onSignOut}>Sign out</button></ul> ) : '' }
          </nav>
        ):
        (
          <div>
            <LogInButton onClick={onOpenLoginModal}>Sign in</LogInButton>
            <LogInButton onClick={onOpenSignUpModal}>Sign up</LogInButton>
          </div>
        )
      }
    </HeaderComponent>
  )
}