var container = document.querySelector(".container");
var value1 = document.querySelector(".input");
var add1 = document.querySelector(".add");
var ele = document.getElementsByClassName("completed");

class item {
  constructor(name) {
    this.create(name);
  }
  create(name) {
    var l1 = document.createElement("div");

    l1.classList.add("item");

    var input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    input.value = name;
    input.classList.add("item_input");

    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = '<i class="fas fa-trash"></i>';
    remove.addEventListener("click", () => this.remove(l1));

    container.appendChild(l1);

    l1.appendChild(input);

    l1.appendChild(remove);
  }

  remove(l1) {
    container.removeChild(l1);
  }
}

add1.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});

function check() {
  if (value1.value != null) {
    new item(value1.value);
    value1.value = null;
  }
}

function removeAll() {
  document.querySelector(".container").innerHTML = "";
}

function hello() {
  alert("Done!!");
  var ele = document.getElementsByClassName("item_input");
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.setProperty("text-decoration", "line-through");
  }
}
