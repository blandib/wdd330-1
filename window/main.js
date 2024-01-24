const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class [window.onresize]
window.addEventListener('resize', () => {
	if (window.innerWidth > 760) { // window.innerWidth includes the scrollbar (if any), document.documentElement.clientWidth does not
		if(mainnav.classList.contains('responsive')) {
			mainnav.classList.remove('responsive');
			alert('The responsive has been removed!');
		}
	}
});
/*const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class [window.onresize]
window.addEventListener('resize', () => {
	if (window.innerWidth > 760) { // window.innerWidth includes the scrollbar (if any), document.documentElement.clientWidth does not
		if(mainnav.classList.contains('responsive')) {
			mainnav.classList.remove('responsive');
			alert('The responsive has been removed!');
		}
	}
});*/

/*let element = document.querySelector('.🍔');

// Function to remove class and show alert
function removeClassAndAlert() {
    if (element.classList.contains('.🍔')) {
        element.classList.remove('.🍔');
        window.alert('Class removed!');
        // Remove event listener so the popup only happens once
        element.removeEventListener('click', removeClassAndAlert);
    }
}

// Attach event listener to the element
element.addEventListener('click', removeClassAndAlert);*/