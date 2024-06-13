console.clear();

const form = document.querySelector('[data-js="add-new-question"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const charactersLeftQuestion = document.querySelector(
  '[data-js="chars-left-question"]'
);
const answerInput = document.querySelector('[data-js="answer-input"]');
const charactersLeftAnswer = document.querySelector(
  '[data-js="chars-left-answer"]'
);

questionInput.addEventListener("input", (event) => {
  const questionInputLength = event.target.value.length;
  charactersLeftQuestion.innerText = 150 - questionInputLength;
});

answerInput.addEventListener("input", (event) => {
  const answerInputLength = event.target.value.length;
  charactersLeftAnswer.innerText = 50 - answerInputLength;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = new FormData(event.target);
  const data = Object.fromEntries(formElements);

  console.log(data);

  event.target.reset();

  const addQuestionCard = document.createElement("li");
  addQuestionCard.innerHTML = `
          <li class="card-list__item">
            <article class="card">
              <h2 class="card__question">
                ${data.userQuestion}
              </h2>
              <button
                class="card__button-answer"
                type="button"
                data-js="showAnswerButton"
              >
                Show answer
              </button>
              <p class="card__answer" data-js="cardAnswer">${data.userAnswer}</p>
              <ul class="card__tag-list">
                <li class="card__tag-list-item">${data.userTag}</li>
              </ul>
              <div class="card__button-bookmark">
                <button
                  class="bookmark"
                  aria-label="bookmark"
                  type="button"
                  data-js="bookmarkButton"
                >
                  <svg
                    class="bookmark__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                    />
                  </svg>
                </button>
              </div>
            </article>
          </li>
  `;

  form.append(addQuestionCard);
});
