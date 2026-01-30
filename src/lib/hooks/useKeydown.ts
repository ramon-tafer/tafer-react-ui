import { useEffect } from "react";

interface Props {
  handler: (e: KeyboardEvent) => void;
  open: boolean;
  key: string;
}

export default function useKeydown({ handler, open, key }: Props) {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === key && open) {
        handler(e);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [open, handler, key]);
}
