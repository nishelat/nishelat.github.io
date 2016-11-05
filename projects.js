function showStudybuddy() {
	document.getElementById('studybuddy').addEventListener('click', function() {
		document.getElementById('content').style.display = "none";
		document.getElementById('studybuddypage').style.display = "inline";
	});
}

function showJournal() {
	document.getElementById('journal').addEventListener('click', function() {
		document.getElementById('content').style.display = "none";
		document.getElementById('journalpage').style.display = "inline";
	});
}

function showBattlegame() {
	document.getElementById('battlegame').addEventListener('click', function() {
		document.getElementById('content').style.display = "none";
		document.getElementById('battlegamepage').style.display = "inline";
	});
}

showStudybuddy();
showJournal();
showBattlegame();
