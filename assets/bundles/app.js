function r(l){const e=l.getBoundingClientRect();return e.bottom>=0&&e.right>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth)}class a{constructor(){this.objects=document.querySelectorAll(".fadeInit"),this.handleScroll()}handleScroll(){let e=!1;this.objects.forEach(t=>{r(t)&&(t.classList.remove("fadeInit"),e=!0)}),e&&setTimeout(()=>{this.objects=document.querySelectorAll(".fadeInit")},1e3)}}class c{constructor(){this.inserted=!1,this.handleScroll(),document.querySelectorAll(".gallery").forEach(e=>{e.addEventListener("click",t=>{let n=[];e.dataset.filenames.split(",").forEach(i=>{const s="assets/images/"+e.dataset.folder+"/"+i;n.push({href:s,thumbnail:s})}),blueimp.Gallery(n,{thumbnailIndicators:!0})})})}handleScroll(){if(!this.inserted){if(document.querySelectorAll(".gallery").forEach(n=>{if(r(n)){this.inserted=!0;return}}),!this.inserted)return;let e=document.createElement("script");e.type="text/javascript",e.src="assets/vendors/blueimp-gallery/js/blueimp-gallery.min.js",document.head.appendChild(e);let t=document.createElement("link");t.rel="stylesheet",t.href="assets/vendors/blueimp-gallery/css/blueimp-gallery.min.css",document.head.appendChild(t)}}}const o=new a,d=new c;document.addEventListener("scroll",l=>{o.handleScroll(),d.handleScroll()});
