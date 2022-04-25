//Jorge Figueroa//
//April 24th 2022//


//get the onclicks for each page ID//
document.getElementById("page1").addEventListener("click", loadXMLDoc1); 
document.getElementById("page2").addEventListener("click", loadXMLDoc2); 
document.getElementById("page3").addEventListener("click", loadXMLDoc3);


//on load get the contents of page1 into inner HTML//
var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'http://127.0.0.1:5500/repo/Cbc14/Week6/XMLHttpRequest/XHR-master/files/page1.html';

xmlhttp.open(method, url, true);
xmlhttp.onload = function () {
  document.getElementById("page_content").innerHTML =
  this.responseText;
};
xmlhttp.send();


// 3 seperate functions for each onclick handler for each page.html within files//
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

// handle button clicks
// when the button is clicked, load content into #page_content from the associated /file/ resource