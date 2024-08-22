const slides = [
  {
    id: 1,
    image: "images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    image: "images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    image: "images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let indexImg = 1;
let imgBox = document.getElementById("img-box");
let txtBox = document.getElementById("text-box");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slideTitle = document.getElementById("header-primary");
let slideDesc = document.getElementById("text-box-description");

// Initial rendering of the images
function renderImages() {
  let existingImg = imgBox.querySelector(".header-img");
  let existingTitle = txtBox.querySelector(".header-primary");
  let existingText = txtBox.querySelector(".text-box-description");
  // If there's already an image, replace it; otherwise, create a new one
  if (existingImg) {
    existingImg.src = slides[indexImg - 1].image; // Update the source of the existing image
  } else {
    imgBox.insertAdjacentHTML(
      "afterbegin",
      `<img class="header-img" src=${slides[indexImg - 1].image} />`
    );
  }

  if (existingText) {
    existingText.innerHTML = slides[indexImg - 1].description;
  } else {
    txtBox.insertAdjacentHTML(
      "afterbegin",
      `<p class="text-box-description" id="text-box-description">${
        slides[indexImg - 1].description
      }</p>`
    );
  }

  if (existingTitle) {
    existingTitle.innerHTML = slides[indexImg - 1].title;
  } else {
    txtBox.insertAdjacentHTML(
      "afterbegin",
      `<h1 class="header-primary" id="header-primary">${
        slides[indexImg - 1].title
      }</h1>`
    );
  }
}

renderImages(); // Render initially

prev.addEventListener("click", function () {
  indexImg -= 1; // Decrement the index
  if (indexImg < 1) {
    // Loop back to the last image if at the beginning
    indexImg = slides.length;
  }

  renderImages(); // Re-render the image box content
});

next.addEventListener("click", function () {
  indexImg += 1; // Increment the index
  if (indexImg > slides.length) {
    // Loop back to the first image if at the end
    indexImg = 1;
  }

  renderImages();
});
