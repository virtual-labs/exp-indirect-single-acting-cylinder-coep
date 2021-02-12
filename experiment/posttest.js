/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "FRL service unit does following functions.....",  ///// Write the question inside double quotes
      answers: {
        a: "Filtration",                  ///// Write the option 1 inside double quotes
        b: "Regulation",                  ///// Write the option 2 inside double quotes
        c: "Lubrication",                  ///// Write the option 3 inside double quotes
        d: "All of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
      question: ".....are the methods of actuation of pneumatic directional control valves.",  ///// Write the question inside double quotes
      answers: {
        a: "Manual",                  ///// Write the option 1 inside double quotes
        b: "Mechanical",                  ///// Write the option 2 inside double quotes
        c: "All of these",                  ///// Write the option 3 inside double quotes
        d: "Pneumatic"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
	{
      question: "4/2 way pneumatic direction control valve has:",
      answers: {
        a: "Working Port:2, Supply port: 1, Exhaust port: 1",
        b: "Working Port:1, Supply port: 1, Exhaust port: 2",
        c: "Working Port:1, Supply port: 2, Exhaust port: 1",
        d: "Working Port:2, Supply port: 1, Exhaust port: 2"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Following valve is also called memory valve:",
      answers: {
        a: "3/2 way DCV",
        b: "5/3 way DCV",
        c: "b)	4/2 way DCV",
        d: "4/3 way DCV"
      },
      correctAnswer: "c"
    },
	
	{
      question: "3/2 way DCV means",
      answers: {
        a: "Three  ports and two positions",
        b: "Two ports and three positions",
        c: "Three ports of two valve",
        d: "Two ports of three valve"
      },
      correctAnswer: "a"
    },

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////