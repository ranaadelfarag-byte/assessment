import { CheckCheck, FileInput, TriangleAlert } from "lucide-react";
import { useInfiniteScroll } from "../../hooks/useInfinitScroll";
interface InfiniteListProps {
  data?: Dog[];
  renderData: (item: Dog, index: number) => React.ReactNode;
  onLoadMore: () => void;
  isLoading?: boolean;
  isFetchingMore?: boolean;
  hasMore?: boolean;
  error?: string | null;
  configs?: {
    threshold?: number;
    rootMargin?: string;
  };
  className?: string;
}
export default function InfiniteList({
  data = [],
  renderData,
  onLoadMore,
  isLoading = false,
  isFetchingMore = false,
  hasMore = true,
  error = null,
  configs = { threshold: 0.8, rootMargin: "0px 0px 200px 0p" },
  className = "",
}: InfiniteListProps) {
  const observerTarget = useInfiniteScroll(onLoadMore, {
    threshold: configs.threshold,
    rootMargin: configs.rootMargin,
    hasMore,
    isLoading: isFetchingMore,
  });

  if (isLoading) {
    return (
      <div className="border-t-primary! mx-auto size-14 animate-spin rounded-full border-[6px] border-gray-200">
        <span className="sr-only">Loading Breeds...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 flex flex-col bg-white border py-4 mx-20 rounded-md items-center gap-3 text-center">
        <div className="flex size-10 items-center justify-center rounded-full bg-yellow-100">
          <TriangleAlert className="size-7 text-yellow-600" />
        </div>
        <p className="text-md font-medium text-gray-700">
          Something went wrong
        </p>
        <p className="text-md font-medium text-gray-700">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-[#C57D36] hover:bg-[#c26f1d] text-white rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!isLoading && data.length === 0) {
    return (
      <div className="justify-center flex flex-col text-center">
        <div><FileInput className="size-7"/></div>
        <h2>No Breeds Found</h2>
        <p>We couldn't find any dog breeds at the moment.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div>{data.map((item, index) => renderData(item, index))}</div>
      {hasMore && (
        <div ref={observerTarget} className="h-1">
          {isFetchingMore && (
            <div className="mt-4 flex justify-center text-sm text-gray-500">
              Loading more breeds…
            </div>
          )}
        </div>
      )}
      {!hasMore && data.length > 0 && (
        <div className="mt-8 flex flex-col bg-white border py-4 mx-20 rounded-md items-center gap-3 text-center">
          <div className="flex size-10 items-center justify-center rounded-full bg-green-100">
            <CheckCheck className="size-7 text-green-600" />
          </div>
          <p className="text-md font-medium text-gray-700">
            You’ve seen all {data.length} breeds!
          </p>
        </div>
      )}
    </div>
  );
}
