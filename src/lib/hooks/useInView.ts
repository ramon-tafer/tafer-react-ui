import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
    threshold?: number;
    triggerOnce?: boolean;
}

export default function useInView<T extends HTMLElement = HTMLElement>(
    options: UseInViewOptions = {}
) {
    const { threshold = 0.25, triggerOnce = false } = options;
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
                
                // Solo desconectar si triggerOnce está activo y está visible
                if (triggerOnce && entry.isIntersecting) {
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, triggerOnce]);

    return { ref, inView };
}