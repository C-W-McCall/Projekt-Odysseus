function scrollToElement(event, id) {
    event.preventDefault(); // Stopper den normale click opførsel, hvor elementet bliver placeret i toppen af browserens window
    const element = document.getElementById(id); // Find elementet selvf.
    if (element) {  // Hvis elementet bliver fundet (altså hvis element = true)
        const elementRect = element.getBoundingClientRect();  // En metode som returnere størrelsen af et element, relativ til browserens window
        const elementCenter = elementRect.top + window.scrollY - (window.innerHeight / 2) + (elementRect.height / 2); // vertikal distance fra toppen af elementets kant til vinduets top kant + nuværende vertikale scroll position af siden - halvdelen af vinduets højde + halvdelen af højden af elementet
        window.scrollTo({
            top: elementCenter   // top beregner hvor man skal scrolle til på siden i px, fra (0, 0) altså top venstre side af siden. Man kan også bruge 'left' til at beregen den horisontale længde man skal scrolle til.
        });
    }
}