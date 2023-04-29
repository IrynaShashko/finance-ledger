import SimpleLightbox from 'simplelightbox';
const imgContainer = document.querySelector('#gallery div a');

const gallery = new SimpleLightbox('#gallery div a', {
  caption: true,
  captionDelay: 250,
  captionsData: 'alt',
});

imgContainer.addEventListener('click', gallery);
