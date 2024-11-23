import { Dispatch, SetStateAction } from "react";

export interface SidebarContextProps{
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>> 
}