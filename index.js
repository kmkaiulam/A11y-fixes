//Define a function to listen for the start button "Let's get cooking" to begin the quiz
//populate the first question on the screen 
//Make sure to have a function that listens for correct answer inputs and updates the question counter and score
//Update the div section with the question

let questionNumber= 0;
let score = 0;

//Updates the Question counter
function updateQuestionNumber() {
    questionNumber ++;
    $('.questionNumber').text(questionNumber);
    console.log("updateQuestionNumber ran!");   
}

//begins quiz, clears text, generates first question and removes start button
function startQuiz() {
    $('.quizAppBegin').on('click', '.startButton', event => {
        $('.quizAppBegin').remove();
        handleQuizQuestion();
        updateQuestionNumber();
      console.log("startQuiz initiated!");
        });
       }
 
function generateQuestion () {
    return `<div class="question">
    <p>${STORE[questionNumber].question}</p>
    <form>
     <fieldset>
     <legend>CHEF QUESTIONS </legend>
     <div id ="radio_label" class ="inputOptions col-12">
     <label for = '${STORE[questionNumber].answers[0]}'class = "option"><input  type ="radio"  aria-labelledby= 'radio_label' name= "input" value= "${STORE[questionNumber].answers[0]}" required>${STORE[questionNumber].answers[0]}</label><br> 
     <label for = '${STORE[questionNumber].answers[1]}'class = "option"><input type ="radio"   aria-labelledby= 'radio_label' name= "input" value= "${STORE[questionNumber].answers[1]}" required>${STORE[questionNumber].answers[1]}</label><br>
     <label for = '${STORE[questionNumber].answers[2]}'class = "option"><input type ="radio"   aria-labelledby= 'radio_label' name= "input" value= "${STORE[questionNumber].answers[2]}" required>${STORE[questionNumber].answers[2]}</label><br>
     <label for = '${STORE[questionNumber].answers[3]}'class = "option"><input type ="radio"   aria-labelledby= 'radio_label' name= "input" value= "${STORE[questionNumber].answers[3]}" required>${STORE[questionNumber].answers[3]}</label><br>
      </div>
      <button type ="submit" class = "userSubmit" >Submit</button> 
     </fieldset>
    </form>
   </div>`;   
}

//Displays Question in the DOM
function handleQuizQuestion (){
    $('.quizForm').html(generateQuestion());
}

//generate feedback for answers
function generateFeedBack (){
    $('.quizForm').on('submit', event =>{
        event.preventDefault();  
        let userAns = $('input[type=radio][name=input]:checked').val();
        console.log(userAns);
        $('.question').remove();
        evaluateUserAns(userAns);
    });
}

//Checks the answer input by user and displays in the DOM if user is correct or incorrect
//also increments the score if correct answer is given
function evaluateUserAns(userAns){
    console.log("evaluateUserAns ran");
    console.log(userAns);
    console.log(STORE[questionNumber-1].correctAnswer);
    if (userAns === STORE[questionNumber-1].correctAnswer) {
        $('.quizForm').html(`<div class = "userFeedback"><p>You're correct!</p><p>${STORE[questionNumber-1].feedback}</p></div>`);
        $('.feedback').append(`<img class ="feedbackImage" src="${STORE[questionNumber-1].correctIcon}" alt= "${STORE[questionNumber-1].alt}">`);
        score++;
        $('.score').text(score);
     }
     else {
         $('.quizForm').html(`<div class = "userFeedback"><p>Oh no! The correct answer was: <br><br> ${STORE[questionNumber-1].correctAnswer}</p></div>`);
         $('.feedback').append(`<div class="feedbackImageContainer"><img id ="incorrectToast" class = "feedbackImage" src="${incorrectAnswer.image}" alt= "${incorrectAnswer.alt}"></div>`);
    }
     if (questionNumber <STORE.length) {
    $('.userFeedback').append('<button type ="submit" class = "nextQuestion">Next Question</button>');
    }

    else {
    $('.userFeedback').append('<button type ="submit" class = "finalScore ">See Your Final Score</button>');
    }
   }

function generateFinalScore () {
    $('.quizForm').on('click', ".finalScore",  event =>{
        clearFeedback();
        if ( score === 10) {
            $('.quizForm').html(`<div class = "userFeedback"><p>Perfect! Looks like you can <em>cut</em> it in the kitchen!</p><p> Score: ${score} / 10</p>`);
        }

        else if (score >= 7) {
           $('.quizForm').html(`<div class = "userFeedback"><p>Not bad! Just <em>hone</em> up those skills and you'll be there in no time!</p><p> Score: ${score} / 10</p>`);
        } 
        
        else {
        $('.quizForm').html(`<div class = "userFeedback"><p>Guess it's back to the <em>chopping</em> board. See what I did there?</p><p> Score: ${score} / 10</p>`);
       } 
       $('.userFeedback').append('<button type ="submit" class = "restartQuiz">Restart Quiz</button>');
      });
     }


//Restarts the quiz, resetting the question number and score
//Renders Original "start screen" in the DOM
function handleRestartButton() {
    $('.quizForm').on('click', '.restartQuiz', event => {
        questionNumber = 0;
        $('.questionNumber').text(questionNumber);
        score = 0;
        $('.score').text(score);
        clearDOM();
        $('.handleRestart').html(`<div class = "quizAppBegin">
        <p>Are you a chef?</p><p> Test how well you know your way around the kitchen!</p> 
        <button class="startButton" type="button">Allez Cuisine!</button>
    </div>`);
        startQuiz();
    });
}
//Changes the question number on the counter, advances to next question and clears the DOM of images
function handleNextQuestion (){
    $('.quizForm').on('click', '.nextQuestion', event => {
        clearFeedback();
        handleQuizQuestion();
        updateQuestionNumber();
    });

}

//Removes all Images and text from DOM
function clearDOM() {
    $('.question').remove();
    $('.feedbackImage').remove();
 }
 //Remove all images added to DOM
 function clearFeedback() {
    $('.feedbackImage').remove();
 }


function handleQuizApp() {
    startQuiz();
    generateQuestion();
    generateFeedBack();
    handleNextQuestion();
    handleRestartButton();
    generateFinalScore ();
}
$(handleQuizApp);