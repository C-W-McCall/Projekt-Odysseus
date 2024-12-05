ScrollReveal().reveal(
    ".text-box-container, .visualisering-boks, .visuals, .buttns-viz, #chartContainer, .map-wrapper, #line-viz, .live-counter",
    {
        delay: 300, // Lavere forsinkelse for hurtigere respons
        duration: 800, // Glidende animation på 800ms
        easing: "ease-in-out", // Glat acceleration og deceleration
        interval: 300, // Kortere interval mellem elementer
        scale: 1.05, // Subtil skalering
        viewOffset: { top: 200, right: 0, bottom: 200, left: 0 }, // Starter tættere på viewporten
        reset: true // Elementer forsvinder og genanimeres, når de forlader viewporten
    }
);
