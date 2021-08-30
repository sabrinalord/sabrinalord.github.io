

//MOBILE HAMBURGER

const mobileNavOverlay = document.querySelector('.mobile-nav-overlay')
const hamburger = document.querySelector('.hamburger')


hamburger.addEventListener('click', event => {
		mobileNavOverlay.classList.toggle('mobile-nav-active')
	})


//DRAGGABLE HATS

 $(function() {
    $( ".draggable" ).draggable();
  } );
	

//IMAGE MOVE ON SCROLL DOWN
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

//TIMELINE

function ShowHideExperience(){
    document.getElementById('panel-1').style.visibility = document.getElementById('radio-1').checked ?
	"visible": "hidden";
	document.getElementById('panel-2').style.visibility = document.getElementById('radio-2').checked ? "visible": "hidden";
	document.getElementById('panel-3').style.visibility = document.getElementById('radio-3').checked ? "visible": "hidden";
	document.getElementById('panel-4').style.visibility = document.getElementById('radio-4').checked ? "visible": "hidden";
		document.getElementById('panel-5').style.visibility = document.getElementById('radio-5').checked ? "visible": "hidden";
	}


// DESIGN CAROUSEL

$(document).ready(function(){
  $('.carousel-slider1').slick({
  infinite: true,
 prevArrow:"<img class='a-left control-c prev slick-prev' src='images/icons/left-chevron.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/icons/right-chevron.png'>"
  });
	
	  $('.carousel-slider2').slick({
  infinite: true,
 prevArrow:"<img class='a-left control-c prev slick-prev' src='images/icons/left-chevron.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/icons/right-chevron.png'>"
  });
	
});

