const weapons = document.querySelectorAll(".weapon");

weapons.forEach((weapon) => {
  weapon.addEventListener("click", () => {
    // Remove active class from any other weapon
    weapons.forEach((w) => w.classList.remove("active"));

    // Add active class to the clicked weapon
    weapon.classList.add("active");
  });
});
