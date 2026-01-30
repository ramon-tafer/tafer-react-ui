import { useEffect } from "react";

export default function useAvoidScroll({ trigger }: { trigger: boolean }) {
    useEffect(() => {
        if(trigger){
            document.body.style.overflow = 'hidden'
            
            return () => { document.body.style.overflow = '' }
        }
        
    }, [trigger])
}