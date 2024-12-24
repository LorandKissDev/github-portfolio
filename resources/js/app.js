import {FadeAnimations} from '@/js/fade-animations';

const fadeAnimations = new FadeAnimations();

document.addEventListener('scroll', (e) => {
    fadeAnimations.handle();
});
