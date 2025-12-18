function checkAnswers() {
  var score = 0;
  quiz = document.forms.Quiz.elements;

  answer1 = quiz.fruit.value;
  if (answer1 == "grapes") {
    score = score + 1;
  }

  answer2 = quiz.bakers.value;
  if (answer2 == "14") {
    score = score + 1;
  }

  answer3 = quiz.natural.value;
  if (answer3 == "ingredients") {
    score = score + 1;
  }

  answer4 = quiz.safe.value;
  if (answer4 == "chicken") {
    score = score + 1;
  }

  var checkboxes = quiz.whole;
  var answer5 = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      answer5.push(checkboxes[i].value);
    }
  }

  if (
    answer5.includes("carrots") &&
    answer5.includes("lamb") &&
    answer5.length === 2
  ) {
    score = score + 1;
  }

  answer6 = quiz.adults.value;
  if (answer6 == "29") {
    score = score + 1;
  }

  alert(
    "Congratulations, you completed the quiz, your score was... " +
      score +
      " out of 6"
  );
}
