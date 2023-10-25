const headshotContainer = document.querySelector('.headshot-container')

let lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   let currentScroll = window.pageYOffset || document.documentElement.scrollTop; 
   if (currentScroll > lastScrollTop){
      headshotContainer.style.transform = "translate3d(0px, 52px, 0px)"
   } else {
      headshotContainer.style.transform = "translate3d(0px, 0px, 0px)"
   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
