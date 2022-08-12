import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Создаем функцию для разметки

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
			<li class="gallery__item">
  			<a classs="gallery__link" href="${original}">
				<img class="gallery__image" 
				src="${preview}" 
				alt="${description}" />
			</a>
			</li>
	`;
    })
    .join(" ");
}

// 2. Получаем из HTML ссылку на коневой элемент Галереи
const galleryRef = document.querySelector(".gallery");

// 4. Добавляем в код HTML, разметку для элементов галереи.
galleryRef.insertAdjacentHTML("afterbegin", makeGalleryMarkup(galleryItems));

// 4. Функция-конструктор из библиотеки SimpleLightBox
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
