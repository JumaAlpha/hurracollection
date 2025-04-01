document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const fadeTextElement = document.getElementById("fadeText");
    const typingTextElement = document.getElementById("typingText");

    if (!fadeTextElement || !typingTextElement) {
        console.error("Fehler: Elemente nicht gefunden! Überprüfen Sie Ihre HTML-IDs.");
        return;
    }

    // Text collections
    const fadeTexts = ["Kleidung?", "Schuhe?", "Accessoires?", "Trendige Mode?"];
    const typingTexts = ["Wir sind Kleidung.", "Wir haben Schuhe.", "Wir verkaufen Accessoires.", "Wir bringen Trends."];

    let fadeIndex = 0;
    let typingIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100;
    let eraseSpeed = 50;
    let pauseTime = 2000;

    function startAnimation() {
        fadeTextElement.style.opacity = 0;

        setTimeout(() => {
            fadeIndex = typingIndex; 
            fadeTextElement.textContent = fadeTexts[fadeIndex];
            fadeTextElement.style.opacity = 1;

            // Start typing animation after fade-in
            setTimeout(typeAnimation, 500);
        }, 1000);
    }

    function typeAnimation() {
        if (charIndex < typingTexts[typingIndex].length) {
            typingTextElement.textContent += typingTexts[typingIndex][charIndex];
            charIndex++;
            setTimeout(typeAnimation, typingSpeed);
        } else {
            setTimeout(eraseAnimation, pauseTime);
        }
    }

    function eraseAnimation() {
        if (charIndex > 0) {
            typingTextElement.textContent = typingTexts[typingIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseAnimation, eraseSpeed);
        } else {
            // Move to the next text
            typingIndex = (typingIndex + 1) % typingTexts.length;
            startAnimation(); // Restart with the next text
        }
    }

    // Start the whole animation cycle
    startAnimation();
});
