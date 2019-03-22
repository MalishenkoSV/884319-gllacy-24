
var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-btn");
var login = popup.querySelector("[name=name-user]");
var password = popup.querySelector("[name=mail-feedback]");
var overlay = document.querySelector(".overlay")
var form = popup.querySelector(".feedback-form");
var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("pop-up-overlay");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("pop-up-overlay");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error")
    popup.offsetWidth = popup.offsetWidth
    popup.classList.add("modal-error");

  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
   }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("pop-up-overlay");
    }
  }
});
