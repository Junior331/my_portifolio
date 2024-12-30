import { LayoutProps } from "./@types";
import { Header } from "@/app/components/modules";
import { PortfolioText } from "@/app/components/elements";
import { BackgroundBeamsWithCollision } from "@/app/components/organism";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-between bg-background dark:bg-dot-[#3e4a69]/[0.2] relative overflow-y-auto">
      <BackgroundBeamsWithCollision />
      <PortfolioText />
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%, black)]" />
      <div className="flex flex-col w-full min-h-screen h-auto items-center justify-items-center overflow-y-auto relative z-50 p-7 px-8">
        <Header />
        {children}
      </div>
    </div>
  );
};
