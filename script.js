function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); 
updateClock(); 

function playSound(name) {
    const audio = document.getElementById(name);
    if (audio) {
      audio.currentTime = 0; // Restart the audio if it's already playing
      audio.play();
    } else {
      console.error(`Audio file for ${name} not found.`);
    }
  }
  // Get the toggle button and the body element
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode is already set in localStorage (so it persists across page reloads)
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save the user's preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.removeItem("darkMode");
    }
});

document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlides() {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");

      index = (index + 1) % slides.length;
      setTimeout(showSlides, 3000);
  }

  showSlides(); // Start the slideshow
});
