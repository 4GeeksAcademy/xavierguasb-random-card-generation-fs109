import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "k"]
  let symbol = ["♦", "♥", "♠", "♣"];

  let numero = number[Math.floor(Math.random() * number.length)];
  let palo = symbol[Math.floor(Math.random() * symbol.length)];

  document.getElementById("number").innerHTML = numero;
  document.getElementById("top").innerHTML = palo;
  document.getElementById("bottom").innerHTML = palo;

    if (palo === "♥" || palo === "♦") {
      document.getElementById("top").style.color = "red";
      document.getElementById("bottom").style.color = "red";
    }

};
