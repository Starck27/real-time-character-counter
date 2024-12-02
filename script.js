const textareaElement = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter");
const remainingCounterElement = document.getElementById("remaining-counter");

textareaElement.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  const totalChars = textareaElement.value.length;
  const remainingChars = textareaElement.getAttribute("maxLength") - totalChars;

  totalCounterElement.innerText = totalChars;
  remainingCounterElement.innerText = remainingChars;
}
