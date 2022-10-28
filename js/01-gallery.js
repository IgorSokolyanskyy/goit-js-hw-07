/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onOpenModalImageClick);
// galleryContainer.addEventListener("click", onEscKeyPress);
let instance = basicLightbox.create(`
<img src="${url}" width="800" height="600">`)
console.log(instance)

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

function onOpenModalImageClick(e) {
  window.addEventListener("keydown", onEscKeyPress);

  e.preventDefault();
  const url = e.target.dataset.source;
  console.dir(url);
 
  instance.show();
}

// function onModalCloseToEscape() {
    
//   }
  

function onEscKeyPress(e) {
  console.log(e)
  if (e.code === "Escape") {  
    instance.close()
    window.removeEventListener("keydown", onEscKeyPress)  
   
  }
}

