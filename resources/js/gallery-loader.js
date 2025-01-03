//import { isElementInViewport } from '@/js/is-element-in-viewport';

export class GalleryLoader {

    constructor()
    {
        //this.galleries_container = document.getElementById('galleries');
        this.inserted = false;
        //this.galleries = ['falcosun',''];
        this.handleScroll();

        // Create blueimp galleries from dataset
        document.querySelectorAll('.gallery').forEach(item => {
            item.addEventListener('click', (e) => {

                let blueimp_dataset = [];
                let file_names = item.dataset.filenames.split(',');

                file_names.forEach(element => {

                    const file = 'assets/images/' + item.dataset.folder + '/' + element;

                    blueimp_dataset.push({
                        'href': file,
                        'thumbnail': file,
                    });
                });

                blueimp.Gallery(blueimp_dataset, {
                    thumbnailIndicators: true,
                });
            });
        });
    }

    handleScroll()
    {
        if( ! this.inserted /*&& isElementInViewport(this.galleries_container)*/)
        {
            this.inserted = true;

            let script_element = document.createElement('script');
            script_element.type = 'text/javascript';
            script_element.src = 'assets/vendors/blueimp-gallery/js/blueimp-gallery.min.js';
            document.head.appendChild(script_element);

            let style_element = document.createElement('link');
            style_element.rel = "stylesheet";
            style_element.href = 'assets/vendors/blueimp-gallery/css/blueimp-gallery.min.css';
            document.head.appendChild(style_element);
        }
    }
}
