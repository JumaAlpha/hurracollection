document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const cards = Array.from(document.querySelectorAll(".card"));
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    const totalCards = cards.length;
    const cardsPerView = 3;

    function updateCarousel() {
        // Get the correct 3 cards
        const newCards = [];
        for (let i = 0; i < cardsPerView; i++) {
            let index = (currentIndex + i) % totalCards;
            newCards.push(cards[index].cloneNode(true));
        }

        // Clear the carousel
        carousel.innerHTML = "";

        // Append new cards and highlight middle one
        newCards.forEach((card, index) => {
            if (index === 1) card.classList.add("main-card");
            carousel.appendChild(card);
        });
    }

    // Next Button
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    });

    // Previous Button
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    });

    // Initialize carousel
    updateCarousel();
});
