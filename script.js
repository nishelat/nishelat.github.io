var clicked = 0;

document.getElementById('menuIMG').addEventListener('click', function() {
	if(clicked == 1) {
		document.getElementById('mobileNav').style.display = "none";
		document.getElementById('menuIMG').style.opacity = "1";
		clicked = 0;
	}
	else {
		document.getElementById('mobileNav').style.display = "block";
		document.getElementById('menuIMG').style.opacity = "0.5";
		clicked = 1;
	}
});