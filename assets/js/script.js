// creates array of questions and answers

var questions = [{
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
}];



let reset = document.getElementById('reset');
let nextQuestion = document.getElementById('next-question');
let answer = Boolean;
let checkTrue = document.getElementById('checktrue');
let checkfalse = document.getElementById('checkfalse');

// resets and starts quiz

document.getElementById('reset').addEventListener('click', reset);

function reset() {

    return questions[0]

}

// displays next question in the question area 

document.getElementById('next-question').addEventListener('click', nextQuestion);

function nextQuestion() {

    return question++;

}

// checks if question answer was true

document.getElementById('checktrue').addEventListener('click', checkTrue)

function checkTrue() {
    
    if (answer == true) {
        return "True" + score++;
    } else {
        return "False";
    }

}

// checks if question answer was false

document.getElementById('checkfalse').addEventListener('click', checkFalse)

function checkFalse() {

    if (answer !== true) {
        return "False" + score++;
    } else {
        return "True";
    }
}

