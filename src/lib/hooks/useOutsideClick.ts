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

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler, enabled]);
}