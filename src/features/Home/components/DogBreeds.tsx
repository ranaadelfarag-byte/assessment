import InfiniteList from "../../../components/common/InfiniteList";
import { useGetDogBreeds } from "../../../hooks/useGetDogBreeds";
import ListCard from "./ListCard";

export default function DogBreeds() {
  const { breeds, isLoading, isFetchingMore, error, hasMore, loadMore } =
    useGetDogBreeds();
  return (
    <div id="list" className="bg-[#F9F9F9] py-5">
      <div className="px-20">
        <h1 className="mb-2 text-4xl font-semibold text-gray-900">
          Dog Breeds
        </h1>
        <p className="mb-6 text-md text-[#C57D36]/70">
          Scroll and learn about different dog breeds
        </p>
      </div>
      <InfiniteList
        data={breeds}
        renderData={(breed, index) => <ListCard key={index} breed={breed} />}
        onLoadMore={loadMore}
        isLoading={isLoading}
        isFetchingMore={isFetchingMore}
        hasMore={hasMore}
        error={error}
      />
    </div>
  );
}
