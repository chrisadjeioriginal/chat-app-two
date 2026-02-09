import { makeForm, ShowUserInfo } from "../../functions/functions.js";

const addButton = document.getElementById("add-button");
const infoButton = document.getElementById("info");
const holder = document.getElementById("component-holder");
let infoBoxIsOpened = false;
let infoBoxCloseButton;

addButton.addEventListener("mouseenter", (e) => {
  e.currentTarget.parentElement.classList.add("change-color-width");
});

addButton.addEventListener("mouseleave", (e) => {
  e.currentTarget.parentElement.classList.remove("change-color-width");
});

addButton.addEventListener("click", () => {
  const form = makeForm();
  holder.appendChild(form);
});

infoButton.addEventListener("click", () => {
  if (infoBoxIsOpened === false) {
    const userInfoBox = ShowUserInfo(
      "@chrisadjeisongs",
      "17/05/2026",
      "Hi I'm new here :)",
    );
    holder.appendChild(userInfoBox);

    infoBoxIsOpened = true;
    infoBoxCloseButton = userInfoBox.querySelector("#close-button");
    if (infoBoxCloseButton) {
      infoBoxCloseButton.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.remove();
        infoBoxIsOpened = false;
        infoBoxCloseButton = undefined;
      });
    }
  }
});
