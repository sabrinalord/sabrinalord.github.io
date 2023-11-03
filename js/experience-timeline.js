const ShowHideExperience = () => {
	let yearsOfExperience = document.querySelectorAll('.radio-year').length
		for (let i = 1; i <= yearsOfExperience; i++) {
			document.getElementById(`panel${i}`).style.visibility = document.getElementById(`radio${i}`).checked ? "visible": "hidden";
		}
	}


window.addEventListener("scroll", function(){ 
	showOnScroll()
	
 });

	 const showOnScroll = () => {
		if (window.scrollY > 550) {
            // set checkbox of panel6 to checked
			// show pane
			document.getElementById('panel6').style.visibility = visible;
			document.getElementById('radio6').checked = true;
		}
	 }
	 
	 