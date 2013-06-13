// Dominique Houston
// 1306 - VFW I
// Assignment 2
//

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){


	// getElementByID Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

// Variable defaults
	var readingPlatform = ["--Select a Platform--", "Digital", "Book"];

// Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clearLink');
	clearLink.addEventListener("click",clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);


});

