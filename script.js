
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay')
const hamburger = document.querySelector('.hamburger')


	hamburger.addEventListener('click', event => {
		mobileNavOverlay.classList.toggle('mobile-nav-active')
	})
