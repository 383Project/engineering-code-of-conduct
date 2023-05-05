import quiz from "./data/data.json";

let questionsCount = 0;
let score = 0;
const title = document.getElementById("title");
const buttonContainer = document.getElementById("buttonContainer");
const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");

function buildQuiz() {
  title.innerText = `Welcome to the Online Quiz Project`;
  buttonContainer.innerHTML = `<button onclick='questionPage()'>Let's go!</button>`;
}

function questionPage() {
  title.innerText = `Question ${questionsCount + 1}`;
  buttonContainer.innerHTML = `<button onclick='showResultPage()'>Submit</button>`;

  if (questionsCount <= quiz.length - 1) {
    const { question, options } = quiz[questionsCount];

    questionContainer.innerHTML = question;
    answersContainer.innerHTML = displayRadio(options);
  } else {
    endPage();
  }
}

function displayRadio(options) {
  return options
    .map((option) => {
      return `
      <div id="answers">
        <input class="answer" type="radio" id="${option}" name="answer">
        <label for="${option}">${option}</label>
      </div>
    `;
    })
    .join("");
}

function showResultPage() {
  const answerContainers = answersContainer.querySelectorAll(".answer");
  let answerText = "";
  let answer;

  answerContainers.forEach((currenAns) => {
    if (currenAns.checked) {
      answer = currenAns.id;
    }
  });

  if (answer === quiz[questionsCount].answer) {
    answerText = `<p id="correct">Correct answer ! </p>`;
    score++;
  } else {
    answerText = `<p id="wrong" >Wrong ! The correct answer was : ${quiz[questionsCount].answer} </p>`;
  }

  buttonContainer.innerHTML = `<button onclick='questionPage()'>Next</button>`;
  questionContainer.innerHTML = answerText;
  answersContainer.innerText = ``;
  questionsCount++;
}

function endPage() {
  let scoreText = "";
  switch (score) {
    case 0:
      scoreText = "Don’t give up,  next time you will do better !";
      break;
    case 1:
      scoreText = "Not too bad !";
      break;
    case 2:
      scoreText = "You did great !";
      break;
    case 3:
      scoreText = "Congratulations ! ";
      break;
    default:
      scoreText = "Have you even tried ? ";
      break;
  }

  title.innerText = `The End !`;
  questionContainer.innerText = scoreText;
  buttonContainer.innerHTML = `<p id="scoreLabel">Your score is: </p><p id="score">${score} out of ${quiz.length}</p> `;
}

buildQuiz();
