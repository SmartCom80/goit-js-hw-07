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

// 3. Получаем из HTML ссылку на коневой элемент Галереи
const galleryRef = document.querySelector(".gallery");

// 2. Добавляем в код HTML, разметку для элементов галереи.
galleryRef.insertAdjacentHTML("afterbegin", makeGalleryMarkup(galleryItems));

// 3. Добавляем слушатель события и вызов конструктора модального окна
galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  const evt = event.target;

  if (!evt.classList.contains("gallery__image")) {
    return;
  } else {
    return modalShowGalleryItems();
  }
});

// 4. Функция-конструктор из библиотеки SimpleLightBox
function modalShowGalleryItems() {
  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
