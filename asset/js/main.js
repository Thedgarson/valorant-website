function videoUrl(yeji) {
  document.getElementById("slider").src = yeji;
}

const skillBoxes = document.querySelectorAll(".skill-box");

function videoUrl(url) {
  // Mengubah video yang sedang diputar
  const video = document.getElementById("slider");
  video.src = url;
  video.play();

  // Mengatur skill-box aktif
  skillBoxes.forEach((box) => box.classList.remove("active")); // Hapus aktif dari semua
  event.currentTarget.classList.add("active"); // Tambahkan aktif pada yang diklik
}
