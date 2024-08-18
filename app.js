// Get references to the elements
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navbarItems = document.querySelector("ul.navbar-items");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");

// Function to toggle menu visibility and icons
function toggleMenu() {
  navbarItems.classList.toggle("active");
  header.classList.toggle("active");

  if (navbarItems.classList.contains("active")) {
    hamburger.style.display = "none";
    close.style.display = "block";
    logo.classList.add("hidden"); // Hide logo when menu is active
  } else {
    hamburger.style.display = "block";
    close.style.display = "none";
    logo.classList.remove("hidden"); // Show logo when menu is inactive
  }
}

// Event listeners for both hamburger and close icons
hamburger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    hamburger.style.display = "none";
    close.style.display = "none";
    logo.classList.remove("hidden");
    if (navbarItems.classList.contains("active")) {
      navbarItems.classList.remove("active");
      header.classList.remove("active");
    }
  }
  if (window.innerWidth < 500) {
    hamburger.style.display = "block";
    close.style.display = "none";
    logo.classList.remove("hidden");
    if (navbarItems.classList.contains("active")) {
      navbarItems.classList.remove("active");
    }
    if (header.classList.contains("active")) {
      header.classList.remove("active");
    }
  }
});
