import { Dispatch, SetStateAction } from "react";

export interface Props {
  isOpen: boolean;
  className?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}