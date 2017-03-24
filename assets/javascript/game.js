

  // array of objects to store questions, possible answers, and the answer key
  var questions = [ { "question" : "What's my name?",
                      "choices"  : ["Bob","Sam","Daniel","Bill"],
                      "answer"   : 2
                    },
                    { "question" : "What color am I?",
                      "choices"  : ["White","Black","Orange","Green"],
                      "answer"   : 0
                    },
                    { "question" : "What is my favorite food?",
                      "choices"  : ["Spinach","Mushrooms","Pizza","Sushi"],
                      "answer"   : 2
                    },
                    { "question" : "How many kids do I have?",
                      "choices"  : ["One","Five","Nine","Two"],
                      "answer"   : 3
                    },
                    { "question" : "What kind of car do I drive?",
                      "choices"  : ["Ferari","Ford","Bentley","Jeep"],
                      "answer"   : 2
                    },
                    { "question" : "What's my favorite drink?",
                      "choices"  : ["Whisky","Tequila","Gin","Beer"],
                      "answer"   : 0
                    } ];

// array of objects to store info related to the user's answers
// isCorrect returns a boolean based on whether the user's choice matches the
// answer to the question.
var userResults = [ { "question"  : questions[0].question,
                      "choice"    : "",
                      "isCorrect" : this.choice===questions[0].choices[questions[0].answer] ? true : false
                    },
                    { "question"  : questions[1].question,
                      "choice"    : "",
                      "isCorrect" : this.choice===questions[1].choices[questions[1].answer] ? true : false
                    },
                    { "question"  : questions[2].question,
                      "choice"    : "",
                      "isCorrect" : this.choice===questions[2].choices[questions[2].answer] ? true : false
                    },
                    { "question"  : questions[3].question,
                      "choice"    : "",
                      "isCorrect" : this.choice===questions[3].choices[questions[3].answer] ? true : false
                    },
                    { "question"  : questions[4].question,
                      "choice"    : "",
                      "isCorrect" : this.choice===questions[4].choices[questions[4].answer] ? true : false
                    },
                    { "question"  : questions[5].question,
                      "choice"    : "",
                      "isCorrect" : this.choice===questions[5].choices[questions[5].answer] ? true : false
                    }];


  var wrong = ["You must be more of a vodka drinker.",
               "Hmmm, sorry. Are by chance a fan of Zima?",
               'Nope. Does your liquor of choice involve "malt"?',
               "Wow you're really bad at this.",
               "I really don't know what to say at this point.",
               "Seriously? Whisky, the brown one. Educate yourself."];

  var correct = ["Yes sir.",
                 "Doing well, you don't likely drink out of stemware.",
                 "Yes indeed.",
                 "These correct answers are making me thirsty.",
                 "I figured you knew that one.",
                 "When you're right, you're right, and you sir are right."];

  var radBtn = '<p><input type="radio" name="choice">';

  // displays the question
  function askQuestion(question) {
    $("#questions").html("<h2>"+question+"</h2>");
  }

  // display answer choices
  function displayChoices(qnum) {
    $("#buttonBox").append('<form action="">')
    for ( i=0; i < questions[qnum].choices.length; i++ ) {
      $("#buttonBox").append(radBtn+questions[qnum].choices[i]+"</p>");
    }
  }

  // display text depending on whether user is right or wrong
  function displayResult(qnum) {
    if (userResults[qnum].isCorrect) {
      $("#answers").html("<h3>"+correct[qnum]+"</h3>");
    } else {
      $("#answers").html("<h3>"+wrong[qnum]+"</h3>");
    }
    setTimeout(nextUp(i), 1000 * 7);
  }

  function getReady() {
    $("#questions").html("<h2>Are you ready for some whisky trivia?</h2>");
    $("#buttonBox").html('<button class="startButton">Bring it on!</button>');
    $("#buttonBox").on("click",function(){
        $("#buttonBox").off("click");
        $("#buttonBox").remove("button");
        console.log("click should be off");
        beginGame();
    });
  }

  function nextUp (qnum) {
    askQuestion(questions[qnum].question);
    displayChoices(qnum);
    console.log("displayed questions and answers");
  }

  function beginGame() {
    var i = 0;
    var readyGo = false;
    askQuestion(questions[0].question);
    displayChoices(0);
    readyGo = true;
    if (readyGo)
    {
      $("#answers").on("click",function(){
        console.log("got the answer");
        $("#answers").off("click");
        console.log("click should be off");
        userResults[i].choice = $(this).find("input").text();
        console.log("user guessed: "+$(this).find("input").text());
        displayResult(i);
        i++;
        setTimeout(nextUp(i), 1000 * 7);
      });
    }
  }

$(document).ready(function() {

  getReady();


}); //------ end of document ready function


/*  disable radio buttons after click
$(":radio").click(function(){
   var radioName = $(this).attr("name"); //Get radio name
   $(":radio[name='"+radioName+"']").attr("disabled", true); //Disable all with the same name
});
 */




