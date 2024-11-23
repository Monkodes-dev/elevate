import { Dispatch, SetStateAction } from "react";

export default interface NotificationDrawerProps{
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}