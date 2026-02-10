// FUNCTION 1 : makeForm
//This function creates the search box which users use to look for other users of the site.

export function makeForm() {
  /// These lines specify the style of the form/search box
  const searchBox = document.createElement("form");
  searchBox.style.backgroundColor = "rgba(31, 31, 31, 0.59)";
  searchBox.style.color = "white";
  searchBox.id = "myForm";
  searchBox.style.display = "flex";
  searchBox.style.flexDirection = "column";
  searchBox.style.width = "100%";
  searchBox.style.alignItems = "center";
  searchBox.style.minHeight = "10vh";
  searchBox.style.position = "absolute";
  searchBox.style.left = "50%";
  searchBox.style.transform = "translateX(-50%)";
  searchBox.style.top = "5vh";

  // These lines specify the style of the label in the form/search box
  const label1 = document.createElement("label");
  label1.textContent = "Enter Username: ";
  label1.htmlFor = "userSearch";
  label1.style.position = "relative";
  label1.style.marginBottom = "5vh";
  label1.style.top = "1vh";

  // These lines specify the style of entry/input in the form/search box
  const entry = document.createElement("input");
  entry.id = "userSearch";
  entry.style.width = "200px";
  entry.style.width = "90%";
  entry.placeholder = "Ex: @christopher123";

  //These lines specify the style of the button which closes the form/search box

  const closeButton = document.createElement("div");
  closeButton.style.position = "relative";
  closeButton.style.width = "0.6vw";
  closeButton.style.height = "1vh";
  closeButton.style.borderRadius = "0.9vh";
  closeButton.textContent = "X";
  closeButton.style.display = "flex";
  closeButton.style.justifyContent = "center";
  closeButton.style.alignItems = "center";
  closeButton.style.backgroundColor = "white";
  closeButton.style.color = "black";
  closeButton.style.fontWeight = "bolder";
  closeButton.style.border = "1px solid white";
  closeButton.style.left = "14vw";
  closeButton.style.top = "1vh";
  closeButton.style.fontSize = "1vh";
  closeButton.style.cursor = "pointer";
  closeButton.id = "search-box-close-button";

  // These lines add an event listener to the close button
  closeButton.addEventListener("click", (e) =>
    e.currentTarget.parentElement.remove(),
  );

  // This line attaches the close button to the search box
  searchBox.appendChild(closeButton);

  // This line attaches the label to the search box
  searchBox.appendChild(label1);

  // This line attaches the entry/input area to the search box

  searchBox.appendChild(entry);

  return searchBox;
}

//FUNCTION2 changeColor

function changeColor(div, color1, color2) {
  div.addEventListener("mouseenter", (e) => {
    e.currentTarget.style.backgroundColor = color1;
  });

  div.addEventListener("mouseleave", (e) => {
    e.currentTarget.style.backgroundColor = color2;
  });
}

function destroyDiv(div, elementToDestroy) {
  div.addEventListener("click", (e) => {
    e.elementToDestroy.remove();
  });
}

// FUNCTION 3 : ShowUserInfo
// This function displays the users information i.e profile pic, username ,date joined & bio
export function ShowUserInfo(username, date, bio) {
  const infoBox = document.createElement("div");
  infoBox.style.width = "34vw";
  infoBox.style.minHeight = "50vh";
  infoBox.style.backgroundColor = "rgb(22, 19, 19)";
  infoBox.style.borderRadius = "2vw";
  infoBox.style.position = "absolute";
  infoBox.style.left = "50%";
  infoBox.style.transform = "translateX(-50%)";
  infoBox.style.display = "flex";
  infoBox.style.flexDirection = "column";
  infoBox.style.alignItems = "center";

  const banner = document.createElement("div");
  banner.style.position = "relative";
  banner.style.width = "100%";
  banner.style.height = "9vh";
  banner.style.backgroundColor = "rgba(20, 21, 21, 0.75)";
  banner.style.borderTopLeftRadius = "2vw";
  banner.style.borderTopRightRadius = "2vw";
  banner.style.display = "flex";
  banner.style.flexDirection = "column";
  banner.style.alignItems = "center";

  const arc = document.createElement("div");
  arc.style.position = "relative";
  arc.style.height = "70%";
  arc.style.width = "10%";
  arc.style.borderRadius = "50%";
  arc.style.backgroundColor = "rgb(255, 255, 255)";
  arc.style.top = "2vh";
  arc.style.display = "flex";
  arc.style.justifyContent = "center";
  arc.style.alignItems = "center";

  const profilePic = document.createElement("img");
  profilePic.src = "../assets/profile_pic_cropped.png";
  profilePic.style.width = "80%";
  profilePic.style.height = "75%";
  profilePic.style.borderRadius = "50%";
  profilePic.style.cursor = "pointer";

  const details = document.createElement("ul");
  details.style.position = "relative";
  details.style.listStyle = "none";
  details.style.padding = "0px";
  details.style.backgroundColor = "rgba(96, 102, 101, 0.75)";
  details.style.width = "70%";

  const listItem1 = document.createElement("li");
  const listItem2 = document.createElement("li");
  const listItem3 = document.createElement("li");

  listItem1.innerHTML = `Username: <br> ${username}`;
  listItem2.innerHTML = `Date Joined: <br> ${date}`;
  listItem3.innerHTML = `Bio: <br> ${bio}`;

  listItem1.classList.add("listItem");
  listItem2.classList.add("listItem");
  listItem3.classList.add("listItem");

  details.appendChild(listItem1);
  details.appendChild(listItem2);
  details.appendChild(listItem3);

  const closeButton = document.createElement("div");
  closeButton.style.position = "absolute";
  closeButton.style.width = "3.5%";
  closeButton.style.height = "24.2%";
  closeButton.style.borderRadius = "50%";
  closeButton.textContent = "X";
  closeButton.style.display = "flex";
  closeButton.style.justifyContent = "center";
  closeButton.style.alignItems = "center";
  closeButton.style.backgroundColor = "white";
  closeButton.style.color = "black";
  closeButton.style.fontWeight = "bolder";
  closeButton.style.border = "1px solid white";
  closeButton.style.left = "35vw";
  closeButton.style.top = "-2vh";
  closeButton.style.fontSize = "1vh";
  closeButton.style.cursor = "pointer";
  closeButton.id = "close-button";

  banner.appendChild(closeButton);

  arc.appendChild(profilePic);
  banner.appendChild(arc);

  infoBox.appendChild(banner);
  infoBox.appendChild(details);

  return infoBox;
}

//FUNCTION3

export function showLogoutMessage() {
  const logoutMessageBox = document.createElement("div");
  logoutMessageBox.style.position = "absolute";
  logoutMessageBox.style.minWidth = "65%";
  logoutMessageBox.style.minHeight = "22%";
  logoutMessageBox.style.backgroundColor = "black";
  logoutMessageBox.style.top = "40%";
  logoutMessageBox.style.display = "flex";
  logoutMessageBox.style.flexDirection = "column";
  logoutMessageBox.style.alignItems = "center";
  logoutMessageBox.style.border = "1px solid rgb(94, 94, 94)";

  const message = "Are you sure you want to logout?";

  const messageHolder = document.createElement("p");
  messageHolder.style.position = "relative";
  messageHolder.style.top = "2vh";
  messageHolder.textContent = message;
  logoutMessageBox.appendChild(messageHolder);

  const buttonHolder = document.createElement("div");
  buttonHolder.style.position = "relative";
  buttonHolder.style.width = "100%";
  buttonHolder.style.height = "20%";
  buttonHolder.style.display = "flex";
  buttonHolder.style.justifyContent = "space-evenly";

  buttonHolder.style.marginTop = "5vh";
  buttonHolder.style.color = "white";

  const yesButton = document.createElement("div");
  const noButton = document.createElement("div");

  noButton.style.width = "20%";
  noButton.style.height = "90%";
  noButton.style.backgroundColor = "rgb(7, 16, 138)";
  //   noButton.style.borderRadius = "20%";
  noButton.textContent = "no";
  noButton.style.display = "flex";
  noButton.style.justifyContent = "center";
  noButton.style.alignItems = "center";
  noButton.style.fontFamily = "cursive";
  noButton.style.cursor = "pointer";
  noButton.id = "no-button";

  yesButton.style.width = "20%";
  yesButton.style.height = "90%";
  yesButton.style.backgroundColor = " rgb(130, 0, 0)";
  //   yesButton.style.borderRadius = "20%";
  yesButton.textContent = "yes";
  yesButton.style.display = "flex";
  yesButton.style.justifyContent = "center";
  yesButton.style.alignItems = "center";
  yesButton.style.fontFamily = "cursive";
  yesButton.style.cursor = "pointer";

  changeColor(noButton, "rgb(10, 26, 255)", "rgb(7, 16, 138)");
  changeColor(yesButton, " rgb(255, 0, 0)", "rgb(130, 0, 0)");

  buttonHolder.appendChild(noButton);
  buttonHolder.appendChild(yesButton);

  logoutMessageBox.appendChild(buttonHolder);

  return logoutMessageBox;
}
