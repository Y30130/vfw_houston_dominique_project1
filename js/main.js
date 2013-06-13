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
      var radio = document.forms[0].readTitle;
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
    
    // Toggle Controls
    function toggleControls(n){
    	switch(n) {
	    	case "on":
	    		$('bookeepForm').style.display = "none";
	    		$('clearLink').style.display = "inline";
	    		$('displayLink').style.display = "none";
	    		$('addNew').style.display = "inline";
	    		break;
	    	case "off":
	    		$('bookeepForm').style.display = "block";
	    		$('clearLink').style.display = "inline";
	    		$('displayLink').style.display = "inline";
	    		$('addNew').style.display = "none";
	    		$('items').style.dispplay = "none";
	    		break;
	    	
	    	default:
	    		return false;
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
	    	item.workTitle				= ["Title:", $('workTitle').value];
	    	item.workAuthorName			= ["Author:", $('workAuthorName').value];
	    	item.workAuthorPublished 	= ["Year Published:", $('workYearPublished').value];
	    	item.workAuthorUrl 			= ["Work Author URL:", $('workUrl').value];
	    	item.workCompleted			= ["Finished Reading:", completedValue];
	    	item.favorite 				= ["Reason for Reading:", favoriteValue];
	    	item.platform				= ["Platform:", $('platforms').value];
	    	item.notes 					= ["Notes:",$('notes').value];
	    	item.readStart		    	= ["Read Start Date:",$('readStart').value];
	    	item.readFinish 			= ["Read Finish Date:",$('readFinish').value];
	    	item.stars 					= ["Rating:",$('stars').value];
	    	// Save data into Local Storage: Use Stringify to convert our object to a string
	    	localStorage.setItem(id, JSON.stringify(item));
	    	alert("Bookept!")
    }
    
    // Display our Data on the Front-End
       function displayData(){
       toggleControls("on");
       if(localStorage.length === 0) {
	       alert("There is no data in Local Storage");
       }
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++) {
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			    //convert string back to object
		         var infoObj = JSON.parse(value);
		         var createSubList = document.createElement('ul');
		         makeLi .appendChild(createSubList);
		         for(var y in infoObj){
		            var createSubli = document.createElement('li');
		            createSubList.appendChild(createSubli);
		            var optSubText = infoObj[y] [0] +" "+ infoObj[y] [1];
		            createSubli.innerHTML = optSubText
		         }
		         
		      }
		    
		   }

    // Clear Data
    function clearData() {
	    if(localStorage.length === 0){
	    alert("There is no data to clear.");		    
	    }else {
		    localStorage.clear();
		    alert("All titles have been removed.");
		    window.location.reload();
		    return false;
	    }
    }
    
    
	// Variable defaults
	var readPlatform = ["-- Choose A Platform --", "Book - Paperback", "Book - Hardcover", "Book - Other", "Digital - Personal Computer", "Digital - Tablet/eReader", "Digital - Other"], 
	completedValue, 
	favoriteValue = "No";
    makePlatforms();

// Set Link & Submit Click Events
	 var displayLink = $('displayLink');
	displayLink.addEventListener("click", displayData);
	var clearLink = $('clearLink');
	clearLink.addEventListener("click",clearData);
	var save = $('submit');
	save.addEventListener("click", storeData);


});

