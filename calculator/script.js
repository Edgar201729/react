window.onload = function () {
  var outPut = 0;
  var btn = document.querySelectorAll(".element");
  var inputArea = document.getElementById("input1");
  var answerArea = document.getElementById("input2");
  var isEqual = document.getElementById("equal");
  var clearValue = document.getElementById("clean");
  var square = document.querySelector(".square");
  var cube = document.querySelector(".cube");
  var root = document.querySelector(".root");
  var braket = document.querySelector(".braket");
  var cleanLastDigit = document.querySelector(".clean");
  var counter = 0;
  
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var currentValue = this.innerHTML;
      if (outPut === 0) {
        outPut = "";
      }
      outPut = outPut + currentValue;
      inputArea.setAttribute("value", outPut);

      return outPut;
  });
}

square.addEventListener ("click", function () {
  outPut = eval(outPut * outPut);
  answerArea.setAttribute("value", outPut)
});

cube.addEventListener("click", function () {
  outPut = eval(Math.pow(outPut, 3));
  answerArea.setAttribute("value", outPut)
});

isEqual.addEventListener("click", function () {
  outPut = eval(outPut);
  answerArea.setAttribute("value", outPut);
});

clearValue.addEventListener("click", function () {
  outPut = 0;
  let emptyString = "";
  inputArea.setAttribute("value", emptyString);
  answerArea.setAttribute("value", outPut);
});

braket.addEventListener("click", function () {
  if (outPut === 0) {
    outPut = "";
  }
    if (counter == 0) {
      outPut = outPut + "(";
      counter = 1;
   }
    else if (counter == 1) {
      outPut = outPut + ")";
      counter = 0;
  }
  inputArea.setAttribute("value", outPut)
});

root.addEventListener("click", function () {
  outPut = Math.sqrt(outPut);
  answerArea.setAttribute("value", outPut);
});

cleanLastDigit.addEventListener("click", function () {
  let temp = outPut;
    if (temp.length > 0) {
      temp = temp.substring(0, temp.length-1);
      outPut = temp;
    }
    inputArea.setAttribute("value", outPut);
});

}
