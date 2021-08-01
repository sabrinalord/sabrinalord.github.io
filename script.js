

//MOBILE HAMBURGER

const mobileNavOverlay = document.querySelector('.mobile-nav-overlay')
const hamburger = document.querySelector('.hamburger')


	hamburger.addEventListener('click', event => {
		mobileNavOverlay.classList.toggle('mobile-nav-active')
	})

	
//TIMELINE

// get radios

	function ShowHideExperience(){
      document.getElementById('panel-1').style.display = document.getElementById('radio-1').checked ?
		"block" : "none";
		    document.getElementById('panel-2').style.display = document.getElementById('radio-2').checked ?
		"block" : "none";
		    document.getElementById('panel-3').style.display = document.getElementById('radio-3').checked ?
		"block" : "none";
	}


	
// get tab panels
// listen for click 
//when you click on year button, remove class of visible from current panel 
// add class of visible to selected button's content 
// Loop through each panel description, if it is checked add styling, then 


