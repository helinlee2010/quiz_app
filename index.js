const data = [
    {
       question: "What's the capital of Iceland?",
       a: "Amsterdam",
       b:"Ankara",
       c:"Bern",
       d:"Reykjavik",
       correct:"d"
    },{
        question: "What does IPA stand for?",
        a: "Initial Pale Ale",
        b:"Inifite Polar Angle",
        c:"Indian Pale Ale",
        d:"Irish Pink Ale",
        correct: "c"
    }, {
        question: "Which planet is closest to the sun?",
        a: "Mercury",
        b:"Mars",
        c: "Saturn",
        d:"Uranus",
        correct: "a"
    },
    {
        question:"What is the largest country in the word?",
        a:"China",
        b:"Russia",
        c:"USA",
        d:"Australia",
        correct: "b"
    },
    {
        question:"Which city had the first ever fashion week?",
        a:"New York, in 1943",
        b:"Paris, in 1950",
        c:"London, in 1966",
        d:"Milan, in 1943",
        correct: "a"
    }
]

// Question text/title
const questionElm = document.getElementById("question-text");
// radio input for selection
const circles = document.querySelectorAll("input.circle");
// Text for each answer candidate
const ans_text_a = document.getElementById("ans-text-a");
const ans_text_b = document.getElementById("ans-text-b");
const ans_text_c = document.getElementById("ans-text-c");
const ans_text_d = document.getElementById("ans-text-d");
const submitBtn = document.getElementById("submit-btn");


let currentQuestion = 0;
let score = 0;

window.onload = loadQuiz;

function loadQuiz(){
    questionElm.innerHTML = data[currentQuestion].question;
    ans_text_a.innerHTML = data[currentQuestion].a;
    ans_text_b.innerHTML = data[currentQuestion].b;
    ans_text_c.innerHTML = data[currentQuestion].c;
    ans_text_d.innerHTML = data[currentQuestion].d;
}

function getSelected(){
    let selected = null;
    
    circles.forEach(circle => {
        if(circle.checked){
            //E.g. the circle id is: circle-a
            selected = circle.id.slice(-1);
        }
    });
    
    return selected;
}

function deselectAll(){
    circles.forEach(circle => {
        circle.checked = false;
    })
}


function submitCurr(){
    const currAns = getSelected();
    // will be null if nothing was selected

    // Only allow submitting when an answer was selected
    if (currAns){
        if(currAns == data[currentQuestion].correct){
            score++;
        }
        deselectAll();
        currentQuestion++;
        if(currentQuestion < data.length){
            loadQuiz();
        }else{
            alert(`Finish! You have ${score} out of ${data.length} score.`);
            currentQuestion = 0;
            loadQuiz();
        }
        
    }
}
submitBtn.addEventListener('click', submitCurr);
