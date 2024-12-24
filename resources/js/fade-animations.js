import {isElementInViewport} from '@/js/is-element-in-viewport';

export class FadeAnimations{

    constructor()
    {
        this.objects = document.querySelectorAll('.fadeInit');
        this.handle();
    }

    /** */
    handle()
    {
        let is_removed = false;

        this.objects.forEach(element => {
            if( isElementInViewport(element)){
                element.classList.remove('fadeInit');
                is_removed = true;
            }
        });

        if( is_removed ){
            setTimeout(()=>{
                this.objects = document.querySelectorAll('.fadeInit');
            }, 1000);
        }
    }
}