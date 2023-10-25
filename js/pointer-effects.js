const body = document.querySelector('body')
body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

body.style.background = `radial-gradient(at ${mouseX}px ${mouseY}px, #f5f5f5, #edd4f4)`;
});