import { Props } from "./@types";

export const Title = ({ children, className, ...rest }: Props) => {
  return (
    <h2 className={`inter title-default ${className}`} {...rest}>
      {children}
    </h2>
  );
};