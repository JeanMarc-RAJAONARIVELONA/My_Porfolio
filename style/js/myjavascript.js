// Sticky Navbar

//mobile navigation
const burger = document.querySelector(".nav-mobile");
const nav_ul = document.querySelector(".nav-ul");
burger.addEventListener("click", () => {
  nav_ul.classList.toggle("nav-switch");
});
///header animation
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "CEO of jcramG";
  }, 2);
  setTimeout(() => {
    text.textContent = "Developper";
  }, 4200);
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 8300);
};
textLoad();
setInterval(textLoad, 12000);
// =======================================js timeline=====================
$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "25%");
  $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "50%");
  $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "75%");
  $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "100%");
  $(".analysis").addClass("active").siblings().removeClass("active");
});
// ===========================================swipper===========================
const swiper = new Swiper(".swiper", {
  autoHeight: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
