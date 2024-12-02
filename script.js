const textareaElement = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter");
const remainingCounterElement = document.getElementById("remaining-counter");

textareaElement.addEventListener("keyup", () => {
  updateCounter();
});
