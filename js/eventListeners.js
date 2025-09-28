//calling element obj from elements.js file

const { hamburger, closeButton } = elementObj();

//adding an event listener to the hamburger icon
hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  openNav();
});

//adding event listener to the close button
closeButton.addEventListener("click", () => {
  closeNav();
});

window.addEventListener("load", function () {
  const modal = document.getElementById("rebrandModal");
  const closeBtn = document.getElementById("closeModal");

  // Show modal on load
  modal.classList.add("show");

  // Close modal on button click
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
  });

  // Optional: close when clicking outside modal content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});
