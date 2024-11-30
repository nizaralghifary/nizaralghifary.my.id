import { useEffect, useState, useRef } from "react";

type UseInViewAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
};

export const useInViewAnimation = (options: UseInViewAnimationOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || "0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
};