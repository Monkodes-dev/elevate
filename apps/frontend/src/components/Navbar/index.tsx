"use client"
import Image from "next/image";
import { useContext, useState } from "react";
import { FaBars, FaBell, FaPaperPlane, FaSearch, FaSignOutAlt, FaUser } from "react-icons/fa";
import { SidebarContext } from "../../contexts/sidebar";
import Link from "next/link";
import Tooltip from "@repo/ui/tooltip";
import NotificationDrawer from "./components/NotificationDrawer";

export default function Navbar(){
    const {open, setOpen} = useContext(SidebarContext);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [notifitionOpen, setNotifitionOpen] = useState(false);

    return(
        <>
            <nav className="w-full bg-purple-100/20 text-purple-800 border-b h-20 border-gray-200 px-4 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div onClick={()=>setOpen(!open)} className="bg-purple-700/10 w-10 h-10 flex items-center justify-center rounded-md">
                        <FaBars size={18}/>
                    </div> 
                    <Link href="/">
                        <Image src="/elevate-logo.png" width={168} height={40} alt="Logo da Elevate"/>
                    </Link>
                </div>
                <div className="flex gap-4 items-center relative">
                    <div onClick={()=>{setNotifitionOpen(true)}} className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center">
                        <FaBell />
                    </div>
                    <button onClick={()=>{setTooltipOpen(true)}} className="bg-purple-800 hover:bg-purple-900 h-10 w-10 font-bold flex items-center justify-center text-white rounded-xl">
                        JH
                    </button>
                <Tooltip open={tooltipOpen} setOpen={setTooltipOpen}>
                        <div className="py-3 px-5 border border-purple-800 bg-purple-800">
                            <span className="text-gray-300 text-xs">Logado com</span>
                            <h2 className=" font-semibold">João Henrique</h2>
                        </div>
                        <div className="py-3 px-2 text-slate-800">
                            <Link href="/profile"  onClick={()=>{setTooltipOpen(false)}} role="button" className="text-center px-3 w-full rounded-md  hover:bg-black/10 py-3 flex gap-4 items-center"> 
                                <FaUser size={16}/>  Seu perfil
                            </Link>
                            <button  className="px-3 w-full rounded-md hover:bg-black/10 py-3 flex gap-4 items-center"> 
                                <FaSignOutAlt size={16}/>  Sair
                            </button>
                        </div>
                </Tooltip>
                </div>
            </nav>
            <NotificationDrawer open={notifitionOpen} setOpen={setNotifitionOpen} />
        </>
    )
}