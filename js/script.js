'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


//message delivery
const sendBtn = document.getElementById("message-send");
sendBtn.addEventListener('click', ()=>{
  const name = document.querySelector('.contact-form #name').value;
  const email = document.querySelector('.contact-form #email').value;
  const phone = document.querySelector('.contact-form #phone').value;
  const subject = document.querySelector('.contact-form #subject').value;
  const message = document.querySelector('.contact-form #message').value;

  emailjs.send("service_u8xo7wm","template_bovgtmh",{
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
    });
})





