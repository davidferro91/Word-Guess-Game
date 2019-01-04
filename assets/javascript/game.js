
var winCount = 0;
var lossCount = 0;
var guessNumber = 10;
var guess = "";
var alreadyGuessed = [ ];
var correctCounter = 0;
var beenReset = false;

var spaceWords = ["planet", "galaxy", "space", "interstellar", "astronaut", "mars", "venus", "mercury", "jupiter", "saturn", "uranus", "neptune", "pluto", "orbit", "star", "moon", "comet", "asteroid", "nebula", "satellite", "antimatter", "light", "vacuum", "blazar", "gravity", "quasar", "solar", "starburst", "telescope", "ultraviolet", "supernova", "sun", "cold", "giant", "radio", "pulsar", "neutron", "cluster", "microwaves", "radiation", "meteorite", "meteoroid", "meteor", "mass", "relativity", "lunar", "eclipse", "kuiper", "infrared", "galactic", "force", "elliptical", "earth", "matter", "energy", "cosmos", "corona", "dwarf", "atmosphere", "wormhole"];

var spaceWordNum = -1;
var spaceWord = "";
var nodeCounter = 1;


document.body.addEventListener("keyup", function(event) {
    if (spaceWordNum == -1) {
    spaceWordNum = Math.floor(Math.random() * spaceWords.length);
    console.log(spaceWordNum);
    
    spaceWord = spaceWords[spaceWordNum];
    console.log(spaceWord);
    
    for (var i=0; i<spaceWord.length; i++) {
        guess = document.createElement("li");
        guess.setAttribute("class", "col-1 bigText");
        var textGuess = document.createTextNode("_");
        guess.appendChild(textGuess);
        document.getElementById("wordHolder").appendChild(guess);
        }
        

    } else {
        var keyPress = event.which || event.keyCode;
        var letter = String.fromCharCode(keyPress).toLowerCase();
        console.log(letter);
        var stringCounter = 0;

        if (alreadyGuessed.includes(letter) == false) {
        for (var i=0; i < spaceWord.length; i++) {
            if(spaceWord.charAt(i) == letter) {
                var letterEl = document.createElement("li");
                letterEl.setAttribute("class", "col bigText");
                var letterGuess = document.createTextNode("" + letter.toUpperCase());
                letterEl.appendChild(letterGuess);
                var item = document.getElementById("wordHolder").childNodes[i+nodeCounter];
                item.replaceChild(letterEl, item.childNodes[0]);
                correctCounter++;
                stringCounter++;
            } 
        }
        alreadyGuessed.push(letter);
        if (stringCounter == 0) {
            guessNumber--;
        }
    }
    }
    
    document.getElementById("instructions").innerHTML = "Type in a letter that you think is in the word!"
    document.getElementById("winCounter").innerHTML = "Wins: " + winCount;
    document.getElementById("lossCounter").innerHTML = "Losses: " + lossCount;
    document.getElementById("guessRemaining").innerHTML = "Number of Incorrect Guesses Remaining: " + guessNumber;
    document.getElementById("lettersRemaining").innerHTML = "Letters Already Guessed: " + alreadyGuessed.toString().toUpperCase();
    if (correctCounter == spaceWord.length) {
        document.getElementById("instructions").innerHTML = "You Win! The word was " + spaceWord.toUpperCase() + "! Press any key or click New Word to play again!";
        winCount++;
        document.getElementById("winCounter").innerHTML = "Wins: " + winCount;
        for (var i=0; i < spaceWord.length + nodeCounter; i++) {
            var reset = document.getElementById("wordHolder");
            reset.removeChild(reset.childNodes[0]);
            }
        guessNumber = 10;
        spaceWordNum = -1;
        alreadyGuessed = [ ];
        nodeCounter = 0;
        correctCounter = 0;
        beenReset = true;
    }
    if (guessNumber < 1) {
        document.getElementById("instructions").innerHTML = "You Lose! Sorry! The word was " + spaceWord.toUpperCase() +". Press any key or click New Word to play again!";
        lossCount++;
        document.getElementById("lossCounter").innerHTML = "Losses: " + lossCount;
        for (var i=0; i < spaceWord.length + nodeCounter; i++) {
            var reset = document.getElementById("wordHolder");
            reset.removeChild(reset.childNodes[0]);
            }
        guessNumber = 10;
        spaceWordNum = -1;
        alreadyGuessed = [ ];
        nodeCounter = 0;
        correctCounter = 0;
        beenReset = true;
    } 
    
});

document.getElementById("newGame").addEventListener("click", function() {
    if (beenReset == false || spaceWordNum != -1) {
        for (var i=0; i < spaceWord.length + nodeCounter; i++) {
            var reset = document.getElementById("wordHolder");
            reset.removeChild(reset.childNodes[0]);
        }
    }
    beenReset = false;
    guessNumber = 10;
    spaceWordNum = -1;
    alreadyGuessed = [ ];
    nodeCounter = 0;
    document.getElementById("instructions").innerHTML = "Type in a letter that you think is in the word!"
    document.getElementById("winCounter").innerHTML = "Wins: " + winCount;
    document.getElementById("lossCounter").innerHTML = "Losses: " + lossCount;
    document.getElementById("guessRemaining").innerHTML = "Number of Incorrect Guesses Remaining: " + guessNumber;
    document.getElementById("lettersRemaining").innerHTML = "Letters Already Guessed: " + alreadyGuessed.toString().toUpperCase();

    spaceWordNum = Math.floor(Math.random() * spaceWords.length);
    console.log(spaceWordNum);
    
    spaceWord = spaceWords[spaceWordNum];
    console.log(spaceWord);
    
    for (var i=0; i<spaceWord.length; i++) {
        guess = document.createElement("li");
        guess.setAttribute("class", "col-1 bigText");
        var textGuess = document.createTextNode("_");
        guess.appendChild(textGuess);
        document.getElementById("wordHolder").appendChild(guess);
        }
});

document.getElementById("reset-button").addEventListener("click", function() {
    winCount = 0;
    lossCount = 0;
    document.getElementById("winCounter").innerHTML = "Wins: " + winCount;
    document.getElementById("lossCounter").innerHTML = "Losses: " + lossCount;
});