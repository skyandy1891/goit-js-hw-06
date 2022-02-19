// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.




const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  if (
    event.target.value.length > inputRef.getAttribute("data-length") ||
    event.target.value.length < inputRef.getAttribute("data-length")
  ) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
});
