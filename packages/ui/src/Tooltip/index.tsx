"use client"

import { useEffect, useRef, useState } from "react"
import TooltipProps from "./tooltip.props";

export default function Tooltip({ children, open, setOpen}: TooltipProps){
    const tooltip = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (event: Event) => {
          if(tooltip.current && event.target){
            if (!tooltip.current.contains(event.target as Node)) {
                setOpen(false);
            }
          }
        };
        document.addEventListener("click", handler);
        return () => {
            document.removeEventListener("click", handler);
        };
      });
    return(
        
        <div ref={tooltip} data-hidden={!open} className="w-[240px] z-[200] overflow-hidden text-sm text-white transition-all data-[hidden=true]:opacity-0 backdrop-blur-md shadow-sm  bg-white border h-auto right-2 absolute top-12 rounded-md">
            {children}
        </div>
    )
}