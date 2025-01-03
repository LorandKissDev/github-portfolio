import {FadeAnimations} from '@/js/fade-animations';
import {GalleryLoader} from '@/js/gallery-loader';

const fadeAnimations = new FadeAnimations();
const galleryLoader = new GalleryLoader();

document.addEventListener('scroll', (e) => {
    fadeAnimations.handleScroll();
    galleryLoader.handleScroll();
});
