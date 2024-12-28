import { Header } from "../../modules";
import { LayoutProps } from "./@types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-between">
      <div className="flex flex-col w-full h-auto items-center min-h-screen">
        <Header />
        {children}
      </div>
    </div>
  );
};
