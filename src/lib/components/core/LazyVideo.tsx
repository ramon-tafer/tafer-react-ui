import { useEffect, useRef } from 'react';
import useInView from './../../hooks/useInView';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export function LazyVideo({
  src,
  poster,
  threshold = 0.25,
  triggerOnce = false,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView<HTMLVideoElement>({ 
    threshold, 
    triggerOnce 
  });

  useEffect(() => {
    if (videoRef.current) {
      ref.current = videoRef.current;
    }
  }, [ref]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      video.play().catch(() => {
      });
    } else {
      video.pause();

    }
  }, [inView]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      playsInline
      {...props}
    />
  );
}