import { Dispatch, ReactNode, SetStateAction } from 'react';

export default interface TooltipProps{
    children: ReactNode,
    open?: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}