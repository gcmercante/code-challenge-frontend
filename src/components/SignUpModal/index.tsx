import { X } from "phosphor-react";
import ReactModal from "react-modal";
import { SignUpForm } from "../SignUpForm";

interface SignUpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SignUpModal({isOpen, onRequestClose}: SignUpModalProps) {
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
      <SignUpForm />
    </ReactModal>
  )
}