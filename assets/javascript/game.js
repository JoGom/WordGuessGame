//waits for DOC to load before grabbing elements
window.onload = function(){

    // variables
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var wordNum;
    //determines when the game is running
    var gameRun = true;
    // so user can see their stats
    var lettersGuessed = [];
    //array of words in the game and letter choices possible
    var gameWord = ["elephant","giraffe","buffalo","rhinoceros","wildebeest","zebra","lion","leopard","cheetah","hippopotamus","crocodile","ostrich","warthog","baboon","antelope","vulture","hyena"];
    var letterChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var currentWord = [];
    
    //doc manipulation getting elements by ID
    var winElem = document.getElementById("winsElem");
    console.log(winElem);
    var loseElem = document.getElementById("lossesElem");
    console.log(loseElem);
    var guessElem = document.getElementById("guessesElem");
    console.log(guessElem);
    var mainElem = document.getElementById("instruct");
    console.log(mainElem);
    var letGuessedElem = document.getElementById("lettersGuessed");
    
    function resetWord(){
        guessesLeft = 8;
        currentWord = [];
        lettersGuessed = [];
        //generates a random number that will determine what index of the word array will be chosen
        wordNum = Math.floor(Math.random() * (gameWord.length));
        //gets length of word in array and creates the correct number of underscores
        for(var i = 0; i < gameWord[wordNum].length; i++) {
            currentWord.push("_");
        }
        printScores();
    };
    
    function printScores(){
        //for loop that prints all the underscores in the array that was created
        mainElem.innerText = " ";
        for (var i = 0; i < currentWord.length; i++){
            console.log(currentWord.length);
            mainElem.innerText += " " + currentWord[i];
        }
        console.log(currentWord);
        letGuessedElem.innerText = lettersGuessed;
        console.log(lettersGuessed);
        winElem.innerText = wins;
        console.log(wins);
        loseElem.innerText = losses;
        guessElem.innerText = guessesLeft;
    };
    
    function processGame(input){
        var input = input.toLowerCase();
        var index = [];
        if(lettersGuessed.indexOf(input)===-1){
            lettersGuessed.push(input);
            console.log(lettersGuessed);
            for(var i = 0; i < gameWord[wordNum].length; i++ ){
                console.log(gameWord[wordNum].length);
                if(gameWord[wordNum][i] === input){
                    index.push(i);
                    console.log(index);
                }
            }
                if(index.length <= 0){
                    guessesLeft--;
                }
                else{
                    for(var i = 0; i < index.length; i++){
                        currentWord[index[i]] = input;
                        console.log(currentWord[index[i]]);
                        console.log(currentWord);
                    }
                }
        }
    }
    
    function winLose(){
        if(currentWord.indexOf("_") === -1){
            wins++;
            alert("Well done! Press any letter key to move on to the next word");
            gameRun= true;
        }
        else if(guessesLeft <=0 ){
            alert("You ran out of guesses for this word! The correct anwser is " +gameWord[wordNum]+ ". Press any key to move on")
            losses++;
            gameRun = true;
        }
    
    }
    
    document.onkeydown = function(event){
        if(gameRun){
            resetWord();
            gameRun = false;
        }
        else{
            if(letterChoice.indexOf(event.key.toLowerCase()) > -1){
                console.log(event.key);
                processGame(event.key);
                winLose();
                printScores();
            }
        }
    }
    
    
    
    };
    
    
    
    
    