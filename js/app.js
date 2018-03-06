// Make h1 in header have different text

//javascript 6 version
const title = document.querySelector('header h1')
title.innerText = 'blah'

// javascript 5 version
// var title = document.querySelector('header h1');
// title.innerText = "blah";

// Make nav ul li elements get larger when you hover over them

//javascript 6 version
const navLinks = document.querySelectorAll('nav ul li')
navLinks.forEach(element => {
	element.addEventListener('mouseover', () => {
		element.style.fontSize = '25px'
	})
})

// javascript 5 version
// var navLinks = document.querySelectorAll('nav ul li');
// navLinks.forEach(function(element) {
// 	increaseTextSize(element, 'mouseover', '50px')
// });

// function increaseTextSize(element, eventType, newSize) {
// 	element.addEventListener(eventType, function() {
// 		element.style.fontSize = newSize;
// })};

// // or do this

// var navLinks = document.querySelectorAll('nav ul li');
// navLinks.forEach(function(element) {
// 	element.addEventListener('mouseover', function() {
// 		element.style.fontSize = '20px';
// })});

// Add another element to the main element

//javascript 6 version
const main = document.querySelector('main'), newThing = document.createElement('p')
newThing.innerText =`bunch of new stuff
					additional new stuff`

main.appendChild(newThing)

// javascript 5 version
// var newThing = document.createElement('p');
// var node = document.createTextNode('bunch of new shit');
// newThing.appendChild(node);

// var main = document.querySelector('main');
// main.appendChild(newThing);

// Dynamically change the color of the background on the footer when the user hovers over it

//javascript 6 version
const footer = document.querySelector('footer')
footer.addEventListener('mouseover', () => footer.style.backgroundColor = 'goldenrod')

// javascript 5 version
// var footer = document.querySelector('footer');
// footer.addEventListener('mouseover', function() {
// 	footer.style.backgroundColor = 'goldenrod';
// });

// Change the font size of the paragraphs in the main element when the user clicks them

//javascript 6 version
const mainText = document.querySelectorAll('main p')
mainText.forEach(element => {
	element.addEventListener('click', () => {
		element.style.fontSize = '20px'
	})
})

// javascript 5 version
// var mainText = document.querySelectorAll('main p');
// mainText.forEach(function(element) {
// 	increaseTextSize(element, 'click', '20px')
// });

// Change the text in the footer when the user clicks it

//javascript 6 version
const footerText = document.querySelector('footer p')
footerText.addEventListener('click', () => footer.innerText = 'copyright some dude 2018')

// javascript 5 version
// var footerText = document.querySelector('footer p');
// footer.addEventListener('click', function() {
// 	footer.innerText = 'copyright herp derp 2018';
// });

// Remove the h1 element in the header

// javascript 5 and 6 versions are the same
title.remove();

// Put something in the place of the h1 in the header

//javascript 6 version
const newHeaderText = document.createElement('h1');
newHeaderText.innerText = 'superblah';

document.querySelector('header').prepend(newHeaderText);

// javascript 5 version
// var newHeaderText = document.createElement('h1');
// newHeaderText.innerText = 'halb';

// var header = document.querySelector('header');
// header.prepend(newHeaderText);

// Change the text in one of the paragraph tags in the main element

// javascript 5 and 6 versions are the same
mainText[1].innerText = 'whatever whatever whatever';

// Change the height of the header element to 200px using grid syntax

// javascript 5 and 6 versions are the same
document.querySelector(':root').style.setProperty('--header-height', '200px');