let logo = document.querySelector('#action_buttons');

logo.addEventListener('load', (event) => {
	console.log('Logo has been loaded!');
});

logo.src = "page1.html";
/* 
		function loadDoc() {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			  document.getElementById("action_buttons").innerHTML =
			  this.responseText;
			}
		  };
		  xhttp.open("GET", "ajax_info.txt", true);
		  xhttp.send();
		} */

// handle button clicks
// when the button is clicked, load content into #page_content from the associated /file/ resource
 