/** @param el dom object. */
export function isElementInViewport( el ) {

    const rect = el.getBoundingClientRect();

    return (rect.bottom >= 0 && rect.right >= 0 && 
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.left <= (window.innerWidth || document.documentElement.clientWidth));
}
