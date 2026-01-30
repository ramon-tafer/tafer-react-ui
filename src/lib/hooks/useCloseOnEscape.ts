import { useEffect } from "react"

interface Props {
    onClose: () => void
    open: boolean
}
export default function useCloseOnEscape({ onClose, open }: Props){
    
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if(e.key === 'Escape' && open){
                onClose()
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [open, onClose])
}