import SimpleLightbox from 'simplelightbox';

// const galery = document.querySelector('#galery div a');

const gallery = new SimpleLightbox('#galery div a', {
  caption: true,
  captionDelay: 250,
  captionsData: 'alt',
  nav: true,
  navText: ['&lsaquo', 'rsaquo'],
});
