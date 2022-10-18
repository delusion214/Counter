let score = document.querySelector('.counter__score');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
let counterScore = 0;

plusBtn.addEventListener('click', () => {
  counterScore++;
  score.innerHTML = counterScore;
});

minusBtn.addEventListener('click', () => {
  counterScore--;
  score.innerHTML = counterScore;
});
