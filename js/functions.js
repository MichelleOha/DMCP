//adds a width to the side nav menu and opens it
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
 
// this removes the width and shows the hamburger (displays the hamburger menu again)
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  hamburger.style.display = "block";
}