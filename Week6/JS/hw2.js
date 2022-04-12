var heading = document.querySelector("div").querySelector("h1");
/* console.log(heading); */

heading.innerHTML = "Generic Heading";

//Paragraph Blue and New//
var paragraphs = document.querySelector("div").querySelectorAll("p");

paragraphs.forEach((p) => {
  p.className = "blue";
});
/* console.log(paragraphs); */

var newP = document.querySelector("div");

newP.appendChild(document.createElement("p")).textContent = "new paragraph";

//Hobbies list//
const hobbies = ["Gamming", "Crypto", "Reading", "Eating", "Drawing"];

var ul = document.querySelector("ul");
for (i = 0; i < hobbies.length; i++) {
  ul.appendChild(document.createElement("li")).textContent = hobbies[i];
}

//form//
var form = document.querySelector("form");

form.addEventListener("click", function (event) {
  event.preventDefault();
  const classId = event.target.id;

  if (classId == "go") {
    event.target.className = "go";
  } else if (classId == "stop") {
    event.target.className = "stop";
  }
});
