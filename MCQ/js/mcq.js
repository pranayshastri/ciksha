document.addEventListener("DOMContentLoaded", function () {
  // Initialize an object to store user responses
  const userResponses = {};

  // Attach event listeners to the checkboxes to capture user responses
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const questionNumber = event.target.name;
      const selectedOption = event.target.value;

      // Store the user's response in the object
      userResponses[questionNumber] = userResponses[questionNumber] || [];
      if (event.target.checked) {
        userResponses[questionNumber].push(selectedOption);
      } else {
        userResponses[questionNumber] = userResponses[questionNumber].filter(
          (option) => option !== selectedOption
        );
      }
    });
  });

  // Attach event listener to the "Submit" button
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", () => {
    // Define the correct answers (modify as needed)
    const correctAnswers = {
      q1: ["a"],
      q2: ["a"],
      q3: ["b"],
      q4: ["c"],
      q5: ["b"],
      q6: ["a"],
      q7: ["a"],
      q8: ["b"],
    };

    // Calculate the number of correct and wrong answers
    let correctCount = 0;
    let wrongCount = 0;

    // Create an object to store questions and their correct answers
    const questionAnswers = {
      q1: "1. What is HTML1? Answer: HyperText Markup Language",
      q2: "2. What does CSS1 stand for? Answer: Cascading Style Sheet",
      q3: "3. Which programming language is used for web development? Answer: JavaScript",
      q4: "4. Which of the following is NOT a JavaScript framework or library? Answer: Django",
      q5: "5. What is the purpose of the CSS 'float' property? Answer: To position an element to the left or right",
      q6: "6. Which HTML tag is used to create a hyperlink? Answer: <a>",
      q7: "7. What does the acronym 'URL' stand for? Answer: Uniform Resource Locator",
      q8: "8. Which of the following tags is used for creating an unordered list in HTML? Answer: <ul>",
    };

    for (const questionNumber in correctAnswers) {
      if (arraysEqual(userResponses[questionNumber], correctAnswers[questionNumber])) {
        correctCount++;
        // Mark correct answers with green color (modify CSS class as needed)
        const questionElement = document.querySelector(`[name=${questionNumber}]`);
        questionElement.classList.add("correct-answer");
      } else {
        wrongCount++;
        // Mark wrong answers with red color (modify CSS class as needed)
        const questionElement = document.querySelector(`[name=${questionNumber}]`);
        questionElement.classList.add("wrong-answer");
      }
    }

    // Display the results to the user, including correct answers
    const resultContainer = document.getElementById("result-container");
    let resultHTML = `<p>Correct Answers: ${correctCount}</p>`;
    resultHTML += `<p>Wrong Answers: ${wrongCount}</p>`;
    resultHTML += "<h2>Answers:</h2>";

    for (const questionNumber in questionAnswers) {
      resultHTML += `<p>${questionAnswers[questionNumber]}</p>`;
    }

    resultContainer.innerHTML = resultHTML;
  });
});

// Function to compare two arrays for equality
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((value, index) => value === arr2[index]);
}
