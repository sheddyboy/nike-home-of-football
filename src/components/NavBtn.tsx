import Link from "next/link";
import { MouseEventHandler } from "react";

interface NavBtnProps {
  text: string;
  link: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function NavBtn({ text, link, active, onClick }: NavBtnProps) {
  return (
    <div
      onClick={onClick}
      className={`${
        !active && "pointer-events-none opacity-20"
      } border-t border-t-black pt-[55px] text-big-caps text-center`}
    >
      <Link href={link}>{text}</Link>
    </div>
  );
}
