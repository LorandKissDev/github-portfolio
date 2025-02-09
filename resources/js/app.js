import {FadeAnimations} from '@/js/fade-animations';
import {GalleryLoader} from '@/js/gallery-loader';

const fadeAnimations = new FadeAnimations();
const galleryLoader = new GalleryLoader();

document.addEventListener('scroll', (e) => {
    fadeAnimations.handleScroll();
    galleryLoader.handleScroll();
});

//- Fixes lighthouse score, caused by this image incorrect dimension. I am hiding this image on mobile and
// to prevent loading the resource, using an already requested one.
if( (window.innerWidth || document.documentElement.clientWidth) <= 690 ){
    document.querySelector('#about .sc_image img').setAttribute('width', 79);
}