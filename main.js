// window.addEventListener('load', init);



// All globel var
let time = 5;
let score = 0;
let isPlaying;

// DOM Element var
const wordInput = document.querySelector('#word-input');
const startBtn = document.querySelector('#start-btn');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const theResult = document.getElementById('#exampleModalCenter');

const words = [
    'Cat',
    'Dog',
    'Goat',
    'Sheep',
    'Mat',
    'Cook',
    'Wool',
    'Cake',
    'Food',
    'Bury',
    'Fish',
    'Soup',
    'Cup',
    'John',
    'Fatu',
    'Bottom',
    'Cloud',
    'Moses',
    'Emmanuel',
    'Isaac',
    'Teddy',
    'Rocky',
    'Stego',
    'Fabio',
    'Quetee',
    'Harris',
    'Teddy',
    'Lucky',
    'Mary',
    'Smith',
    'Radio',
    'Computer',
    'Phone',
    'Open',
    'Close',
    'Olando',
    'Kent',
    'Friend',
    'Road',
    'Alisa',
    'Bantee',
    'Soto',
    'Sunday',
    'Monday',
    'Baby',
    'Father',
    'Mother',
    'Cooker',
    'Willie',
    'Chair',
    'Car',
    'Bus',
    'Sun',
    'Moon',
    'Faith',
    'Liberia',
    'Weaver',
    'Street',
    'Blue',
    'Red'
]


// wordInput.addEventListener('input', init);
wordInput.addEventListener('input', startMatchs);


// initialize the game
function init(){
    // Load words from array
    showWord(words);
      // call countdown every second
      setInterval(countdown, 1000); 
      //    Check status
      setInterval(checkStatus, 50)    ; 
    //Start matching words input 

} 


init();
//start Match 
function startMatchs(){
    if(matchWords()) {  
        showWord(words);
        isPlaying = true;
        time = 6;        
        wordInput.value = '';
        score++;
    }

    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score; 
    }

   
}

// match words
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Good!!!';
        message.style.color = "rgb(0,195,0)";
        return true;
    } else {
        message.innerHTML = 'Not currect!!!';
        message.style.color = "rgb(245,125,0)";
        return false;
    }
}

// Pick and show  random words
function showWord(words) {
    // Generate random array index
    const randomIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randomIndex];
    currentWord.style.fontSize = '35px';
}

// open modal window
function openModal() {
    theResult.classList.add("the_modal");
}

// Countdown timer
function countdown() {
    //Make sure time is not run out
    if(time > 0) {
        //Drecrence the time
        time--;
    } else if (time === 0) {
        //Game is over!!
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}


// Checking status
function checkStatus(){
    if(!isPlaying && time === 0) {
        // the game is over 
        score = -1;
        message.innerHTML = 'Game is over!!!';
        message.style.color = "rgb(223,32,41)";
    }
}
 




