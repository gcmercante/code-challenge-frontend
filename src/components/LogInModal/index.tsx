import { X } from "phosphor-react";
import ReactModal from "react-modal";
import { LogInForm } from "../LogInForm";

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LoginModal({isOpen, onRequestClose}: LoginModalProps) {
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
      <LogInForm />
    </ReactModal>
  )
}