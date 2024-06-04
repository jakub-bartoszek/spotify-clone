import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
 icon: IconType;
 label: string;
 active?: boolean;
 href: string;
}

export const SidebarItem = ({
 icon: Icon,
 label,
 active,
 href
}: SidebarItemProps) => {
 return (
  <Link
   href={href}
   className={twMerge(
    `flex flex-row h-auto items-center w-full py-1 gap-x-4 font-medium cursor-pointer text-neutral-400 hover:text-white transition`,
    active && "text-white"
   )}
  >
   <Icon size={26} />
   <p className="truncate w-full">{label}</p>
  </Link>
 );
};
