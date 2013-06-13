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

	// Create select frield element and populate options.

 function makePlatforms(){
        var formtag = document.getElementsByTagName("form"),
            selLi = $('dropDown'),
            createSelect = document.createElement('select');
            createSelect.setAttribute("id", "platforms");
        for(var i=0, j=readPlatform.length; i<j; i++){
            var createOption = document.createElement('option');
            var optText = readPlatform[i];
            createOption.setAttribute("value", optText);
            createOption.innerHTML = optText;
            createSelect.appendChild(createOption);
        }
        selLi.appendChild(createSelect);
    };
    
    // Find value of selcted radio button 
    function getSelectedRadio(){
      var radio = document.forms[0].workCompleted;
      for(var i=0; i<radio.length; i++){
         if(radio[i].checked){
         completedValue = radio[i].value;
         }
      }
   }
    // Find the value of checkboxes
    function getCheckboxValue() {
	    if($('fav').checked){
		    favoriteValue = $('fav').value;
	    }else {
		    favoriteValue = "No";
	    }
    }
    
    
    // Save Our Data
    function storeData () {
	    var id 				= Math.floor(Math.random()*10000001);
	    // Gather all form field values and store in an object
	    // Object properties contain an array with the form label and input value.
	    getSelectedRadio();
	    getCheckboxValue();
	    var item 			= {};
	    	item.platform				= ["Platform:", $(platforms).value];
	    	item.workTitle				= ["Title:", $(workTitle).value];
	    	item.workAuthorName			= ["Author:", $(workAuthorName).value];
	    	item.workAuthorPublished 	= ["Year Published:", $(workAuthorPublished).value];
	    	item.workAuthorUrl 			= ["Work Author URL:", $(workAuthorUrl).value];
	    	item.workCompleted			= ["Finished Reading:", completedValue];
	    	item.favorite 				= ["Reason for Reading:", favoriteValue];
	    	item.notes 					= ["Notes:",];
	    	item.readStart		    	= ["Read Start Date:",];
	    	item.readFinish 			= ["Read Finish Date:",];
	    	item.stars 					= ["Rating:",];
	    	// Save data into Local Storage: Use Stringify to convert our object to a string
	    	localStorage.setItem(id, JSON.stringify(item));
	    	alert("Bookept!")
	    	
    }
    
    
	// Variable defaults
	var readPlatform = ["-- Choose A Platform --", "Book - Paperback", "Book - Hardcover", "Book - Other", "Digital - Personal Computer", "Digital - Tablet/eReader", "Digital - Other"], 
	completedValue, 
	favoriteValue = No;
    makePlatforms();

// Set Link & Submit Click Events
	/* var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clearLink');
	clearLink.addEventListener("click",clearLocal); */
	var save = $('submit');
	save.addEventListener("click", storeData);


});

