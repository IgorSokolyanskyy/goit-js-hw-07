/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = getGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onOpenModalImageClick);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

function getGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

function onOpenModalImageClick(e) {
  window.addEventListener("keydown", onCloseEscKeyPress);
  e.preventDefault();
  
  if (e.target.nodeName !== "IMG") {
    return;
  }
  
  onImegeClick(e);
};

function onImegeClick(e) {
  instance = basicLightbox.create(`
<img src="${e.target.dataset.source}">`);
  instance.show();
}

function onCloseEscKeyPress(e) {
  console.log(e);
  if (e.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onCloseEscKeyPress);
  }
}

