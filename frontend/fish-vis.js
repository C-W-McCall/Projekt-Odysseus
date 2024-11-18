// Liste over spørgsmål, svar og korrekt svar
const questions = [
    { 
        question: "Hvad er mikroplastik?", 
        options: ["Store stykker plastik, der flyder på havoverfladen", "Små plaststykker mindre end 5 mm", "En type plastik, der kun findes i ferskvand"], 
        answer: 1,
        wrongExplanation: "Mikroplastik er små plaststykker, der er mindre end 5 mm i størrelse."
    },
    { 
        question: "Hvordan dannes mikroplastik i havet?", 
        options: ["Gennem sollys og vind, der nedbryder større plaststykker", "Ved naturlig nedbrydning af plast i planter", "Gennem rensningsanlæg, der genbruger plast"], 
        answer: 0,
        wrongExplanation: "Mikroplastik dannes, når sollys og vind nedbryder større plaststykker til mindre partikler."
    },
    { 
        question: "Hvilken sektor står for den største udledning af mikroplastik?", 
        options: ["Byggeriet", "Transport og bilindustrien", "Tøj- og tekstilindustrien"], 
        answer: 2,
        wrongExplanation: "Tøj- og tekstilindustrien står for den største udledning af mikroplastik, især fra syntetiske fibre."
    },
    { 
        question: "Hvorfor er mikroplastik farligt for havdyr?", 
        options: ["De kan blive kvalt af større plastdele", "Mikroplastik kan ophobes i deres kroppe og forgifte dem", "Det gør dem immune over for sygdomme"], 
        answer: 1,
        wrongExplanation: "Mikroplastik kan ophobes i havdyrenes kroppe og forårsage forgiftning."
    },
    { 
        question: "Hvor findes mikroplastik oftest i havene?", 
        options: ["Kun tæt på kysterne", "Fordelt i hele vandmassen og på bunden", "Kun i de dybeste dele af havet"], 
        answer: 1,
        wrongExplanation: "Mikroplastik findes fordelt i hele vandmassen og på havbunden."
    },
    { 
        question: "Hvordan påvirker mikroplastik mennesker?", 
        options: ["Det påvirker ikke mennesker", "Det kan komme ind i fødekæden via fisk og skaldyr", "Det kan ses som små pletter i drikkevand"], 
        answer: 1,
        wrongExplanation: "Mikroplastik kan komme ind i fødekæden gennem fisk og skaldyr, som mennesker kan spise."
    },
    { 
        question: "Hvordan kommer mikroplastik fra tekstiler ud i havene?", 
        options: ["Gennem affald, der flyder fra fabrikker", "Via vask af tøj, hvor små fibre skylles ud i vandet", "Kun gennem regnvand fra marker"], 
        answer: 1,
        wrongExplanation: "Mikroplastik fra tekstiler slipper ud gennem vask af tøj, hvor små fibre skylles ud."
    },
    { 
        question: "Hvor længe kan mikroplastik forblive i havet?", 
        options: ["5-10 år", "20-50 år", "Over 100 år"], 
        answer: 2,
        wrongExplanation: "Mikroplastik kan forblive i havet i mange år, nogle gange over 100 år, da det ikke nedbrydes hurtigt."
    },
    { 
        question: "Hvilket af følgende materialer er en stor kilde til mikroplastik?", 
        options: ["Glas", "Gummi fra bildæk", "Papir"], 
        answer: 1,
        wrongExplanation: "Gummi fra bildæk er en stor kilde til mikroplastik, da det nedbrydes og frigiver små partikler."
    },
    { 
        question: "Hvad kan man gøre for at reducere mængden af mikroplastik i havene?", 
        options: ["Kun bruge plastikposer én gang", "Vaske tøj mindre og undgå plastprodukter", "Undgå genbrug af plastaffald"], 
        answer: 1,
        wrongExplanation: "At vaske tøj mindre og undgå plastprodukter hjælper med at reducere mikroplastikudledningen."
    }
];

// Variabler til at holde styr på den aktuelle spørgesmål og score
let currentQuestion = 0;
let score = 0;

// Funktion til at indlæse det aktuelle spørgsmål og svarmuligheder
function loadQuestion() {
    // Viser spørgsmålets nummer
    document.getElementById("question-number").innerText =  `${currentQuestion + 1} af ${questions.length}`;
    
    // Viser spørgsmålstekst
    document.getElementById("question").innerText = questions[currentQuestion].question;
    
    // Fjerner gamle svarmuligheder og tilføjer de nye
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option";
        
        // Tilføjer klik-håndtering for hvert svar
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

// Funktion til at starte quizzen
function startQuiz() {
    document.getElementById("Quizzen").style.display = "none";  // Skjul velkomsthilsen
    document.getElementById("startBtn").style.display = "none";  // Skjul start-knap
    document.getElementById("quiz-container").style.display = "block";  // Vis quiz-container
    
    loadQuestion();  // Indlæs første spørgsmål
}

// Funktion til at kontrollere svaret
function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");
    const wrongAnswerBox = document.getElementById("wrongAnswerBox");
    const wrongAnswerExplanation = document.getElementById("wrongAnswerExplanation");
    const nextButtonContainer = document.getElementById("nextButtonContainer");
    const optionsContainer = document.getElementById("options");

    // Hvis svaret er korrekt
    if (selectedIndex === correctIndex) {
        feedback.innerText = "Korrekt!";
        feedback.style.color = "green";
        score++;

        // Deaktiver alle knapper, når korrekt svar er valgt
        const allButtons = optionsContainer.getElementsByTagName("button");
        for (let button of allButtons) {
            button.disabled = true;
        }

        // Vis knappen til at gå videre til næste spørgsmål
        nextButtonContainer.style.display = "block";
        
        // Skjul forklaringsboksen
        wrongAnswerBox.style.display = "none";
    } else {
        // Hvis svaret er forkert, vis en forklaring
        feedback.innerText = "Forkert svar!";
        feedback.style.color = "red";
        wrongAnswerExplanation.innerText = questions[currentQuestion].wrongExplanation; // Vis forklaringen
        wrongAnswerBox.style.display = "block"; // Vis forklaringsboksen

        // Skjul knappen til at gå videre til næste spørgsmål
        nextButtonContainer.style.display = "none";
    }

    // Opdaterer scoren
    document.getElementById("score").innerText = `Score: ${score} / ${questions.length}`;
}


// Funktion til at gå videre til næste spørgsmål
function nextQuestion() {
    const nextButtonContainer = document.getElementById("nextButtonContainer");
    nextButtonContainer.style.display = "none";  // Skjul knappen efter klik

    // Ryd feedback og forklaringsboks
    const feedback = document.getElementById("feedback");
    feedback.innerText = "";
    const wrongAnswerBox = document.getElementById("wrongAnswerBox");
    wrongAnswerBox.style.display = "none";

    // Hvis der er flere spørgsmål, vis næste spørgsmål
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        // Hvis quizzen er slut, vis resultat og knap til at tage quizzen igen
        feedback.innerText = `Quizzen er slut! Din endelige score er ${score} ud af ${questions.length}.`;
        feedback.style.color = "blue";
        
        const restartButtonContainer = document.getElementById("restartButtonContainer");
        restartButtonContainer.style.display = "block"; // Vis knappen til at tage quizzen igen
    }
}

// Funktion til at nulstille quizzen
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").innerText = "";
    document.getElementById("feedback").innerText = "";
    
    // Skjul forklaringsboks og næste-knap
    const wrongAnswerBox = document.getElementById("wrongAnswerBox");
    wrongAnswerBox.style.display = "none";
    const nextButtonContainer = document.getElementById("nextButtonContainer");
    nextButtonContainer.style.display = "none";

    // Skjul knappen for at tage quizzen igen
    const restartButtonContainer = document.getElementById("restartButtonContainer");
    restartButtonContainer.style.display = "none";

    // Start quizzen fra begyndelsen
    loadQuestion();
}
