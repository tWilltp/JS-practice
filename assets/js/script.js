// array of questions

let questions = [{
        question: "The film 'Nightmare Before Christmas' was created using physical objects",
        response: "True",
        answer: true
    }, {
        question: "Matt Damon played a Botanist in the film 'The Martian'",
        response: "True",
        answer: true
    }, {
        question: "Shaquille O'Neal starred in the film 'Space Jam'",
        response: "False",
        answer: false
    }, {
        question: "In the original Star Wars trilogy, David Prowse was the actor who physically portrayed Darth Vader",
        response: "True",
        answer: true
    }, {
        question: "In the original Star Wars trilogy, Alec Guinness provided the voice for Darth Vader",
        response: "False",
        answer: false
    }, {
        question: "In the film 'Despicable Me' the character 'Gru's' Nationality is Austrian",
        response: "False",
        answer: false
    }, {
        question: "Actor Tommy Chong has served prison time",
        response: "True",
        answer: true
    }, {
        question: "In the film 'Snatch', the character 'Mickey O'neil' was actually a bare knuckle boxer and had never acted before on his life or since",
        response: "False",
        answer: false
    }, {
        question: "'Pulp Fiction' was filmed before a live studio audience",
        response: "False",
        answer: false
    }, {
        question: "James Cameron's 2012 film 'Avatar' was based on real events",
        response: "False",
        answer: false
    }]

// quiz variables

let displayQuestion = document.getElementById('question-el')
let questionBtn = document.getElementById('nextQ-btn')
let startBtn = document.getElementById('startgame-btn')
let checkTrueBtn = document.getElementById('checktrue-btn')
let checkFalseBtn = document.getElementById('checkfalse-btn')
let scoreEl = document.getElementById('scorebox-el')
let currentQuestion = questions[0]
currentScore = 0

// event listeners

startBtn.addEventListener('click', function() {
    startGame()
})
questionBtn.addEventListener('click', function() {
    nextQuestion()
})
checkTrueBtn.addEventListener('click', function() {
    checkTrue()
})
checkFalseBtn.addEventListener('click', function() {
    checkFalse()
})

// displays first question

function startGame() {
    displayQuestion.textContent = questions[0].question
}

// displays next question in the array

function nextQuestion() {
    if (currentQuestion < questions.length) {
       displayQuestion.textContent = currentQuestion
    } else {
        alert("problem")
    }
} 

// checks if answer is true

function checkTrue() {
    if (questions[0].answer === true) {
        currentScore++
        scoreEl.textContent = "Score: " + currentScore
        alert("correct")
       } else {
        alert("incorrect")
        nextQuestion()
       }
}

// checks if answer is false

function checkFalse() {
    if (questions[0].answer === false) {
        currentScore++
        scoreEl.textContent = "Score: " + currentScore
        alert("correct")
       } else {
        alert("incorrect")
        nextQuestion()
       }
}
 
/*
 // keeps track of score

 function trackScore() {
    if (checkTrue() === true) {
        currentScore += 1
    } else if (checkFalse() === false) {
        currentScore += 1
    }
 }

 for (let i = 0; i < questions.length; i++) {
        displayQuestion.textContent = questions[i].question
    }

 let score = 0
*/