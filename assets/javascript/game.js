
var winCount = 0;
var lossCount = 0;
var guessNumber = 10;
var guess = "";
var alreadyGuessed = [ ];

var spaceWords = ["planet", "galaxy", "space", "interstellar", "astronaut", "mars", "venus", "mercury", "jupiter", "saturn", "uranus", "neptune", "pluto", "orbit", "star", "moon", "comet", "asteroid", "nebula", "satellite"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var spaceWordNum = -1;
var spaceWord = "";

var textWinCount = document.createTextNode("" + winCount);
document.getElementById("winCounter").appendChild(textWinCount);

var textLossCount = document.createTextNode("" + lossCount);
document.getElementById("lossCounter").appendChild(textLossCount);

var textGuessNumber = document.createTextNode("" + guessNumber);
document.getElementById("guessRemaining").appendChild(textGuessNumber);

document.body.addEventListener("keypress", function() {
    if (spaceWordNum == -1) {
    spaceWordNum = Math.floor(Math.random() * spaceWords.length);
    console.log(spaceWordNum);
    
    spaceWord = spaceWords[spaceWordNum];
    console.log(spaceWord);
    
    for (var i=0; i<spaceWord.length; i++) {
        guess = document.createElement("li");
        guess.setAttribute("class", "col-1 bigText")
        var textGuess = document.createTextNode("_");
        guess.appendChild(textGuess);
        document.getElementById("wordHolder").appendChild(guess);
        }
        

    } else {
        
        
    }
     
    });

var nodeCounter = 1;

document.getElementById("newGame").addEventListener("click", function() {
    for (var i=0; i < spaceWord.length + nodeCounter; i++) {
    var reset = document.getElementById("wordHolder");
    reset.removeChild(reset.childNodes[0]);
    }
    guessNumber = 10;
    spaceWordNum = -1;
    nodeCounter = 0;
});