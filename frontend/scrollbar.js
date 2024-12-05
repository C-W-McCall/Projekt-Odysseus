ScrollReveal().reveal(
    ".text-box-container, .visualisering-boks, .visuals, .buttns-viz, #chartContainer, .map-wrapper, #line-viz, .live-counter",
    {
        delay: 700, // Lavere forsinkelse for hurtigere respons
        duration: 800, // Glidende animation på 800ms
        easing: "ease-in-out", // Glat acceleration og deceleration
        interval: 300, // Kortere interval mellem elementer
        scale: 1.7, // Subtil skalering
    }
);
