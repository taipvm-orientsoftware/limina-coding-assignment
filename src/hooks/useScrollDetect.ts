import { useCallback, useEffect, useRef, useState } from 'react';

export default function useScrollDetect(): [number, React.LegacyRef<HTMLTableSectionElement>] {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef<HTMLTableSectionElement>(null);

  const onScroll = useCallback(
    (e: Event) =>
      requestAnimationFrame(() => {
        if (e.target) {
          setScrollTop((e.target as Element).scrollTop);
        }
      }),
    []
  );

  useEffect(() => {
    const scrollContainer = ref.current;
    if (scrollContainer) {
      setScrollTop(scrollContainer.scrollTop);
      scrollContainer.addEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  return [scrollTop, ref];
}
