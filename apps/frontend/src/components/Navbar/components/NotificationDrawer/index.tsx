import { IoCloseSharp, IoInformationCircle } from "react-icons/io5";
import NotificationDrawerProps from "./notificationDrawer.props";

export default function NotificationDrawer({open, setOpen}: NotificationDrawerProps) {
  return (
    <div className="z-[200]">
      <div onClick={()=>{setOpen(false);}} data-open={open} className= "z-40  w-screen h-screen hidden bg-black/30 opacity-0 fixed inset-0 transition data-[open=true]:flex data-[open=true]:opacity-100"></div>
      <div data-open={open} id="drawer-example" className="z-40 fixed top-0 right-0 h-screen p-4 overflow-y-auto transition-transform translate-x-[500px] bg-white w-80 data-[open=true]:translate-x-0">
        <h5 className="inline-flex items-center mb-4 text-base font-semibold text-purple-800">
          <IoInformationCircle size={20}/>Notificações</h5>
        <button onClick={()=>{setOpen(false);}} type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-slate-600 bg-transparent hover:bg-gray-200 hover:text-akee-pink rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center" >
          <IoCloseSharp size={24} />
          <span className="sr-only">Fechar menu</span>
        </button>
        <p className="mb-6 text-sm text-gray-400">Confira suas principais notificações. </p>
        <div className="mt-4">

        </div>
      </div>
    </div>
  );
}