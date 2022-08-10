import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Создаем функцию для разметки

function makeGalleryMarkup(galleryItems) {
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
		</div>
	`;
    })
    .join(" ");
}

// 3. Получаем из HTML ссылку на коневой элемент Галереи
const galleryRef = document.querySelector(".gallery");

// 2. Добавляем в код HTML, разметку для элементов галереи.
galleryRef.insertAdjacentHTML("afterbegin", makeGalleryMarkup(galleryItems));

//  4. Добавляем слушатель события.

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  const evt = event.target;

  if (!evt.classList.contains("gallery__image")) {
    return;
  } else {
    evt.setAttribute("src", evt.dataset.source);
    return modalShowGalleryItems(evt);
  }
});

//  5. Функция создания модального окна
function modalShowGalleryItems(image) {
  const { src, alt } = image;
  basicLightbox
    .create(
      `
    <img src="${src}" width="" height="" alt="${alt}">
`
    )
    .show();
}
