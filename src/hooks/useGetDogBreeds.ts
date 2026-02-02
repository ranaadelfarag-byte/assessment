import { useCallback, useEffect, useRef, useState } from "react";
import { getDogBreeds } from "../services/getDogBreeds";
import { FETCH_URL } from "../constants/api";

export const useGetDogBreeds = () => {
  const [breeds, setBreeds] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const requestInProgress = useRef(false);
  const fetchBreeds = useCallback(
    async (url: string, isInitial: boolean = false) => {
      if (requestInProgress.current) return;
      requestInProgress.current = true;
      if (isInitial) {
        setIsLoading(true);
      } else {
        setIsFetchingMore(true);
      }
      try {
        const res = await getDogBreeds(url);
        //console.log(res);
        if (isInitial) {
          setBreeds(res.data);
        } else {
          //setBreeds([...breeds, ...res.data]);
          setBreeds((excData) => [...excData, ...res.data]);
        }
        if (res.links?.next) {
          setNextPageUrl(res.links.next);
          setHasMore(true);
        } else {
          setNextPageUrl(null);
          setHasMore(false);
        }
        setError(null);
      } catch (err) {
        setError("Failed to fetch breeds");
      } finally {
        setIsLoading(false);
        setIsFetchingMore(false);
        requestInProgress.current = false;
      }
    },
    [],
  );
  const loadMore = useCallback(() => {
    if (hasMore && nextPageUrl && !requestInProgress.current) {
      fetchBreeds(nextPageUrl, false);
    }
  }, [hasMore, nextPageUrl, fetchBreeds]);
  useEffect(() => {
    fetchBreeds(FETCH_URL, true);
  }, [fetchBreeds]);
  return {
    breeds,
    isLoading,
    isFetchingMore,
    error,
    hasMore,
    loadMore,
  };
};
