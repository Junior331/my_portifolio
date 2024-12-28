import { cn } from "@/app/utils/utils";
import { Props } from "./@types";

export const Card = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    ></div>
  );
};
