import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";
import useAvoidScroll from "../../hooks/useAvoidScroll";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import useKeydown from "../../hooks/useKeydown";

type DrawerSide = "left" | "right" | "top" | "bottom"

interface DrawerProps {
    open: boolean;
    /* eslint-disable-next-line */
    onClose: (...params: any[]) => void
    side?: DrawerSide
    children: React.ReactNode
    closeOnOutsideClick?: boolean
    closeOnEscape?: boolean
}

export default function Drawer({
    open,
    onClose,
    side = "right",
    closeOnOutsideClick = true,
    closeOnEscape = true,
    children,
}: DrawerProps){
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick(ref, onClose, open && closeOnOutsideClick)
    useKeydown({ 
        handler: onClose, 
        open: open && closeOnEscape, 
        key: 'Escape' 
    })
    useAvoidScroll({ trigger: open })

    const config = getDrawerConfig(side);

    return <AnimatePresence>
        { open && (
            <>
                <motion.div 
                    className="fixed inset-0 z-40 bg-black/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
                 <motion.div
                    ref={ref}
                    className={`fixed z-50 bg-white shadow-xl ${config.position}`}
                    initial={config.initial}
                    animate={{ x: 0, y: 0 }}
                    exit={config.exit}
                    transition={{ type: "tween", duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </>
        )}
    </AnimatePresence>
}

const getDrawerConfig = (side: DrawerSide)  => {
  return {
    "left": {
        position: "left-0 top-0 h-full w-80",
        initial: { x: "-100%" },
        exit: { x: "-100%" },
    },

    "right": {
        position: "right-0 top-0 h-full w-80",
        initial: { x: "100%" },
        exit: { x: "100%" },
    },

    "top": {
        position: "top-0 left-0 w-full h-80",
        initial: { y: "-100%" },
        exit: { y: "-100%" },
    },

    "bottom": {
        position: "bottom-0 left-0 w-full h-80",
        initial: { y: "100%" },
        exit: { y: "100%" },
    }
  }[side]
}
