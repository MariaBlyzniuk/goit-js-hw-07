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

function onGalleryOpenModal(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return;
    }
    
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
        `,
            {
                onShow: instance => {
                    document.addEventListener('keydown', fn);
                },
                onClose: instance => {
                    document.removeEventListener('keydown', fn);
    }
        },
    );
    const fn = onCloseModal(instance);
        instance.show();
};

function onCloseModal(instance) {
    return function (e) {
        if (e.code === 'Escape') {
            instance.close();
        }
    }
};











