const bookmarkButtons = document.querySelectorAll(".bookmark");
bookmarkButtons.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--active");
  });
});

const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
const cardAnswer = document.querySelector('[data-js="cardAnswer"]');

//show answer button:
showAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");

  if (cardAnswer.classList.contains("card__answer--active")) {
    showAnswerButton.textContent = "Hide answer";
  } else {
    showAnswerButton.textContent = "Show answer";
  }
});
