const clickx = document.getElementById("pencet");

clickx.addEventListener("click", function () {
  clickx.classList.toggle("Diam");
});

const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const burger = document.getElementsByClassName("hamburger-menu")[0];
var menuFlag = false;
burger.addEventListener("click", function () {
  if (menuFlag) {
    mobileMenu.style.display = "none";
    menuFlag = false;
    return;
  } else {
    mobileMenu.style.display = "flex";
    menuFlag = true;
    return;
  }
});
