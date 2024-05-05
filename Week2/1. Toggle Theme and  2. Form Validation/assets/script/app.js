let themeSwitch = document.querySelector(".switch > input");
let body = document.querySelector("body");
let theme = localStorage.getItem("theme");
let errMsgEmail = document.querySelector(".error-msg__email");
let errMsgPass = document.querySelector(".error-msg__password");
let contentMain = document.querySelector(".content-main");
let contentFinish = document.querySelector(".content-finish");
let form = document.querySelector("form");

let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");

form.addEventListener("change", (e) => {
  e.preventDefault();
  if (!emailInput.validationMessage == "") {
    errMsgEmail.classList.add("active");
    errMsgEmail.textContent = emailInput.validationMessage;
  } else if (passwordInput.value.length < 8) {
    errMsgPass.classList.add("active");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value.length >= 8 && emailInput.validationMessage == "") {
    contentFinish.classList.add("active");
    contentMain.classList.remove("active");
  }
});

window.onload = function () {
  if (theme == "dark") {
    body.classList.add("dark");
    themeSwitch.checked = true;
  } else {
    body.classList.remove("dark");
    themeSwitch.checked = false;
  }
};

themeSwitch.addEventListener("click", (e) => {
  if (themeSwitch.checked == true) {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
