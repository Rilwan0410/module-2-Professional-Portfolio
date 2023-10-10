const hamburgerButton = document.querySelector(".show i");
const nav = document.querySelector("header nav ul");

document.body.addEventListener("click", (e) => {
  if (e.target !== hamburgerButton) {
    nav.classList.remove("show");
  }
});

hamburgerButton.addEventListener("click", () => {
  nav.classList.add("show");
});
