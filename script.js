document.getElementById('menuButton').addEventListener('click', function() {
	document.body.style = "background-image: none; background-color: darkgray";
	document.getElementById('banner').style.display = "none";
	document.getElementById('content').style.display = "none";
	document.getElementById('mobileNav').style = "display: inline";
});

document.getElementById('innermenuButton').addEventListener('click', function() {
	document.body.style = "background-image: block";
	document.getElementById('banner').style.display = "block";
	document.getElementById('content').style.display = "block";
	document.getElementById('mobileNav').style = "display: none";
});