//calling elementobj from elements.js file

const {
    hamburger,
    closeButton,
  } = elementObj();

//adding an event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    openNav();
});

//adding event listener to the close button
closeButton.addEventListener("click", () => {
    closeNav();
})