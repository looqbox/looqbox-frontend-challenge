import React, { FC } from "react";
import "./style.css";
import { IModalProps } from "./interface";
import { IconClose } from "../../assets/icons";

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <IconClose />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
