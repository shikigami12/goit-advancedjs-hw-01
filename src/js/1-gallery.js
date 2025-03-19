import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
class Image {
  constructor(preview, original, description) {
    this.preview = preview;
    this.original = original;
    this.description = description;
  }
}

const images = [
  new Image(
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    'Hokkaido Flower'),
  new Image(
    'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    'Container Haulage Freight'),
  new Image(
    'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    'Aerial Beach View'),
  new Image(
    'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    'Flower Blooms'),
  new Image(
    'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    'Alpine Mountains'),
  new Image(
    'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    'Mountain Lake Sailing'),
  new Image(
    'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    'Alpine Spring Meadows'),
  new Image(
    'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    'Nature Landscape'),
  new Image(
    'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    'Lighthouse Coast Sea'),
];

/**
 * Creates a gallery item element.
 * @param {Image} image - The image object.
 * @returns {HTMLLIElement} The gallery item element.
 */
function createGalleryElement(image) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  const img = document.createElement('img');
  item.classList.add('gallery__item');
  img.classList.add('gallery__image');
  img.src = image.preview;
  img.alt = image.description;
  img.dataset.source = image.original;
  link.href = image.original;
  link.classList.add('gallery__link');
  link.append(img);
  item.append(link);
  return item;
}

/**
 * Initializes the gallery with the provided images.
 * @param {Image[]} images - The array of image objects.
 */
function initGallery(images) {
  const galleryElement = document.querySelector('.gallery');
  const items = images.map(createGalleryElement);
  galleryElement.append(...items);
}

initGallery(images);
new SimpleLightbox('.gallery .gallery__item .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});


