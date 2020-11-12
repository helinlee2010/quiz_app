const data = [
    {
       question: "What's the capital of Iceland?",
       correct:"Reykjavik"
    },{
        question: "What does IPA stand for?",
        correct: "Indian Pale Ale"
    }, {
        question: "Which planet is closest to the sun?",
        correct: "Mercury"
    },
    {
        question:"What is the largest country in the word?",
        correct: "Russia"
    },
    {
        question:"Which city had the first ever fashion week?",
        correct: "New York, in 1943"
    }
]


const questionElm = document.getElementById("question-text");
const circles = document.querySelectorAll("input.circle");
const ans_text_a = document.getElementById("ans-text-a");
const ans_text_b = document.getElementById("ans-text-b");
const ans_text_c = document.getElementById("ans-text-c");
const ans_text_d = document.getElementById("ans-text-d");
const submitBtn = document.getElementById("submit-btn");


let currentQuestion = 0;

function getSelected(){
    let selected = null;
    circles.forEach(circle => {
        if(circle.checked){
            selected = circle.id;
        }
    });
    return selected;
}

function deselect(){
    circles.forEach(circle => {
        circle.checked = false;
    })
}

function loadNext(){
    document.getElementById("question-text").innerHTML = "hey next";
    
    
    currentQuestion++;
}

//Test
document.addEventListener("change", ()=>{
    circles.forEach(circle => {
        if(circle.checked){
            console.log(circle.id + " is checked");
            setTimeout(deselect, 1000);
            setTimeout(loadNext, 1000);
        }
    });
})