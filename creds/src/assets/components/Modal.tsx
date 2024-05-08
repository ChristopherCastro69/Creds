import React from "react";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {
  return (
    <>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 h-full w-full overflow-auto bg-black bg-opacity-75 flex items-center justify-center transform transition duration-300 opacity-0 ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        onClick={handleClose}
      >
        <div className="bg-white p-12">{children}</div>
      </div>
    </>
  );
};
export default Modal;
