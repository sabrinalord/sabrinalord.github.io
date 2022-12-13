function ShowHideExperience(){
	let yearsOfExperience = document.querySelectorAll('.radio-year').length

		for (let i = 1; i <= yearsOfExperience; i++) {
			document.getElementById(`panel${i}`).style.visibility = document.getElementById(`radio${i}`).checked ? "visible": "hidden";
		}
	}
