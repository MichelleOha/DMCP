const {
    hamburger,
    closeButton,
  } = elementObj();


hamburger.addEventListener("click", (e) => {
    hamburger.style.display = "none";
    openNav();
});

closeButton.addEventListener("click", () => {
    closeNav();
})