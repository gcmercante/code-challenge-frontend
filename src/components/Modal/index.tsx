import { X } from "phosphor-react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode
}

export function Modal({ isOpen, onRequestClose, children }: ModalProps) {
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
      
      { children }
    </ReactModal>
  )
}