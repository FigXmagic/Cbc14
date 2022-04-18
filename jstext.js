function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}
function myCalculator(num1, num2, num3, myCallback) {
  let sum = num1 + num2 + num3;
  myCallback();
}

myCalculator(5, 5);
