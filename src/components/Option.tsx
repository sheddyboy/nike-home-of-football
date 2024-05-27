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
      className={`relative w-full h-[241.56px] ${active ? "opacity-100" : "opacity-20"} flex items-center justify-center text-[58.5px] uppercase cursor-pointer`}
    >
      <div className="absolute inset-0 border-black border-opacity-0">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-black"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-black"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black"></div>
      </div>
      <span className="h3">{children}</span>
    </div>
  );
}
