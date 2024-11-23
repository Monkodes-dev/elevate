"use client"

import { useContext } from "react"
import { SidebarContext } from "../../contexts/sidebar"
import { FaClock, FaHome } from "react-icons/fa";
import {twMerge} from "tailwind-merge";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar(){
    const {open} = useContext(SidebarContext);
    const pathname = usePathname();
    return(
        <aside data-open={open} className="data-[open=true]:w-[324px] py-4 flex flex-col gap-2 transition-all w-[76px] px-2.5 h-full bg-white border-r border-gray-200">
           
            {
                sidebarItems.map((item)=>{
                    const thisPath = (pathname == "/" && item.href == "/") || (pathname.includes(item.href) && item.href != "/");
                    return(
                        <Link href={item.href} className={twMerge("px-4 h-12 rounded-md flex gap-4 items-center w-full text-slate-600 overflow-hidden", thisPath && "bg-purple-700/10 text-purple-700")}>
                            <item.icon size={24} className="text-purple-800 min-w-6"/>
                            <span style={{opacity: open ? 1 : 0}} className="line-clamp-1 text-lg">
                                {item.text}
                            </span>
                        </Link>
                    )
                })
            }
        </aside>
    )
}

export const sidebarItems = [
    {
        icon: FaHome,
        text: "Início",
        href: "/",
        permissions: ["USER", "ADMIN", "MANAGER"]
    },
    {
        icon: FaClock,
        text: "Gestão de ponto",
        href: "/clock-in",
        permissions: ["USER", "ADMIN", "MANAGER"]
    },

]