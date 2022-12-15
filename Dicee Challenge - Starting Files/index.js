
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 +".png";

var randomDiceImageSource = "images/" +randomDiceImage;

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src",randomDiceImageSource);


var randomNumber2 =  Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 +".png";

var randomDiceImageSource2 = "images/" +randomDiceImage2;

var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomDiceImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "player1 wins";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= "player2 wins";
}