var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var plus = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var answer = document.getElementById("answer");

plus.addEventListener("click", function () {
    var ans = parseInt(num1.value) + parseInt(num2.value);   
    answer.innerText = ans;

    plus.style.background = "rgb(0, 204, 255)";
    subtract.style.background = "rgb(90, 90, 90)";
    multiply.style.background = "rgb(90, 90, 90)";
    divide.style.background = "rgb(90, 90, 90)";
})

subtract.addEventListener("click", function () {
    var ans = parseInt(num1.value) - parseInt(num2.value);
    answer.innerText = ans;

    plus.style.background = "rgb(90, 90, 90)";
    subtract.style.background = "red";
    multiply.style.background = "rgb(90, 90, 90)";
    divide.style.background = "rgb(90, 90, 90)";
})

multiply.addEventListener("click", function () {
    var ans = parseInt(num1.value) * parseInt(num2.value);
    answer.innerText = ans;

    plus.style.background = "rgb(90, 90, 90)";
    subtract.style.background = "rgb(90, 90, 90)";
    multiply.style.background = "green";
    divide.style.background = "rgb(90, 90, 90)";
})

divide.addEventListener("click", function () {
    var ans = parseInt(num1.value) / parseInt(num2.value);
    answer.innerText = ans;

    plus.style.background = "rgb(90, 90, 90)";
    subtract.style.background = "rgb(90, 90, 90)";
    multiply.style.background = "rgb(90, 90, 90)";
    divide.style.background = "rgb(68, 0, 255)";
})

document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");
    
    var themeSwitcher = document.getElementById("customSwitches");

    themeSwitcher.onclick = function() {
      var currentTheme = document.documentElement.getAttribute("data-theme");
      var switchToTheme = currentTheme === "dark" ? "light" : "dark"
      
      document.documentElement.setAttribute("data-theme", switchToTheme);
    }
  });
