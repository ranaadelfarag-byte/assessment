export async function getDogBreeds(url?: string): Promise<ApiResponse<Dog>> {
  const res = await fetch(url || "https://dogapi.dog/api/v2/breeds?page[number]=1&page[size]=10");
  if (!res.ok) {
    throw new Error("Failed to fetch breeds");
  }
  return res.json();
}