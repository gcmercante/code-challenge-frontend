import { HeaderComponent, LogInButton, ProfileButton } from "./styles";

interface HeaderProps {
  onOpenLoginModal: () => void;
  onOpenSignUpModal: () => void;
}

export function Header({ onOpenLoginModal, onOpenSignUpModal }: HeaderProps) {
  const logged = false;
  return (
    <HeaderComponent>
      {
        logged ? (
          <ProfileButton><img /></ProfileButton>
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