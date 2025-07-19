const carousel = document.querySelector(".carousel");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let scrollAmount = 0;
const scrollStep = 180; // image width + gap

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

