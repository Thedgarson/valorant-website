/* Function to adjust styles for mobile */
function adjustForMobile() {
  if (window.innerWidth < 768) {
    // Remove AOS from Tips and Strategies section
    const tipsTextElements = document.querySelectorAll(".left-texts .tip, .right-texts .tip, .text-center .tip");
    tipsTextElements.forEach((element) => {
      element.removeAttribute("data-aos");
    });

    // Remove AOS from Rating section
    const ratingTextElements = document.querySelectorAll(".rating-section .col-md-4");
    ratingTextElements.forEach((element) => {
      element.removeAttribute("data-aos");
    });

    // Remove AOS from the Maps button
    const mapsButton = document.querySelector(".maps-button");
    if (mapsButton) {
      mapsButton.removeAttribute("data-aos");
    }

    // Resize centered text in video section
    const centeredText = document.querySelector(".centered-text h1");
    const centeredTextSub = document.querySelector(".centered-text h2");
    if (centeredText) {
      centeredText.style.fontSize = "2.5vw"; // Adjust size for mobile
    }
    if (centeredTextSub) {
      centeredTextSub.style.fontSize = "1.5vw"; // Adjust size for mobile
    }

    // Resize centered text in maps section
    const mapsCenteredText = document.querySelector(".maps-centered-text h1");
    const mapsCenteredTextSub = document.querySelector(".maps-centered-text h2");
    if (mapsCenteredText) {
      mapsCenteredText.style.fontSize = "2.5vw"; // Adjust size for mobile
    }
    if (mapsCenteredTextSub) {
      mapsCenteredTextSub.style.fontSize = "1.5vw"; // Adjust size for mobile
    }

    // Adjust text sizes in About section
    const aboutText = document.querySelector(".about-section .section-text");
    if (aboutText) {
      aboutText.style.fontSize = "0.9rem"; // Smaller font size
    }

    // Adjust images in About section
    const aboutImages = document.querySelectorAll(".about-image img");
    aboutImages.forEach((img) => {
      img.style.width = "80%"; // Smaller width for images
    });

    // Adjust text sizes in Agents section
    const agentsText = document.querySelector(".agents-section .section-text2");
    if (agentsText) {
      agentsText.style.fontSize = "0.9rem"; // Smaller font size
    }

    // Adjust images in Agents section
    const agentsImages = document.querySelectorAll(".about-image2 img");
    agentsImages.forEach((img) => {
      img.style.width = "80%"; // Smaller width for images
    });

    // Adjust text sizes in Weapons section
    const weaponsText = document.querySelector(".weapons-section .section-text");
    if (weaponsText) {
      weaponsText.style.fontSize = "0.9rem"; // Smaller font size
    }

    // Adjust images in Weapons section
    const weaponsImages = document.querySelectorAll(".about-image3 img");
    weaponsImages.forEach((img) => {
      img.style.width = "80%"; // Smaller width for images
    });
  }
}

// Event listeners for window load and resize
window.addEventListener("load", adjustForMobile);
window.addEventListener("resize", adjustForMobile);
