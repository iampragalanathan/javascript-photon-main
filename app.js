const authorization =
  "btPvqjuzJrQ8pCaDuu1OPYNnDqUQlepnJo86ma3BzeBDy1GzEWJe28rc";

let fetchLink = "";

async function fetchApi() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=15&page=1",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: authorization,
      },
    }
  );
  const data = await dataFetch.json();
  return data;
}
// fetchApi();

async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated?per_page=15&page=1";
  const data = await fetchApi(fetchLink);
  console.log(data.photos);
}
curatedPhotos();
