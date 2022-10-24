// creates array of questions and answers

var question = 0;
var questions = [{
    "question": "The film 'Nightmare Before Christmas' was created using physical objects",
    "response": "True",
    "answer": True
}, {
    "question": "Matt Damon played a Botanist in the film 'The Martian'",
    "response": "True",
    "answer": True
}, {
    "question": "Shaquille O'Neal starred in the film 'Space Jam'",
    "response": "False",
    "answer": False
}, {
    "question": "In the original Star Wars trilogy, David Prowse was the actor who physically portrayed Darth Vader",
    "response": "True",
    "answer": True
}, {
    "question": "In the original Star Wars trilogy, Alec Guinness provided the voice for Darth Vader",
    "response": "False",
    "answer": False
}, {
    "question": "In the film 'Despicable Me' the character 'Gru's' Nationality is Austrian",
    "response": "False",
    "answer": False
}, {
    "question": "Actor Tommy Chong has served prison time",
    "response": "True",
    "answer": True
}, {
    "question": "In the film 'Snatch', the character 'Mickey O'neil' was actually a bare knuckle boxer and had never acted before on his life or since",
    "response": "False",
    "answer": False
}, {
    "question": "'Pulp Fiction' was filmed before a live studio audience",
    "response": "False",
    "answer": False
}, {
    "question": "James Cameron's 2012 film 'Avatar' was based on real events",
    "response": "False",
    "answer": False
}];

document.getElementById('next-question').addEventListener('click', nextQuestion);

function nextQuestion() {
    return question++;
}

document.getElementById('reset').addEventListener('click', reset);

function reset() {

}

document.getElementById('checktrue').addEventListener('click', checkTrue)

function checkTrue() {
    
    if (answer == True) {
        return "True" + score++;
    } else {
        return "False"
    }

}

function checkFalse() {

    if (answer !== true) {
        return "False"
    } else {

    }
}

