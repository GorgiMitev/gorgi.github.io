/*
    Trivia Quiz Game:
    Develop a trivia quiz game where users can answer multiple-choice questions. 
    The questions and answers can be stored in an array of objects, and the game 
    should keep track of the user's score.
*/
// Create an array of objects containing trivia questions, correct answer, possible answers
// Display the questions and possible answers
// Handle on click user input, check the selected answer against the correct answer
// Update the user score

let questions = [
  {
    question: "What was the first fruit to be eaten on the Moon?",
    answers: ["Grapes", "Peach", "Apple", "Orange"],
    correctAnswer: "Peach",
  },
  {
    question: "In which Italian city was pizza first made??",
    answers: ["Naples", "Rome", "Palermo", "Milan"],
    correctAnswer: "Naples",
  },
  {
    question: "Which country has the most number of vegetarian citizens?",
    answers: ["United Kingdom", "Brazil", "India", "Macedonia"],
    correctAnswer: "India",
  },
];

const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const result = document.getElementById('result')

function displayQuiz(listOfQuestions) {
  quiz.innerHTML = "";

  listOfQuestions.forEach(function (question, questionIndex) {
    let wrapperDiv =  document.createElement("div");
    wrapperDiv.className = "wrapper";

    wrapperDiv.id = questionIndex;
    let questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerText = question.question;
    
    wrapperDiv.appendChild(questionDiv);

    let answerDiv = document.createElement("div");
    answerDiv.className = "answers";


    for (let answer  of question.answers) {
        let answerLabel = document.createElement("label");
        let answerInput = document.createElement("input");
        answerInput.type = "radio";
        answerInput.value = answer;
        answerInput.name = "question" + questionIndex;
          
        answerLabel.appendChild(answerInput);
        answerLabel.appendChild(document.createTextNode(answer));
        answerDiv.appendChild(answerLabel);
      }

    
      wrapperDiv.appendChild(answerDiv);

      quiz.appendChild(wrapperDiv)
  });
}

displayQuiz(questions);


submit.addEventListener("click", () => {
    let counterOfCorrectAnswers = 0;

    questions.forEach((question, indexOfQuestion) => {
        const wrapperDiv = document.getElementById(indexOfQuestion);
        const selectedAnswer = getSelectedAnswer(wrapperDiv);

        if (selectedAnswer === question.correctAnswer) {
            counterOfCorrectAnswers++;
        }
    });

    console.log(`Total Correct Answers: ${counterOfCorrectAnswers}`);
    result.innerHTML = `
        <p>Correct: ${counterOfCorrectAnswers}/${questions.length}</p>
    `

});

function getSelectedAnswer(questionWrapper) {
    const inputs = questionWrapper.querySelectorAll("input[name^='question']");
    for (let input of inputs) {
        if (input.checked) {
            return input.value;
        }
    }
}

