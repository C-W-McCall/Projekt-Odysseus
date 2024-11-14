//Liste over alle spørgsmålene, svarmulighederne og det rigtige svar
const questions = [
    { question: "Hvad er mikroplastik?", options: ["Store stykker plastik, der flyder på havoverfladen", "Små plaststykker mindre end 5 mm", "En type plastik, der kun findes i ferskvand"], answer: 1 },
    { question: "Hvordan dannes mikroplastik i havet?", options: ["Gennem sollys og vind, der nedbryder større plaststykker", "Ved naturlig nedbrydning af plast i planter", "Gennem rensningsanlæg, der genbruger plast"], answer: 0 },
    { question: "Hvilken sektor står for den største udledning af mikroplastik?", options: ["Byggeriet", "Transport og bilindustrien", "Tøj- og tekstilindustrien"], answer: 2 },
    { question: "Hvorfor er mikroplastik farligt for havdyr?", options: ["De kan blive kvalt af større plastdele", "Mikroplastik kan ophobes i deres kroppe og forgifte dem", "Det gør dem immune over for sygdomme"], answer: 1 },
    { question: "Hvor findes mikroplastik oftest i havene?", options: ["Kun tæt på kysterne", "Fordelt i hele vandmassen og på bunden", "Kun i de dybeste dele af havet"], answer: 1 },
    { question: "Hvordan påvirker mikroplastik mennesker?", options: ["Det påvirker ikke mennesker", "Det kan komme ind i fødekæden via fisk og skaldyr", "Det kan ses som små pletter i drikkevand"], answer: 1 },
    { question: "Hvordan kommer mikroplastik fra tekstiler ud i havene?", options: ["Gennem affald, der flyder fra fabrikker", "Via vask af tøj, hvor små fibre skylles ud i vandet", "Kun gennem regnvand fra marker"], answer: 1 },
    { question: "Hvor længe kan mikroplastik forblive i havet?", options: ["5-10 år", "20-50 år", "Over 100 år"], answer: 2 },
    { question: "Hvilket af følgende materialer er en stor kilde til mikroplastik?", options: ["Glas", "Gummi fra bildæk", "Papir"], answer: 1 },
    { question: "Hvad kan man gøre for at reducere mængden af mikroplastik i havene?", options: ["Kun bruge plastikposer én gang", "Vaske tøj mindre og undgå plastprodukter", "Undgå genbrug af plastaffald"], answer: 1 }
];
//Variabler der holder styr på det aktuelle spørgsmål og scoren
let currentQuestion = 0;
let score = 0;
//Function til at indlæste det nye spørgsmål
function loadQuestion() {
    //Viser det aktuelle spørgsmål
    document.getElementById("question").innerText = questions[currentQuestion].question;
    //Fjerne de gamle svarmuligheder og tilføjer de nye
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option";
        //Tilføjer en on.click for hvert svar der tjekker om det er korrekt
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}
//Function som tjekker om svaret er korrekt
function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");
//Hvis svaret er korrekt bliver det vist og scoren stiger
    if (selectedIndex === correctIndex) {
        feedback.innerText = "Korrekt!";
        feedback.style.color = "green";
        score++;
//Hvis svaret ikke er korrekt bliver det også vist
    } else {
        feedback.innerText = "Forkert svar.";
        feedback.style.color = "red";
    }
//Opdatere scoren
    document.getElementById("score").innerText = `Score: ${score} / ${questions.length}`;
}
//Function til at gå videre til de næste spørgsmål
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById("feedback").innerText = "";  // Ryd feedback til næste spørgsmål
        loadQuestion();
//Hvis quizzen er slut bliver din score vist og reset quizzen
    } else {
        document.getElementById("feedback").innerText = `Quizzen er slut! Din endelige score er ${score} ud af ${questions.length}.`;
        document.getElementById("feedback").style.color = "blue";
        resetQuiz();
    }
}
//Function til at nulstille quizzen
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").innerText = "";
    document.getElementById("feedback").innerText = "";
    loadQuestion();
}

// Start quizzen ved at loade første spørgsmål
loadQuestion();