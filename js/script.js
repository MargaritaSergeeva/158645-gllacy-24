
var body = document.querySelector(".index-body");
var sliderBackground = document.querySelector(".site-wrapper");
var slider = document.querySelector(".slider");
var slide1 = slider.querySelector(".slide-1");
var slide2 = slider.querySelector(".slide-2");
var slide3 = slider.querySelector(".slide-3");
var slideBtn1 = slider.querySelector(".slide-btn-1");
var slideBtn2 = slider.querySelector(".slide-btn-2");
var slideBtn3 = slider.querySelector(".slide-btn-3");


// Slider
slideBtn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.remove("background-slide-2");
  body.classList.remove("background-slide-3");
  sliderBackground.classList.add("img-slide-1");
  sliderBackground.classList.remove("img-slide-2");
  sliderBackground.classList.remove("img-slide-3");
  slide1.classList.remove("pop-up");
  slide2.classList.add("pop-up");
  slide3.classList.add("pop-up");
  slideBtn1.classList.add("slide-btn-chacked");
  slideBtn2.classList.remove("slide-btn-chacked");
  slideBtn3.classList.remove("slide-btn-chacked");
});

slideBtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.add("background-slide-2");
  body.classList.remove("background-slide-3");
  sliderBackground.classList.remove("img-slide-1");
  sliderBackground.classList.add("img-slide-2");
  sliderBackground.classList.remove("img-slide-3");
  slide1.classList.add("pop-up");
  slide2.classList.remove("pop-up");
  slide3.classList.add("pop-up");
  slideBtn1.classList.remove("slide-btn-chacked");
  slideBtn2.classList.add("slide-btn-chacked");
  slideBtn3.classList.remove("slide-btn-chacked");
});

slideBtn3.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.remove("background-slide-2");
  body.classList.add("background-slide-3");
  sliderBackground.classList.remove("img-slide-1");
  sliderBackground.classList.remove("img-slide-2");
  sliderBackground.classList.add("img-slide-3");
  slide1.classList.add("pop-up");
  slide2.classList.add("pop-up");
  slide3.classList.remove("pop-up");
  slideBtn1.classList.remove("slide-btn-chacked");
  slideBtn2.classList.remove("slide-btn-chacked");
  slideBtn3.classList.add("slide-btn-chacked");
});


var feedback = document.querySelector(".feedback");
var popupFb = document.querySelector(".overlay-contact-form");
var contactForm = popupFb.querySelector(".modal-contact-form");
var userName = contactForm.querySelector("#name");
var userEmail = contactForm.querySelector("#email-contact");
var userMessage = contactForm.querySelector("#text");
var isStorageSupport = true;
var storageEmail = "";
var storageName = "";
var closeFb = popupFb.querySelector(".modal-close");

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

// Modal contact form
feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFb.classList.add("modal-show");
  popupFb.classList.add("animation-modal-form");
    if (storageName) {
      userName.value = storageName;
      userEmail.focus();
    } else {
      userName.focus();
    }
    if (storageEmail) {
      userEmail.value = storageEmail;
      if (storageName) {
        userMessage.focus();
      } else {
        userName.focus();
      }
    }
});

contactForm.addEventListener("submit", function (evt) {
  if (!userEmail.value || !userName.value || !userMessage.value) {
    evt.preventDefault();
    popupFb.classList.remove("animation-modal-form");
    contactForm.classList.remove("modal-form-error");
    popupFb.offsetWidth = popupFb.offsetWidth;
    contactForm.classList.add("modal-form-error");
  } else {
    localStorage.setItem("name", userName.value);
    localStorage.setItem("email", userEmail.value);
  }
});

closeFb.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFb.classList.remove("modal-show");
  contactForm.classList.remove("modal-form-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFb.classList.contains("modal-show")) {
      popupFb.classList.remove("modal-show");
      contactForm.classList.remove("modal-form-error");
    }
  }
});