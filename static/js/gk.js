const gkQuestions = [
  {
    id: 1,
    question: `According to the Beer-Lambert Law, if the concentration of an absorbing species in a solution is doubled and the path length of the light is halved, what happens to the total absorbance ($A$)?`,
    image: null,
    options: [
      `It increases by a factor of four.`,
      `It is halved.`,
      `It remains unchanged.`,
      `It doubles.`
    ],
    correct: 2
  },
  {
    id: 2,
    question: `In a medium characterized by a complex refractive index $\\tilde{n}=n+ik$, what physical manifestation is directly governed by the imaginary part $k$ (the extinction coefficient)?`,
    image: null,
    options: [
      `The phase velocity of the propagating wave.`,
      `The exponential attenuation of the wave amplitude.`,
      `The angle of refraction at the interface.`,
      `The total polarization rotation.`
    ],
    correct: 1
  },
  {
    id: 3,
    question: `Under the classical Lorentz oscillator model, anomalous dispersion typically occurs in which region of the electromagnetic spectrum?`,
    image: null,
    options: [
      `In transparent regions far from any resonant frequencies.`,
      `Exclusively at static/zero frequency.`,
      `In close proximity to a resonant absorption frequency.`,
      `Throughout the entire vacuum spectrum.`
    ],
    correct: 2
  },
  {
    id: 4,
    question: `The Kramers-Kronig relations connect the real and imaginary parts of the complex refractive index. What fundamental physical principle guarantees the validity of these integral relationships?`,
    image: null,
    options: [
      `Conservation of angular momentum.`,
      `The principle of causality.`,
      `Gauge invariance.`,
      `The uniqueness theorem of electrostatics.`
    ],
    correct: 1
  },
  {
    id: 5,
    question: `For a particle whose diameter is significantly smaller than the wavelength of the incident light, classical Rayleigh scattering dictates that the intensity of scattered light ($I$) scales with the frequency ($\\omega$) as:`,
    image: null,
    options: [
      `$I \\propto \\omega$`,
      `$I \\propto \\omega^{2}$`,
      `$I \\propto \\omega^{4}$`,
      `$I \\propto \\omega^{-4}$`
    ],
    correct: 2
  },
  {
    id: 6,
    question: `A uniform plane electromagnetic wave propagates in a general direction specified by the wave vector $k = k_x\\hat{x} + k_y\\hat{y} + k_z\\hat{z}$ through a lossless isotropic medium. Which of the following conditions must the electric field vector $E_0$ satisfy?`,
    image: null,
    options: [
      `$k \\cdot E_0 = 0$`,
      `$k \\times E_0 = 0$`,
      `$k \\cdot E_0 = \\omega\\mu\\epsilon$`,
      `$k \\times E_0 = k \\| E_0$`
    ],
    correct: 0
  },
  {
    id: 7,
    question: `An electromagnetic wave with a frequency $\\omega$ attempts to propagate through a dilute, unmagnetised cold plasma with a characteristic plasma frequency $\\omega_p$. If $\\omega < \\omega_p$, what is the nature of the wave propagation?`,
    image: null,
    options: [
      `The wave propagates without attenuation with a phase velocity less than the speed of light ($c$).`,
      `The wave propagates normally, but its group velocity exceeds $c$.`,
      `The propagation constant becomes purely imaginary, leading to exponential attenuation (evanescence).`,
      `The wave undergoes continuous frequency upconversion.`
    ],
    correct: 2
  },
  {
    id: 8,
    question: `In the orbit theory of plasma physics, a guiding centre drift arises when a charged particle moves through an inhomogeneous magnetic field. If a spatial gradient exists perpendicular to the magnetic field ($\\nabla_{\\perp} B$), the resulting $\\nabla B$ drift velocity is proportional to which of the following?`,
    image: null,
    options: [
      `Inversely proportional to the particle's perpendicular kinetic energy ($v_{\\perp}^2$).`,
      `Directly proportional to the charge sign ($q$), meaning ions and electrons drift in the same direction.`,
      `Inversely proportional to the charge sign ($q$), meaning ions and electrons drift in opposite directions.`,
      `Independent of the magnetic field magnitude $B$.`
    ],
    correct: 2
  },
  {
    id: 9,
    question: `The pinch effect in a cylindrical plasma column is a phenomenon where a large axial current ($I_z$) causes the plasma to contract radially. This self-constriction is primarily driven by:`,
    image: null,
    options: [
      `The electrostatic attraction between electrons and ions.`,
      `The azimuthal magnetic field ($B_{\\theta}$) creating an inward $J \\times B$ Lorentz force.`,
      `External mechanical pressure applied by the vacuum chamber walls.`,
      `Centrifugal forces arising from high-speed plasma rotation.`
    ],
    correct: 1
  },
  {
    id: 10,
    question: `A localized radial constriction (necking) in a pinched plasma column tends to grow over time, leading to a disruption of the column. This macro-instability ($m=0$) is widely known as the:`,
    image: null,
    options: [
      `Kink instability`,
      `Sausage instability`,
      `Rayleigh-Taylor instability`,
      `Two-stream instability`
    ],
    correct: 1
  },
  {
    id: 11,
    question: `When solving the inhomogeneous wave equations for the electromagnetic potentials in the Lorenz gauge, the solution is uniquely given by the retarded potentials. The time argument in the source densities is evaluated at the retarded time $t_{ret} = t - R/c$. This specific formulation is mathematically a direct result of selecting which type of Green's function?`,
    image: null,
    options: [
      `An advanced Green's function that violates causality.`,
      `A causal Green's function that vanishes for $t < t_{ret}$.`,
      `A static Green's function belonging to the Laplace equation.`,
      `A homogeneous boundary Green's function satisfying $\\nabla^2 G = 0$.`
    ],
    correct: 1
  },
  {
    id: 12,
    question: `In the Liénard-Wiechert potentials for a moving point charge $q$, what is the physical origin of the correction factor $(1 - \\beta \\cdot \\hat{n})^{-1}$ in the scalar potential?`,
    image: null,
    options: [
      `It corrects for the change in the total intrinsic net charge of the particle due to length contraction.`,
      `It compensates for the Doppler-like stretching or crowding of the charge's effective volume during signal emission.`,
      `It accounts for the non-linear self-interaction of the electromagnetic field in a vacuum.`,
      `It is an artifact of the Coulomb gauge that vanishes in the Lorenz gauge.`
    ],
    correct: 1
  },
  {
    id: 13,
    question: `When evaluating the total electric field of a point charge using the Liénard-Wiechert formulation, the field naturally splits into two distinct terms: $E = E_{velocity} + E_{acceleration}$. Which of the following statements correctly distinguishes their long-range behaviors?`,
    image: null,
    options: [
      `$E_{velocity} \\propto R^{-1}$ and $E_{acceleration} \\propto R^{-2}$ meaning only velocity fields radiate energy to infinity.`,
      `Both fields scale as $R^{-2}$ and carry a finite amount of electromagnetic radiation.`,
      `$E_{velocity} \\propto R^{-2}$ (generalized Coulomb field) and $E_{acceleration} \\propto R^{-1}$ (radiation field), meaning only the acceleration field transmits power across an infinitely large sphere.`,
      `$E_{velocity}$ vanishes identically if the charge moves at relativistic speeds.`
    ],
    correct: 2
  },
  {
    id: 14,
    question: `A highly relativistic charged particle ($\\gamma \\gg 1$) is accelerated. Compare the total power radiated via the relativistic Larmor generalization when the acceleration is linear ($a \\parallel v$) versus when it is circular ($a \\perp v$) for the same magnitude of force applied ($|F|$).`,
    image: null,
    options: [
      `Linear acceleration radiates a factor of $\\gamma^2$ more power than circular acceleration.`,
      `Circular acceleration radiates a factor of $\\gamma^2$ more power than linear acceleration.`,
      `Both configurations radiate the exact same total power since it depends only on $a^2$.`,
      `Linear acceleration produces zero radiation at relativistic limits.`
    ],
    correct: 1
  },
  {
    id: 15,
    question: `For a charge undergoing non-relativistic linear acceleration ($\\beta \\ll 1$), the angular distribution of radiated power follows a typical $\\sin^2\\theta$ dipole pattern. As the particle's velocity becomes highly relativistic ($\\beta \\to 1$), how does this angular distribution change?`,
    image: null,
    options: [
      `The distribution remains perfectly symmetric but shifts its maximum to $\\theta = 0^{\\circ}$.`,
      `The radiation lobes tilt sharply forward, concentrating into a narrow cone (forward "beaming") around the direction of velocity.`,
      `The radiation shifts entirely to the backward hemisphere ($\\theta = 180^{\\circ}$).`,
      `The angular distribution becomes fully isotropic, distributing power evenly in all directions.`
    ],
    correct: 1
  },
  {
    id: 16,
    question: `In transmission line theory, the primary line parameters ($R, L, G, C$) describe the physical properties per unit length. Which of the following parameters specifies the power loss due to leakage currents through the imperfect dielectric insulation?`,
    image: null,
    options: [
      `Series Resistance ($R$)`,
      `Shunt Conductance ($G$)`,
      `Series Inductance ($L$)`,
      `Shunt Capacitance ($C$)`
    ],
    correct: 1
  },
  {
    id: 17,
    question: `A transmission line is defined as strictly lossless when its attenuation constant ($\\alpha$) is exactly zero. Which mathematical condition must the primary parameters satisfy for a line to be considered ideally lossless?`,
    image: null,
    options: [
      `$R = G = \\infty$`,
      `$RG = LC$`,
      `$R/L = G/C$`,
      `$R = \\omega L$ and $G = \\omega C$`
    ],
    correct: 1
  },
  {
    id: 18,
    question: `Which of the following statements is true regarding the characteristic impedance ($Z_0$) of both an ideal lossless line and a distortionless line?`,
    image: null,
    options: [
      `$Z_0$ is purely imaginary for both lines.`,
      `$Z_0$ is complex and heavily frequency-dependent for both lines.`,
      `$Z_0$ is purely real (resistive) and independent of frequency for both lines.`,
      `$Z_0$ is zero for a lossless line and infinite for a distortionless line.`
    ],
    correct: 2
  },
  {
    id: 19,
    question: `To achieve distortionless transmission over a lossy line, signals of all frequencies must travel at the same phase velocity and undergo the same attenuation. What is the precise condition relating the primary constants?`,
    image: null,
    options: [
      `$RG = LC$`,
      `$RC = LG$`,
      `$R/L = G/C$`,
      `$RL = GC$`
    ],
    correct: 2
  },
  {
    id: 20,
    question: `For a lossy line that satisfies the distortionless condition ($RC = LG$), how do the attenuation constant ($\\alpha$) and phase constant ($\\beta$) behave as functions of angular frequency ($\\omega$)?`,
    image: null,
    options: [
      `$\\alpha$ is independent of $\\omega$; $\\beta$ is linearly proportional to $\\omega$.`,
      `$\\alpha$ is linearly proportional to $\\omega$; $\\beta$ is independent of $\\omega$.`,
      `Both $\\alpha$ and $\\beta$ are independent of $\\omega$.`,
      `Both $\\alpha$ and $\\beta$ increase quadratically with $\\omega$.`
    ],
    correct: 0
  },
  {
    id: 21,
    question: `Hollow metallic waveguides act as high-pass filters because they cannot support wave propagation below a specific frequency. What happens to a Transverse Electric (TE) or Transverse Magnetic (TM) mode if the operating frequency $\\omega$ is strictly less than its cutoff frequency $\\omega_c$?`,
    image: null,
    options: [
      `The wave phase velocity drops to zero, keeping the wave perfectly stationary.`,
      `The propagation constant becomes purely imaginary, turning the wave into an exponentially decaying evanescent mode.`,
      `The wave automatically converts into a Transverse Electromagnetic (TEM) mode.`,
      `The wave's power increases exponentially due to dielectric breakdown.`
    ],
    correct: 1
  },
  {
    id: 22,
    question: `Why is a hollow, single-conductor metallic waveguide completely incapable of supporting a Transverse Electromagnetic (TEM) mode?`,
    image: null,
    options: [
      `A single closed conductor cannot maintain an electrostatic potential difference to satisfy Gauss's Law for a transverse electric field in the empty space inside.`,
      `TEM modes can only exist when the walls of the waveguide are made of perfect magnetic conductors.`,
      `The cutoff frequency for a TEM mode in a hollow pipe is mathematically infinite.`,
      `The magnetic field would have to be entirely parallel to the direction of wave propagation.`
    ],
    correct: 0
  },
  {
    id: 23,
    question: `For an air-filled rectangular metallic waveguide with internal dimensions $a \\times b$ where $a > b$, which mode serves as the dominant mode (the mode with the lowest cutoff frequency)?`,
    image: null,
    options: [
      `$TM_{11}$`,
      `$TE_{01}$`,
      `$TE_{10}$`,
      `$TM_{10}$`
    ],
    correct: 2
  },
  {
    id: 24,
    question: `In an air-filled circular waveguide of radius $a$, which mode is the dominant mode?`,
    image: null,
    options: [
      `$TE_{01}$`,
      `$TM_{01}$`,
      `$TE_{11}$`,
      `$TM_{11}$`
    ],
    correct: 2
  },
  {
    id: 25,
    question: `How does the wave impedance of a Transverse Electric mode ($Z_{TE}$) in a hollow guide compare to the intrinsic impedance ($\\eta$) of the open medium filling the guide?`,
    image: null,
    options: [
      `$Z_{TE} = \\eta \\sqrt{1 - (f_c/f)^2}$`,
      `$Z_{TE} = \\frac{\\eta}{\\sqrt{1 - (f_c/f)^2}}$`,
      `$Z_{TE} = \\eta$`,
      `$Z_{TE} = -j\\eta(f_c/f)$`
    ],
    correct: 1
  }
];


































// gk.js - General Knowledge Quiz Logic

document.addEventListener('DOMContentLoaded', function() {

    // Quiz state variables
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let quizTimer;
    let questionTimer;
    let quizStartTime;
    let quizCompleted = false;
    let autoAdvanceInterval;
    let advanceProgressInterval;

    // DOM elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionElement = document.getElementById('current-question');
    const scoreElement = document.getElementById('score');
    const totalTimeElement = document.getElementById('total-time');
    const timerElement = document.getElementById('timer');
    const feedbackElement = document.getElementById('feedback');
    const resultContainer = document.getElementById('result-container');
    const finalScoreElement = document.getElementById('final-score');
    const resultMessageElement = document.getElementById('result-message');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const timeTakenElement = document.getElementById('time-taken');
    const percentageElement = document.getElementById('percentage');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

    // Initialize the quiz
    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizCompleted = false;
        quizStartTime = Date.now();
        
        // Hide result container
        resultContainer.style.display = 'none';
        
        // Show quiz elements
        document.querySelector('.question-container').style.display = 'block';
        document.querySelector('.timer-container').style.display = 'block';
        
        // Update UI
        updateScore();
        updateQuestionCounter();
        updateTotalTime();
        
        // Load first question
        loadQuestion(currentQuestionIndex);
        
        // Start quiz timer
        startQuizTimer();
    }

    // Load a question
    function loadQuestion(index) {
        if (index >= gkQuestions.length) {
            endQuiz();
            return;
        }
        
        const question = gkQuestions[index];
        
        // Update question text
        questionText.textContent = question.question;
        
        // Clear options container
        optionsContainer.innerHTML = '';
        
        // Create option elements
        const optionLetters = ['A', 'B', 'C', 'D'];
        
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = i;
            
            // Check if user has already answered this question
            if (userAnswers[index] !== undefined) {
                if (userAnswers[index] === i) {
                    optionElement.classList.add('selected');
                }
                if (i === question.correctAnswer) {
                    optionElement.classList.add('correct');
                } else if (userAnswers[index] === i && userAnswers[index] !== question.correctAnswer) {
                    optionElement.classList.add('incorrect');
                }
            }
            
            optionElement.innerHTML = `
                <div class="option-letter">${optionLetters[i]}</div>
                <div class="option-text">${option}</div>
            `;
            
            // Add click event if not already answered
            if (userAnswers[index] === undefined) {
                optionElement.addEventListener('click', () => selectOption(i));
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Update UI
        updateQuestionCounter();
        updateProgressBar(index + 1, gkQuestions.length);
        
        // Reset feedback
        feedbackElement.className = 'feedback';
        feedbackElement.textContent = '';
        
        // Start question timer
        startQuestionTimer();
    }

    // Select an option
    function selectOption(optionIndex) {
        // Prevent multiple selections
        if (userAnswers[currentQuestionIndex] !== undefined) return;
        
        // Mark the selected option
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected');
            option.style.pointerEvents = 'none'; // Disable further clicks
        });
        
        options[optionIndex].classList.add('selected');
        
        // Check answer
        const isCorrect = optionIndex === gkQuestions[currentQuestionIndex].correctAnswer;
        userAnswers[currentQuestionIndex] = optionIndex;
        
        if (isCorrect) {
            score++;
            updateScore();
            showFeedback(true);
            
            // Highlight correct answer
            options[gkQuestions[currentQuestionIndex].correctAnswer].classList.add('correct');
        } else {
            showFeedback(false, gkQuestions[currentQuestionIndex].options[gkQuestions[currentQuestionIndex].correctAnswer]);
            
            // Highlight correct and incorrect answers
            options[gkQuestions[currentQuestionIndex].correctAnswer].classList.add('correct');
            options[optionIndex].classList.add('incorrect');
        }
        
        // Stop question timer
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        // Auto advance to next question after 2 seconds
        startAutoAdvance(2000); // 2 seconds
    }

    // Auto advance to next question
    function startAutoAdvance(duration) {
        // Create or show auto-advance progress bar
        let progressBar = document.querySelector('.auto-advance-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'auto-advance-progress';
            progressBar.innerHTML = '<div class="advance-progress"></div>';
            feedbackElement.parentNode.insertBefore(progressBar, feedbackElement.nextSibling);
        }
        
        const progressFill = progressBar.querySelector('.advance-progress');
        progressBar.classList.add('active');
        progressFill.style.width = '0%';
        
        // Clear any existing intervals
        if (autoAdvanceInterval) clearTimeout(autoAdvanceInterval);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        
        // Start progress bar animation
        let progress = 0;
        const increment = 100 / (duration / 50); // Update every 50ms
        
        advanceProgressInterval = setInterval(() => {
            progress += increment;
            progressFill.style.width = `${Math.min(progress, 100)}%`;
        }, 50);
        
        // Auto advance after duration
        autoAdvanceInterval = setTimeout(() => {
            progressBar.classList.remove('active');
            clearInterval(advanceProgressInterval);
            goToNextQuestion();
        }, duration);
    }

    // Go to next question
    function goToNextQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < gkQuestions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    }

    // Start question timer (30 seconds)
    function startQuestionTimer() {
        // Stop previous timer if exists
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        questionTimer = initTimer(30, onTimeUp);
        if (questionTimer) {
            questionTimer.startTimer();
        }
    }

    // Handle time up for a question
    function onTimeUp() {
        // Disable all options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Mark the correct answer
        const correctIndex = gkQuestions[currentQuestionIndex].correctAnswer;
        options[correctIndex].classList.add('correct');
        
        // Show feedback
        showFeedback(false, gkQuestions[currentQuestionIndex].options[correctIndex]);
        
        // Auto advance to next question after 2 seconds
        startAutoAdvance(2000);
    }

    // Show feedback
    function showFeedback(isCorrect, correctAnswer = null) {
        // Update feedback message
        if (isCorrect) {
            feedbackElement.textContent = "Correct! 🎉";
            feedbackElement.className = 'feedback correct show';
            playSound('correct');
            createConfetti();
        } else {
            feedbackElement.textContent = correctAnswer ? 
                `Incorrect. Correct answer: ${correctAnswer}` : 
                "Time's up!";
            feedbackElement.className = 'feedback incorrect show';
            playSound('incorrect');
        }
    }

    // Start quiz timer (5 minutes total)
    function startQuizTimer() {
        let totalSeconds =1500; // 5 minutes
        
        const updateTimerDisplay = () => {
            totalTimeElement.textContent = formatTime(totalSeconds);
        };
        
        updateTimerDisplay();
        
        const timerInterval = setInterval(() => {
            if (quizCompleted) {
                clearInterval(timerInterval);
                return;
            }
            
            totalSeconds--;
            updateTimerDisplay();
            
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }

    // Update question counter
    function updateQuestionCounter() {
        currentQuestionElement.textContent = `${currentQuestionIndex + 1}/${gkQuestions.length}`;
    }

    // Update score display
    function updateScore() {
        scoreElement.textContent = score;
    }

    // Update total time display
    function updateTotalTime() {
        totalTimeElement.textContent = "05:00";
    }

    // Update progress bar
    function updateProgressBar(current, total) {
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    }

    // End the quiz
    function endQuiz() {
        quizCompleted = true;
        
        // Stop timers
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        // Stop auto-advance
        if (autoAdvanceInterval) clearTimeout(autoAdvanceInterval);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        
        // Calculate quiz duration
        const quizDuration = Math.floor((Date.now() - quizStartTime) / 1000);
        
        // Calculate results
        const correctCount = score;
        const incorrectCount = gkQuestions.length - score;
        const percentage = Math.round((score / gkQuestions.length) * 100);
        
        // Update result display
        finalScoreElement.textContent = `${score}/${gkQuestions.length}`;
        correctCountElement.textContent = correctCount;
        incorrectCountElement.textContent = incorrectCount;
        timeTakenElement.textContent = formatTime(quizDuration);
        percentageElement.textContent = `${percentage}%`;
        
        // Set result message based on performance
        let message = "";
        if (percentage >= 90) {
            message = "Outstanding! You're a General Knowledge genius! 🎉";
        } else if (percentage >= 70) {
            message = "Excellent work! You have great knowledge! 👍";
        } else if (percentage >= 50) {
            message = "Good job! You know quite a bit! 👏";
        } else {
            message = "Keep learning! You'll do better next time! 💪";
        }
        resultMessageElement.textContent = message;
        
        // Show result container with animation
        document.querySelector('.question-container').style.display = 'none';
        document.querySelector('.timer-container').style.display = 'none';
        resultContainer.style.display = 'block';
        
        // Create confetti for good scores
        if (percentage >= 70) {
            createConfetti();
        }
    }

    // Event Listeners for result buttons
    restartBtn.addEventListener('click', function() {
        initQuiz();
    });

    homeBtn.addEventListener('click', function() {
        window.location.href = "index.html";
    });

    // Initialize the quiz when page loads
    initQuiz();

});
