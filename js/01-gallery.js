import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML("afterbegin", createGalleryCards(galleryItems));


function createGalleryCards(galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
		return `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
	</a>
 </div>` }).join('');
};

gallery.addEventListener('click', onItemHandler);

function onItemHandler(event) {
	event.preventDefault();

	if (!event.target.classList.contains("gallery__image")) {
		return;
	}

	pictureInModal(event.target.dataset.source);
}

function pictureInModal(originalImageLink) {
	const instance = basicLightbox.create(`
    <img src="${originalImageLink}" width="800" height="600">
`)

	instance.show();
	closeByKeybord(instance);
}

function closeByKeybord(instance) {
	document.addEventListener("keydown", (e) => {
		if (e.code == "Escape") {
			instance.close()
		}
	}, { once: true });
}