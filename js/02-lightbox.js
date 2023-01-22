import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryPictures = document.querySelector(".gallery");

const mainPageMarkup = galleryItems
  .map((img) => {
    return `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`;
  })
  .join("");

galleryPictures.innerHTML = mainPageMarkup;

galleryPictures.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
