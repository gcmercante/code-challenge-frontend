import { Modal } from "../../../../components/Modal";
import { SignUpForm } from "../SignUpForm";

interface SignUpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SignUpModal({isOpen, onRequestClose}: SignUpModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <SignUpForm
        onRequestClose={onRequestClose}
      />
    </Modal>
  )
}