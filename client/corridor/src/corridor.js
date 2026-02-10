import {
  makeForm,
  ShowUserInfo,
  showLogoutMessage,
} from "../../functions/functions.js";

const addButton = document.getElementById("add-button");
const infoButton = document.getElementById("info-button");
const holder = document.getElementById("component-holder");
let infoBoxIsOpened = false;
let infoBoxCloseButton;
let seacrhBoxIsOpened = false;
let seacrhBoxCloseButton;
let logoutMessageBoxIsOpened = false;
let noButton;

addButton.addEventListener("mouseenter", (e) => {
  e.currentTarget.parentElement.classList.add("change-color-width");
});

addButton.addEventListener("mouseleave", (e) => {
  e.currentTarget.parentElement.classList.remove("change-color-width");
});

addButton.addEventListener("click", () => {
  if (seacrhBoxIsOpened === false) {
    const form = makeForm();
    holder.appendChild(form);
    seacrhBoxIsOpened = true;

    seacrhBoxCloseButton = form.querySelector("#search-box-close-button");

    if (seacrhBoxCloseButton) {
      seacrhBoxCloseButton.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove();
        seacrhBoxIsOpened = false;
        seacrhBoxCloseButton = undefined;
      });
    }
  }
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

const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  if (logoutMessageBoxIsOpened === false) {
    const logoutMessageBox = showLogoutMessage();
    holder.appendChild(logoutMessageBox);
    logoutMessageBoxIsOpened = true;

    noButton = logoutMessageBox.querySelector("#no-button");

    noButton.addEventListener("click", (e) => {
      e.currentTarget.parentElement.parentElement.remove();
      logoutMessageBoxIsOpened = false;
      noButton = undefined;
    });
  }
});
