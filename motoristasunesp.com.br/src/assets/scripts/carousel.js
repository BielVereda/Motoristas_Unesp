const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const cards = document.querySelectorAll(".carousel-track .card");

let index = 0;

function updateCarousel() {
  const cardStyle = getComputedStyle(cards[0]);
  const gap =
    parseInt(cardStyle.marginRight) + parseInt(cardStyle.marginLeft) || 30;
  const cardWidth = cards[0].offsetWidth + gap;
  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Botão próximo (circular)
nextBtn.addEventListener("click", () => {
  index = (index + 1) % cards.length;
  updateCarousel();
});

// Botão anterior (circular)
prevBtn.addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
});

// Ajusta ao redimensionar
window.addEventListener("resize", updateCarousel);

// Inicializa a posição correta
updateCarousel();