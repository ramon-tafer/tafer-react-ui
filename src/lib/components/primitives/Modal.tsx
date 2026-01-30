import { useRef } from "react"
import { useOutsideClick } from "src/lib/hooks/useOutsideClick"

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement>{
    open: boolean
    onClose: () => void
    children: React.ReactNode
    closeOnOutsideClick?: boolean
}

export default function Modal({open, onClose, closeOnOutsideClick = true, children, ...props}: ModalProps){
    const ref = useRef<HTMLDialogElement>(null)
    
    useOutsideClick(ref, onClose, closeOnOutsideClick && open)
    
    if(!open) return null

    return <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <dialog
        ref={ref}
        open
        className="relative m-0 rounded-lg bg-white p-6 shadow-xl"
        {...props}
      >
        {children}
      </dialog>
    </div>
}