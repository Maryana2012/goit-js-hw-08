
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryCard = createGalleryCard(galleryItems);

function createGalleryCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `
   <a  class="gallery__link" href="${original}">
    <img 'self'
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
   `
}).join(''); 
}

gallery.insertAdjacentHTML('afterbegin', galleryCard);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
} );
