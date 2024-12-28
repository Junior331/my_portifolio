export interface Snackbar {
  isOpen: boolean;
  message: string;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
  severity: "success" | "info" | "warning" | "error";
}

export interface SnackbarContextType {
  snackbar: Snackbar;
  closeSnackbar: () => void;
  resetSnackbar: () => void;
  setSnackbar: (snackbarData: Snackbar) => void;
}

export type stack = {
  id: number;
  url: string;
  name: string;
};

export type project = {
  id: number;
  text: string;
  date: string;
  title: string;
  image: string;
  stacks: stack[];
  description: string;
};