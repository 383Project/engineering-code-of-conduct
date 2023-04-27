const quizObject = {
  quiz: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest country in the world?",
      options: ["Russia", "China", "USA"],
      answer: "Russia",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Hg"],
      answer: "Au",
    },
  ],
};

buildQuiz();
let questionsCount = 0;
let score = 0;

function buildQuiz() {
  const title = document.getElementById("quizHeader");
  const button = document.getElementById("quizButton");

  title.innerText = `Welcome to the Online Quiz Project`;
  button.innerHTML = `<button onclick='questionPage()'>Let's go!</button>`;
}

function questionPage() {
  const title = document.getElementById("quizHeader");
  const button = document.getElementById("quizButton");
  const questionContainer = document.getElementById("quizQuestion");
  const answersContainer = document.getElementById("answersContainer");

  title.innerText = `Question ${questionsCount + 1}`;
  button.innerHTML = `<button onclick='showResultPage()'>Submit</button>`;

  if (questionsCount <= 2) {
    questionContainer.innerHTML = quizObject.quiz[questionsCount].question;
    answersContainer.innerHTML = displayRadio();
  } else {
    endPage();
  }
}

function displayRadio() {
  const quizOptions = quizObject.quiz[questionsCount].options;
  const options = quizOptions
    .map((option, i) => {
      return `
      <div id="answers">
        <input class="answer" type="radio" id="${option}" name="answer">
        <label for="${option}">${option}</label>
      </div>
    `;
    })
    .join("");

  return options;
}

function showResultPage() {
  const questionContainer = document.getElementById("quizQuestion");
  const answersContainer = document.getElementById("answersContainer");
  const answerContainers = answersContainer.querySelectorAll(".answer");
  const button = document.getElementById("quizButton");
  let answerText = "";
  let answer;

  //Check answer was submited
  answerContainers.forEach((currenAns) => {
    if (currenAns.checked) {
      answer = currenAns.id;
    }
  });

  //Check if the submitted answer was right and update the score
  if (answer === quizObject.quiz[questionsCount].answer) {
    answerText = `<p id="correct">Correct answer ! </p>`;
    score++;
  } else {
    answerText = `<p id="wrong" >Wrong ! The correct answer was : ${quizObject.quiz[questionsCount].answer} </p>`;
  }

  button.innerHTML = `<button onclick='questionPage()'>Next</button>`;
  questionContainer.innerHTML = answerText;
  answersContainer.innerText = ``;
  questionsCount++;
}

function endPage() {
  const title = document.getElementById("quizHeader");
  const questionContainer = document.getElementById("quizQuestion");
  const button = document.getElementById("quizButton");

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
  button.innerHTML = `<p id="scoreLabel">Your score is: </p><p id="score">${score} out of ${quizObject.quiz.length}</p> `;
}
