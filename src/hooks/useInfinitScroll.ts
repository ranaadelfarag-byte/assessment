import { useEffect, useRef } from "react";

interface UseInfiniteScrollOptions {
  threshold?: number;
  rootMargin?: string;
  hasMore: boolean;
  isLoading: boolean;
}

export const useInfiniteScroll = (
  fetchMore: () => void,
  {
    threshold = 0.8,
    rootMargin = "0px 0px 200px 0px",
    hasMore,
    isLoading,
  }: UseInfiniteScrollOptions,
) => {
  const observerTarget = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!observerTarget.current) return;
    if (!hasMore || isLoading) return;
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observerRef.current?.disconnect();
          fetchMore();
        }
      },
      {
        threshold,
        rootMargin,
      },
    );
    observerRef.current.observe(observerTarget.current);
    return () => {
      observerRef.current?.disconnect();
    };
  }, [fetchMore, threshold, rootMargin, hasMore, isLoading]);

  return observerTarget;
};
