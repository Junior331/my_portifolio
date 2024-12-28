import { Props } from "./@types";

export const Text = ({ children, className, ...rest }: Props) => {
  return (
    <p
      className={`inter text-default ${className} `}
      {...rest}
    >
      {children}
    </p>
  );
};
