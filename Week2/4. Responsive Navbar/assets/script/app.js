let navCollapse = document.querySelector(".nav-collapse ");
let navbar = document.querySelector(".navbar");

navCollapse.addEventListener("click", (e) => {
  if (!navbar.classList.contains("active")) {
    navbar.classList.add("active");
  }
  else{
    navbar.classList.remove("active");
  }
});
