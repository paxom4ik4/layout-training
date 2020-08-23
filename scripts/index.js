const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-item");
nav.addEventListener("click", (e) => {
  const target = e.target;
  const targetA = target.closest("A");
  navLinks.forEach((elem) => {
    elem.classList.remove("nav-active");
  });
  console.log(target);
  targetA.classList.add("nav-active");
});

const form = document.querySelector(".page-form");
form.addEventListener("click", (e) => {
  e.preventDefault();
});
