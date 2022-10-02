import { Modal } from "../../../../components/Modal";
import { LogInForm } from "../LogInForm";
interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LoginModal({isOpen, onRequestClose}: LoginModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <LogInForm />
    </Modal>
  )
}