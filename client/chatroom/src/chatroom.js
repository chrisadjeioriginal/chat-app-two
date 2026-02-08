const exitButton = document.getElementById("return-button");
exitButton.addEventListener("mouseenter", (e) => {
  e.currentTarget.parentElement.style.backgroundColor = "gray";
});

exitButton.addEventListener("mouseleave", (e) => {
  e.currentTarget.parentElement.style.backgroundColor = "white";
});
