import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onGalleryOpenModal);
window.addEventListener('keydown', onCloseModal);

function createGalleryMarkup(galleryItems) {
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
    </div>`
    }
    ).join('');

};
let instance;
function onGalleryOpenModal(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return;
    }
    
    instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
        `,
            {
    onShow: () => window.addEventListener('keydown', instance),
    onClose: () => window.removeEventListener('keydown', instance),
    },);
        instance.show();
};

function onCloseModal(e) {
    if (e.code === 'Escape') {
        instance.close();
        
    }
};











