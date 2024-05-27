import { MouseEventHandler } from "react";

interface OptionProps {
  children: React.ReactNode;
  active: boolean;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function Option({ children, active, onClick }: OptionProps) {
  return (
    <div
      onClick={onClick}
      className={`relative h-[241.56px] w-full ${active ? "opacity-100" : "opacity-20"} flex cursor-pointer items-center justify-center text-[58.5px] uppercase`}
    >
      <div className="absolute inset-0 border-black border-opacity-0">
        <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-black"></div>
        <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-black"></div>
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-black"></div>
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-black"></div>
      </div>
      <span className="h3">{children}</span>
    </div>
  );
}
