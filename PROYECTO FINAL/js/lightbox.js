// Vanilla JS Lightbox
let currentImageIndex = 0;
const images = document.querySelectorAll('[data-lightbox]');
let lightboxContainer;
let lightboxImg;

function createLightbox() {
    lightboxContainer = document.createElement('div');
    lightboxContainer.classList.add('lightbox-overlay');
    lightboxImg = document.createElement('img');
    lightboxContainer.appendChild(lightboxImg);
    document.body.appendChild(lightboxContainer);
    lightboxContainer.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', handleKeyPress);
}

function openLightbox(index) {
    lightboxImg.src = images[index].src;
    lightboxContainer.classList.add('visible');
    currentImageIndex = index;
}

function closeLightbox() {
    lightboxContainer.classList.remove('visible');
}

function handleKeyPress(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        openLightbox(currentImageIndex);
    } else if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        openLightbox(currentImageIndex);
    }
}

images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

createLightbox();