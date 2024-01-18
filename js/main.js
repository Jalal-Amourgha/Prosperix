const toggleIcon = document.querySelector(".toggle-btn i");
let toggle = false;
const dropdownMenu = document.getElementById("dropdownMenu");

function navbar() {
  if (toggle) {
    toggleIcon.classList.add("fa-bars");
    toggleIcon.classList.remove("fa-x");
    toggle = !toggle;

    dropdownMenu.style.display = "none";
  } else {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-x");
    toggle = !toggle;

    dropdownMenu.style.display = "block";
  }
}

console.log(navbarElements);
