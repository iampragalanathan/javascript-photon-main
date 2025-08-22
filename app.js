const authorization =
  "btPvqjuzJrQ8pCaDuu1OPYNnDqUQlepnJo86ma3BzeBDy1GzEWJe28rc";

let fetchLink = "";

const gallery=document.querySelector(".gallery")

async function fetchApi(url) {
  const dataFetch = await fetch(
    url,
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

const generatePictures = (data) => {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `
  
  <div class="gallery-info">
  <p>${photo.photographer}</p>
  <a target="_blank" href="${photo.src.original}">Download</a>
  </div>
  <img src="${photo.src.original}"/>`;
    gallery.appendChild(galleryImg);
  });
};

async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated?per_page=20&page=1";
  const data = await fetchApi(fetchLink);
  // console.log(data.photos);
  generatePictures(data);
}
curatedPhotos();
