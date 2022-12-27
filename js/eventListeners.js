const {
    hamburger,
    closeButton,
  } = elementObj();


hamburger.addEventListener("click", (e) => {
    console.log("clicked")
    hamburger.style.display = "none";
    openNav()
});

closeButton.addEventListener("click", () => {
    hamburger.style.display = "block";
    closeNav()
})