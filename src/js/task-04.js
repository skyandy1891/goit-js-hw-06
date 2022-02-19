// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const counterValue = document.querySelector("#value");
let value = 0;
const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]'
);
const increment = () => {
  value += 1;
  counterValue.textContent = value;
};

const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

incrementBtnRef.addEventListener("click", increment);
decrementBtnRef.addEventListener("click", decrement);
