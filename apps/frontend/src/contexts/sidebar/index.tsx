"use client"
import React, { createContext, useState } from "react";
import { SidebarContextProps } from "./sidebarContext.props";

const defaultContext: SidebarContextProps = {
    open: false,
    setOpen: () => {}
}

export const SidebarContext = createContext(defaultContext);

export function SidebarProvider({children}: {children:React.ReactNode}){

    const [open, setOpen] = useState(false);

    return(
        <SidebarContext.Provider value={{open, setOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}