/* Set global variables */
var divs = ['one', 'two', 'three', 'four']; // Define notecards here
var buttons = ['View resume', 'View school', 'View projects', 'Contact me']; // Define buttons here
var links = ['https://drive.google.com/open?id=0B6n5mOU9aai3SWs3UTRkbk45X3M', 'http://www.usc.edu/', '#', '#']; // Define links here
var colors = ['#ffb347', '#f49ac2', '#779ecb', '#77dd77']; // Define colors here
var currCol = 1;
var currNote = 0;
var currButton = 0;
var currLink = 0;
var bool = 1;

/* Swipe left */
document.getElementById('swipeleft').addEventListener('click', function() {
	setTimeout(function() {
		bool = 0;
		document.getElementById(divs[currNote]).style.display = "none";
		currNote++;
		currButton++;
		currLink++;
		if (currNote == divs.length) {
			currNote = 0;
		}
		if(currButton == buttons.length) {
			currButton = 0;
		}
		if(currLink == links.length) {
			currLink = 0;
		}
		document.getElementById(divs[currNote]).style = "animation-name: intro; animation-duration: 0.5s";
		colorchange();
		document.getElementById(divs[currNote]).style.display = "block";
		document.getElementById('see_more').innerHTML = buttons[currButton];
		var myHref = document.getElementById('link');
		myHref.setAttribute('href', links[currLink]);
	}, 20);
});

/* Swipe right */
document.getElementById('swiperight').addEventListener('click', function() {
	setTimeout(function() {
		bool = 0;
		document.getElementById(divs[currNote]).style.display = "none";
		currNote--;
		currButton--;
		currLink--;
		if (currNote == -1) {
			currNote = divs.length - 1;
		}
		if(currButton == -1) {
			currButton = buttons.length - 1;
		}
		if(currLink == -1) {
			currLink = links.length - 1;
		}
		document.getElementById(divs[currNote]).style = "animation-name: intro; animation-duration: 0.5s";
		colorchange();
		document.getElementById(divs[currNote]).style.display = "block";
		document.getElementById('see_more').innerHTML = buttons[currButton];
		var myHref = document.getElementById('link');
		myHref.setAttribute('href', links[currLink]);
	}, 20);
});

/* Helper function for changing the background color */
function colorchange() {
	document.querySelector('body').style.background = colors[currCol];
	currCol++;
	if (currCol == colors.length) {
		currCol = 0;
	}
}

/* Perform the automatic swipes */
setInterval(function() {
		if(bool == 1) {
		document.getElementById(divs[currNote]).style.display = "none";
		currNote++;
		currButton++;
		currLink++;
		if (currNote == divs.length) {
			currNote = 0;
		}
		if(currButton == buttons.length) {
			currButton = 0;
		}
		if(currLink == links.length) {
			currLink = 0;
		}
		document.getElementById(divs[currNote]).style = "animation-name: intro; animation-duration: 0.5s";
		colorchange();
		document.getElementById(divs[currNote]).style.display = "block";
		document.getElementById('see_more').innerHTML = buttons[currButton];
		var myHref = document.getElementById('link');
		myHref.setAttribute('href', links[currLink]);
		}
}, 3000);

/* Process the special buttons */
document.getElementById('see_more').addEventListener('click', function() {
	if(currNote == 2) {
		document.getElementById('container').style.display = "none";
		document.getElementById('projects').style = "animation-name: intro; animation-duration: 1s";
		document.getElementById('projects').style.display = "block";
	}
	else if(currNote == 3) {
		document.getElementById('container').style.display = "none";
		document.getElementById('contact').style = "animation-name: intro; animation-duration: 1.5s";
		document.getElementById('contact').style.display = "block";
	}
});