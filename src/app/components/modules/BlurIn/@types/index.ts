export type variantProps =  {
  hidden: { filter: string; opacity: number };
  visible: { filter: string; opacity: number };
}
export interface Props {
  word: string;
  duration?: number;
  className?: string;
  variant?: variantProps;
}
