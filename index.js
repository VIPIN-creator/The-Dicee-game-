// var player1=prompt("Enter the player 1 name: ");
// var player2=prompt("Enter the player 2 name: ");
document.querySelectorAll("p")[0].textContent="Vipin";
document.querySelectorAll("p")[1].textContent="Apeksha";
var randomNumber1=Math.floor(Math.random()*6)+1;
if(randomNumber1==1)
document.querySelector(".img1").setAttribute("src", "images/dice1.png");
else if(randomNumber1==2)
document.querySelector(".img1").setAttribute("src", "images/dice2.png");
else if(randomNumber1==3)
document.querySelector(".img1").setAttribute("src", "images/dice3.png");
else if(randomNumber1==4)
document.querySelector(".img1").setAttribute("src", "images/dice4.png");
else if (randomNumber1==5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else if(randomNumber1==6)
document.querySelector(".img1").setAttribute("src", "images/dice6.png");

var randomNumber2=Math.floor(Math.random()*6)+1;
if(randomNumber2==1)
document.querySelector(".img2").setAttribute("src", "images/dice1.png");
else if(randomNumber2==2)
document.querySelector(".img2").setAttribute("src", "images/dice2.png");
else if(randomNumber2==3)
document.querySelector(".img2").setAttribute("src", "images/dice3.png");
else if(randomNumber2==4)
document.querySelector(".img2").setAttribute("src", "images/dice4.png");
else if (randomNumber2==5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else if(randomNumber2==6)
document.querySelector(".img2").setAttribute("src", "images/dice6.png");

if(randomNumber1>randomNumber2)
document.querySelector("h1").textContent="Vipin Wins";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").textContent="Apeksha Wins";
else
document.querySelector("h1").textContent="Draw!";
