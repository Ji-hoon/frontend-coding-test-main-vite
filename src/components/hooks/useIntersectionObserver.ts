import { useEffect, useState } from "react";

export function useIntersectionObserver({
  onIntersect,
}: {
  onIntersect: () => void;
}) {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      async ([{ isIntersecting }]) => {
        if (!isIntersecting) return;
        onIntersect();
      }
    );

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, target]);

  return { setTarget };
}
