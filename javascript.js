
let start = document.getElementById('start-button');
const clockEl = document.getElementById('clock');
let questionEl = document.getElementById('question');
const startingTime = 2;
let time = startingTime * 60;
var timer = 0;
var numCorrectAnswers = 0;

start.addEventListener("click", function () {
  
    setInterval(updateCountdown, 1000);
     startQuiz();
    
    });
    

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockEl.innerHTML = `${minutes}:${seconds}`;
   
    if (time>=1){
        time--;
    }
    if (seconds==0 && minutes==0) {
        document.getElementById('clock').innerText="";
  


    }};





/* function readProjectsFromStorage() {
    var givenAnswer = localStorage.getItem('numCorrectAnswers');
    if (givenAnswer) {
      givenAnswer = JSON.parse(givenAnswer);
    } else {
      givenAnswer = [];
    }
    return givenAnswer;
  }

    }

    readProjectsFromStorage();
    console.log(readProjectsFromStorage);
};
*/


startQuiz = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
          'Which one is not a JavaScript Data Type?' : ['Cause', 'String', 'Boolean', 0],
          
          'What does "===" operator mean?' : ['not equal', 'strictly equal' , 'equal', 1],
          
          'Which is not a boolean operator? ' : ['&&', '??', '||', 1]
        };
        
    function loadQuestion(load) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[load];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(load) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[load]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    };
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is sams as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
            
          addChecker(true);     
          numCorrectAnswers=numCorrectAnswers+1; 

          console.log('testing');
          localStorage.setItem('numCorrectAnswers', JSON.stringify(numCorrectAnswers));     
//          console.log('correct',numCorrectAnswers);      
        } else {
          addChecker(false, time-=5);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
   //       console.log(loadAnswers(current));
        } else {
          questionArea.innerHTML = 'Done';
          answerArea.innerHTML = '';
        }
        
         localStorage.getItem('numCorrectAnswers', JSON.parse(numCorrectAnswers));
         console.log(numCorrectAnswers);

        
                  
      };
    }


    
    function addChecker(check) {
    // This function adds a div element to the page
    // Used to see if it was correct or false
    console.log(check)
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (check) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
 //       console.log()
      }
    }
    
    
    // Start the quiz right away
   loadQuestion(current);
   loadAnswers(current);
    
  };

 /* function readProjectsFromStorage() {
    var givenAnswer = localStorage.getItem('projects');
    if (givenAnswer) {
      givenAnswer = JSON.parse(givenAnswer);
    } else {
      givenAnswer = [];
    }
    return givenAnswer;
  }
  
  // Takes an array of projects and saves them in localStorage.
  function saveProjectsToStorage() {
    localStorage.setItem('giveAnswer', JSON.stringify(givenAnswer));
}

function printProjectData() {
    // clear current projects on the page
    projectDisplayEl.empty();
  
    // get projects from localStorage
    var current = readProjectsFromStorage();
}
 */
