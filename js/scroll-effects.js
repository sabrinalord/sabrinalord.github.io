const headshotContainer = document.querySelector('.headshot-container')

let lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   let currentScroll = window.scrollY || document.documentElement.scrollTop; 
   moveHeadshot(currentScroll);
   moveHats();
});


const moveHeadshot = (currentScroll) => {
   if (window.scrollY > lastScrollTop){
      headshotContainer.style.transform = "translate3d(0px, 52px, 0px)"
   } else {
      headshotContainer.style.transform = "translate3d(0px, 0px, 0px)"
   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

const moveHats = () => {
   if (window.scrollY  > 100 ){
      document.querySelector('.tophat').classList.add('bounce-1')
      document.querySelector('.wizard').classList.add('bounce-2')
      document.querySelector('.crown').classList.add('bounce-3')
      document.querySelector('.cowboy').classList.add('bounce-4')
   }
   if (window.scrollY  > 400 ){
      document.querySelector('.tophat').classList.remove('bounce-1')
      document.querySelector('.wizard').classList.remove('bounce-2')
      document.querySelector('.crown').classList.remove('bounce-3')
      document.querySelector('.cowboy').classList.remove('bounce-4')
   }
}