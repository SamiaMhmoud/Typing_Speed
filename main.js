//Array of words
const normal = [
    "Working",
    "Country",
    "Testing",
    "Youtube",
    "Playing",
    "Sadness",
    "Coding",
    "Python",
    "Runner",
    "Github",
    "Fatal",
    "Hello",
    "Cruel",
    "Scala",
    "Funny",
    "Happy",
    "Style",
    "Sheet",
    "Admit",
    "Picky",
];
const esay = [
    "Town",
    "Task",
    "Test",
    "code",
    "City",
    "Role",
    "Dumb",
    "Mean",
    "Area",
    "Help",
    "Part",
    "Wide",
    "Tall",
    "Fate",
    "Zoo",
    "Get",
    "Sea",
    "Rust",
    "Tea",
    "Cofy",
];
const hard = [
    "Destructuring",
    "Programing",
    "Linkedlist",
    "JavaScript",
    "Facebook",
    "Football",
    "Leetcode",
    "Internet",
    "Linkedin",
    "Frontend",
    "Fullstack",
    "Aggressive",
    "Wardrobed",
    "Provocative",
    "Considerate",
    "Thoughtful",
    "Thoughtless",
    "InConsiderate",
    "Substanderd",
    "Punishment",
];

let words = normal;

//Set levels
const levels = {
    "Esay": 9,
    "Medium": 5,
    "Hard": 4,
}

//Catch Selectors

let level = document.querySelector(".lvl");
let seconds = document.querySelector(".seconds");
let chooseLel = document.querySelector(".choose-lel");
let choose = document.getElementById("choose");
let start = document.querySelector(".start");
let word = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeft = document.querySelector(".time span");
let scoreGot = document.querySelector(".got");
let scoreTotal = document.querySelector(".total");
let finish = document.querySelector(".finish");
let replay = document.querySelector(".replay");

// Defult Level 
let defultLevel = "Esay";
let defultSec = levels[defultLevel];

//Setting level name + seconds + score
level.innerHTML = defultLevel;
seconds.innerHTML = defultSec;
timeLeft.innerHTML = defultSec;
scoreTotal.innerHTML = words.length;

choose.onchange = ()=> {
    let defultLevel = choose.value;
    let defultSec = levels[defultLevel];

    //Setting level name + seconds + score
    level.innerHTML = defultLevel;
    seconds.innerHTML = defultSec;
    timeLeft.innerHTML = defultSec;
    scoreTotal.innerHTML = words.length;
    // Choose Level
    if(choose.value === "Hard"){
        words = hard;
    }else if(choose.value === "Esay") {
        words = esay;
    }else if(choose.value === "Normal") {
        words === normal;
    }
}

//Disable paste event
input.onpaste = function() {
    return false;
}

//Start Game
start.onclick = function(){
    this.remove();
    input.focus();
    //Generate Word Function
    generateWord();
}

//Generate Word Function
function generateWord() {
    //Get random word from array
    let random = words[Math.floor(Math.random()* words.length)];
    //Get word index
    let index = words.indexOf(random);
    //Remove woed from array
    words.splice(index, 1);
    //Show The Random
    word.innerHTML = random;
    //Empty upComing Word
    upcomingWords.innerHTML = '';
    //Generate Words
    for(let i = 0; i < words.length; i++) {
        //Create Div Element 
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    //Call Start play function
    startPlay();
}

//Start Play Function

function startPlay() {
    //Reset Time Left
    timeLeft.innerHTML = defultSec;
    let start = setInterval(()=> {
        timeLeft.innerHTML--;
        if(timeLeft.innerHTML === '0') {
            //Stop timer
            clearInterval(start);
            //Compare the word
            if(word.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                //Empty imput field
                input.value = '';
                //Increas Score
                scoreGot.innerHTML++;
                if(words.length != 0) {
                    //call Generate Word
                    generateWord();
                }else {
                    let span = document.createElement('span');
                    span.className = 'good';
                    let spanText = document.createTextNode("WINNER");
                    span.appendChild(spanText);
                    finish.appendChild(span);
                    replayFun();
                }
            }else {
                let span = document.createElement('span');
                span.className = 'bad';
                let spanText = document.createTextNode("GAME OVER");
                span.appendChild(spanText);
                finish.appendChild(span);
                replayFun();
            }
        }
    }, 1000)
};

//Replay Function 
function replayFun() {
    let replaySpan = document.createElement('span');
    replaySpan.className = 'replay-span';
    let replayText = document.createTextNode("Replay");
    replaySpan.appendChild(replayText);
    replay.appendChild(replaySpan);
    replay.onclick = function() {
        location.reload()
    }
}