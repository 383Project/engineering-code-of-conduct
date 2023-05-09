import quiz from "./data/data.json" assert { type: "json" };

//Initialization of a question count and the score to 0
let questionsCount = 0;
let score = 0;

//Store the html elements into variables to use them in the different functions
const title = document.getElementById("title");
const buttonContainer = document.getElementById("buttonContainer");
const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const button = document.createElement("button");
buttonContainer.appendChild(button);

//Display the first page of the quiz
function buildQuiz() {
  button.innerHTML = "Let's go!";
  // button.onClick = questionPage;

  title.innerText = `Welcome to the Online Quiz Project`;

  button.onclick = function () {
    questionPage();
  };
}

//Display the page with the multiple choice question
function questionPage() {
  console.log("questions");
  title.innerText = `Question ${questionsCount + 1}`;
  button.innerHTML = `Submit`;
  button.onclick = function () {
    showResultPage();
  };

  //Check if there is a question left and display it. If not, call endPage()
  if (questionsCount <= quiz.length - 1) {
    const { question, options } = quiz[questionsCount];
    questionContainer.innerHTML = question;
    answersContainer.innerHTML = displayRadio(options);
  } else {
    endPage();
  }
}

//Map into the answers, format them and return them
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

//Display the page with the answer after submitting your answer
function showResultPage() {
  const answerContainers = answersContainer.querySelectorAll(".answer");
  let answerText = "";
  let answer;

  //Store your answer's id into a variable
  answerContainers.forEach((currenAns) => {
    if (currenAns.checked) {
      answer = currenAns.id;
    }
  });

  //Check if your answer's id is the same as the correct and display a different message if your answer is correct or wrong and update your score
  if (answer === quiz[questionsCount].answer) {
    answerText = `<p id="correct">Correct answer ! </p>`;
    //Add +1 to your score
    score++;
  } else {
    answerText = `<p id="wrong" >Wrong ! The correct answer was : ${quiz[questionsCount].answer} </p>`;
  }

  button.innerHTML = `Next`;
  button.onclick = function () {
    questionPage();
  };
  questionContainer.innerHTML = answerText;
  answersContainer.innerText = ``;

  //Add +1 to the question count
  questionsCount++;
}

//Display the last page with a different message depending on your score and display your score
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
