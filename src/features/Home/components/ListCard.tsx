import { Clock } from "lucide-react";
import { ListItem } from "../../../components/common/ListItem";

export default function ListCard({ breed }: { breed: Dog }) {
  const attributes = breed.attributes || {};

  return (
    <ListItem>
      <div className="flex flex-col gap-4">
        <header className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#C57D36]">
              {attributes.name || "Unknown Breed"}
            </h2>

            {attributes.life && (
              <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                <Clock className="size-4 text-[#C57D36]" />
                <span>
                  {attributes.life.min}–{attributes.life.max} years
                </span>
              </div>
            )}
          </div>
        </header>
        {attributes.description && (
          <p className="text-sm leading-relaxed text-gray-700">
            {attributes.description}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {attributes.male_weight && (
            <div className="flex justify-between rounded-md bg-gray-50 px-3 py-2">
              <span className="text-gray-500">Male Weight</span>
              <span className="font-medium text-gray-800">
                {attributes.male_weight.min}–{attributes.male_weight.max}{" "}
                {attributes.male_weight.min > 50 ? "lbs" : "kg"}
              </span>
            </div>
          )}

          {attributes.female_weight && (
            <div className="flex justify-between rounded-md bg-gray-50 px-3 py-2">
              <span className="text-gray-500">Female Weight</span>
              <span className="font-medium text-gray-800">
                {attributes.female_weight.min}–{attributes.female_weight.max}{" "}
                {attributes.female_weight.min > 50 ? "lbs" : "kg"}
              </span>
            </div>
          )}

          {attributes.hypoallergenic && (
            <div className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 sm:col-span-2">
              <span className="text-gray-500">Hypoallergenic</span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium text-[#C57D36] bg-[C57D36]/50 `}
              >
                {attributes.hypoallergenic ? "Yes" : "No"}
              </span>
            </div>
          )}
        </div>
      </div>
    </ListItem>
  );
}
