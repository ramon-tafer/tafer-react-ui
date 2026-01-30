import { useEffect } from "react";

interface Props {
  handler: (e: KeyboardEvent) => void;
  enabled?: boolean;
  key: string;
}

export default function useKeydown({ handler, enabled = true, key }: Props) {
  useEffect(() => {
    if(!open) return
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === key) {
        handler(e);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [enabled, handler, key]);
}
