const addButton = document.getElementById("add-button");

addButton.addEventListener("mouseenter", (e) => {
  e.currentTarget.parentElement.classList.add("change-color-width");
});

addButton.addEventListener("mouseleave", (e) => {
  e.currentTarget.parentElement.classList.remove("change-color-width");
});

addButton.addEventListener("click", () => {
  console.log("something was clicked!!");
});
