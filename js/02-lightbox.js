import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryPictures = document.querySelector(".gallery");

const mainPageMarkup = galleryMarkup(galleryItems);

galleryPictures.insertAdjacentHTML("beforeend", mainPageMarkup);

function galleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);
