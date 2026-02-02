const page = 1;
const size = 10;
export const FETCH_URL =
  `https://dogapi.dog/api/v2/breeds?page[number]=${page}&page[size]=${size}`;
