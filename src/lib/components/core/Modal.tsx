import { useRef } from "react"
import { useOutsideClick } from "./../../hooks/useOutsideClick"
import useKeydown from "../../hooks/useKeydown"
import useAvoidScroll from "../../hooks/useAvoidScroll"

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement>{
    open: boolean
    onClose: () => void
    children: React.ReactNode
    closeOnOutsideClick?: boolean
    closeOnEscape?: boolean
}

export default function Modal({
  open, 
  onClose, 
  closeOnOutsideClick = true, 
  closeOnEscape = false, 
  children,
  ...props
}: ModalProps) {

    const ref = useRef<HTMLDialogElement>(null)
    
    useOutsideClick(ref, onClose, open && closeOnOutsideClick);
    useKeydown({ 
      handler: onClose, 
      key: 'Escape', 
      enabled: open && closeOnEscape 
    })
    useAvoidScroll({ trigger: open })    
    
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