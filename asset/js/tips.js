// Select all banner tips
const bannerTips = document.querySelectorAll(".banner-tip");
const banner = document.getElementById("banner");

// Add hover listeners to each tip
bannerTips.forEach((tip) => {
  const bgImage = tip.getAttribute("data-bg"); // Get the background image URL

  tip.addEventListener("mouseenter", () => {
    banner.style.backgroundImage = `url(${bgImage})`;
    banner.style.setProperty("--bg-image", `url(${bgImage})`); // Set hover image
  });

  tip.addEventListener("mouseleave", () => {
    banner.style.setProperty("--bg-image", `url('../images/default-banner-bg.jpg')`); // Reset to default
  });
});
