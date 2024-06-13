const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
const cardAnswer = document.querySelector('[data-js="cardAnswer"]');

//toggle bookmark icon:

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

//show answer button:
showAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");

  if (cardAnswer.classList.contains("card__answer--active")) {
    showAnswerButton.textContent = "Hide answer";
  } else {
    showAnswerButton.textContent = "Show answer";
  }
});
