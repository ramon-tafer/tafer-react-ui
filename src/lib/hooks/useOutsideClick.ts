import { useEffect } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
    ref: React.RefObject<T | null>, 
    handler: (e: Event) => void, 
    enabled: boolean = true
) {
    useEffect(() => {
        if (!enabled) return;

        const listener = (e: Event) => {
            const target = e.target as Node;
            
            if (!ref.current || ref.current.contains(target)) {
                return;
            }

            handler(e);
        };

        document.addEventListener('pointerdown', listener);

        return () => { document.removeEventListener('pointerdown', listener); };
        
    }, [ref, handler, enabled]);
}