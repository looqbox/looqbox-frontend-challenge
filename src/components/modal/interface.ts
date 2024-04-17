import { HTMLAttributes } from "react";

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}
