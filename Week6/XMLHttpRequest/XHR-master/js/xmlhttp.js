document.getElementById("page1").addEventListener("click", loadXMLDoc1); 
document.getElementById("page2").addEventListener("click", loadXMLDoc2); 
document.getElementById("page3").addEventListener("click", loadXMLDoc3);

var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'http://127.0.0.1:5500/repo/Cbc14/Week6/XMLHttpRequest/XHR-master/files/page1.html';

xmlhttp.open(method, url, true);
xmlhttp.onload = function () {
  document.getElementById("page_content").innerHTML =
  this.responseText;
};
xmlhttp.send();

function loadXMLDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page_content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "http://127.0.0.1:5500/repo/Cbc14/Week6/XMLHttpRequest/XHR-master/files/page1.html", true);
  xhttp.send();
}

function loadXMLDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page_content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "http://127.0.0.1:5500/repo/Cbc14/Week6/XMLHttpRequest/XHR-master/files/page2.html", true);
  xhttp.send();
}

function loadXMLDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page_content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "http://127.0.0.1:5500/repo/Cbc14/Week6/XMLHttpRequest/XHR-master/files/page3.html", true);
  xhttp.send();
}
/* var div = document.querySelector("div");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");

form.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target == page1) {
    goButton.classList.add("go");
    stopButton.classList.remove("stop");
  } else if (event.target == stopButton) {
    stopButton.classList.add("stop");
    goButton.classList.remove("go");
  }
});



function myFunction() {
	document.getElementById("myCheck").click();
  }

var form = document.querySelector("form");

form.addEventListener("click", function(event) {
  event.preventDefault();
  const classId = event.target.id;

  if (classId == "go") {
    event.target.className = "go";
  } else if (classId == "stop") {
    event.target.className = "stop";
  }
});

 */
/* for(let i=1; i<3; i++) {
        
	console.log(i); 
 
	$("#div" + i).click(
		function () { alert(i); }
	);
}
 */


// handle button clicks
// when the button is clicked, load content into #page_content from the associated /file/ resource