const gkQuestions = [
    {
        id: 1,
        question: `In the calculus of variations, the quantity whose extremum is sought is generally called`,
        image: null,
        options: [
            `A coordinate`,
            `A functional`,
            `A momentum`,
            `A transformation`
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        question: `A transformation from \\( (q, p) \\) to \\( (Q, P) \\) is canonical if it preserves`,
        image: null,
        options: [
            `The kinetic energy only`,
            `The potential energy only`,
            `The form of Hamilton's equations`,
            `The coordinates individually`
        ],
        correctAnswer: 2
    },
    {
        id: 3,
        question: `In the calculus of variations, a functional is a quantity that generally depends on:`,
        image: null,
        options: [
            `Only a number`,
            `A function and its derivatives`,
            `Only the independent variable`,
            `Only the dependent variable`
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: `If a dynamical variable \\( F(q,p,t) \\) has no explicit time dependence and satisfies \\( [F,H] = 0 \\), then F is`,
        image: null,
        options: [
            `A generalized coordinate`,
            `A constant of motion`,
            `A generating function`,
            `A canonical momentum only`
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        question: `A rigid body rotating freely about which principal axis is generally unstable?`,
        image: null,
        options: [
            `Axis corresponding to the maximum moment of inertia`,
            `Axis corresponding to the minimum moment of inertia`,
            `Intermediate principal axis`,
            `Any axis is equally unstable`
        ],
        correctAnswer: 2
    },
    {
        id: 6,
        question: `Under a canonical transformation, the Poisson bracket of two dynamical variables f and g:`,
        image: null,
        options: [
            `Always becomes zero`,
            `Changes its sign`,
            `Remains invariant`,
            `Becomes dependent only on time`
        ],
        correctAnswer: 2
    },
    {
        id: 7,
        question: `Liouville's theorem states that, for a Hamiltonian system, the phase-space volume occupied by an ensemble of systems`,
        image: null,
        options: [
            `Always increases with time`,
            `Always decreases with time`,
            `Remains invariant during Hamiltonian evolution`,
            `Becomes zero at equilibrium`
        ],
        correctAnswer: 2
    },
    {
        id: 8,
        question: `In the classical-to-quantum connection, the Hamilton-Jacobi equation provides an important basis for:`,
        image: null,
        options: [
            `Newton's law of gravitation`,
            `The semi classical/WKB approximation`,
            `Maxwell's equations`,
            `Thermodynamic equilibrium`
        ],
        correctAnswer: 1
    },
    {
        id: 9,
        question: `The Hamilton-Jacobi method is particularly significant because it`,
        image: null,
        options: [
            `eliminates the need for generalized coordinates`,
            `provides a connection between classical mechanics and quantum mechanics`,
            `is applicable only to free particles`,
            `eliminates conservation laws`
        ],
        correctAnswer: 1
    },
    {
        id: 10,
        question: `Action-angle variables are particularly useful for`,
        image: null,
        options: [
            `describing periodic and quasi-periodic Hamiltonian systems`,
            `eliminating angular momentum`,
            `solving only dissipative systems`,
            `describing only rigid-body translation`
        ],
        correctAnswer: 0
    },
    {
        id: 11,
        question: `Euler's theorem on the motion of a rigid body states that any finite displacement of a rigid body having one point fixed can be represented by`,
        image: null,
        options: [
            `A pure translation`,
            `A rotation about some axis passing through the fixed point`,
            `A change in mass`,
            `A change in angular momentum only`
        ],
        correctAnswer: 1
    },
    {
        id: 12,
        question: `For torque-free motion of a rigid body, Euler's equations are expressed in terms of`,
        image: null,
        options: [
            `Linear velocity components only`,
            `Centre-of-mass coordinates only`,
            `Potential energy only`,
            `Principal moments of inertia and angular velocity components`
        ],
        correctAnswer: 3
    },
    {
        id: 13,
        question: `According to Liouville's theorem, the phase-space density of an ensemble of systems:`,
        image: null,
        options: [
            `Always increases with time`,
            `Always decreases with time`,
            `Remains constant along the trajectory in phase space`,
            `Becomes zero at equilibrium`
        ],
        correctAnswer: 2
    },
    {
        id: 14,
        question: `In the motion of a heavy symmetric top with one point fixed, precession refers to`,
        image: null,
        options: [
            `Rotation of the top about its symmetry axis`,
            `Slow rotation of the symmetry axis about the vertical direction`,
            `Oscillation of the centre of mass only`,
            `Translation of the fixed point`
        ],
        correctAnswer: 1
    },
    {
        id: 15,
        question: `For a fast symmetric top, the condition for steady precession is primarily associated with:`,
        image: null,
        options: [
            `Very small angular momentum of spin`,
            `Large spin angular velocity`,
            `Zero gravitational torque`,
            `Zero moment of inertia`
        ],
        correctAnswer: 1
    },
    {
        id: 16,
        question: `For a rapidly spinning gyroscope, the angular velocity of precession is approximately inversely proportional to`,
        image: null,
        options: [
            `Its angular momentum`,
            `Its mass only`,
            `Its moment of inertia about the vertical axis only`,
            `Its kinetic energy only`
        ],
        correctAnswer: 0
    },
    {
        id: 17,
        question: `Larmor precession occurs when a charged particle or magnetic moment is subjected to:`,
        image: null,
        options: [
            `A uniform gravitational field`,
            `A uniform magnetic field`,
            `A uniform electric field`,
            `No external field`
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        question: `According to Noether's theorem, invariance of the Lagrangian under continuous time translation implies conservation of`,
        image: null,
        options: [
            `Linear momentum`,
            `Angular momentum`,
            `Energy`,
            `Action`
        ],
        correctAnswer: 2
    },
    {
        id: 19,
        question: `If the Hamilton–Jacobi equation is completely solved by a principal function \\( S(q, \\alpha, t) \\), the constants \\( \\alpha \\) are`,
        image: null,
        options: [
            `Arbitrary constants related to the initial conditions`,
            `Always equal to zero`,
            `The generalized velocities`,
            `The generalized coordinates`
        ],
        correctAnswer: 0
    },
    {
        id: 20,
        question: `For a freely rotating rigid body with no external torque, which quantity remains constant?`,
        image: null,
        options: [
            `Angular momentum in the space-fixed frame`,
            `Angular velocity in every frame`,
            `Each component of angular momentum in the body-fixed frame`,
            `Euler angles individually`
        ],
        correctAnswer: 0
    },
    {
        id: 21,
        question: `The phenomenon in which the axis of a spinning gyroscope slowly rotates about the direction of an applied torque is known as`,
        image: null,
        options: [
            `Nutation`,
            `Precession`,
            `Oscillation`,
            `Inversion`
        ],
        correctAnswer: 1
    },
    {
        id: 22,
        question: `Hamilton's principal function S is closely related to:`,
        image: null,
        options: [
            `The action integral`,
            `The potential energy only`,
            `The kinetic energy only`,
            `The angular momentum only`
        ],
        correctAnswer: 0
    },
    {
        id: 23,
        question: `For a time-independent Hamiltonian, Hamilton's principal function can generally be written as`,
        image: null,
        options: [
            `\\( S = W - Et \\)`,
            `\\( S = W + Et \\)`,
            `\\( S = Et \\) only`,
            `\\( S = W / t \\)`
        ],
        correctAnswer: 0
    }
];

















// ---------- Quiz Logic ----------
document.addEventListener('DOMContentLoaded', function () {

    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let questionTimer = null;
    let quizStartTime = null;
    let quizCompleted = false;
    let autoAdvanceTimeout = null;
    let advanceProgressInterval = null;
    let quizTimerInterval = null;

    const TOTAL_TIME = 1500;
    const QUESTION_TIME = 120;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionElement = document.getElementById('current-question');
    const scoreElement = document.getElementById('score');
    const totalTimeElement = document.getElementById('total-time');
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

    // =============================================
    // ✅ LOCAL renderMathJax — quiz.js-এর উপর depend করে না
    // =============================================
    function renderMathJax(elements) {
        if (!elements) return;
        // খালি array বা null filter
        const targets = Array.isArray(elements) ? elements.filter(Boolean) : [elements];
        if (targets.length === 0) return;

        const tryRender = (attempt = 1) => {
            if (window.MathJax && MathJax.typesetPromise) {
                MathJax.typesetPromise(targets)
                    .catch(err => console.warn('MathJax error:', err));
            } else if (attempt < 25) {
                setTimeout(() => tryRender(attempt + 1), 200);
            } else {
                console.warn('MathJax not available after multiple retries.');
            }
        };

        tryRender();
    }

    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizCompleted = false;
        quizStartTime = Date.now();

        if (resultContainer) resultContainer.style.display = 'none';
        const qc = document.querySelector('.question-container');
        const tc = document.querySelector('.timer-container');
        if (qc) qc.style.display = 'block';
        if (tc) tc.style.display = 'block';

        updateScore();
        updateQuestionCounter();
        updateTotalTime();
        loadQuestion(currentQuestionIndex);
        startQuizTimer();
    }

    function loadQuestion(index) {
        if (index >= gkQuestions.length) {
            endQuiz();
            return;
        }

        const q = gkQuestions[index];

        // ✅ innerHTML for MathJax
        questionText.innerHTML = q.question;
        optionsContainer.innerHTML = '';

        const optionLetters = ['A', 'B', 'C', 'D'];

        q.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = i;

            if (userAnswers[index] !== undefined) {
                if (userAnswers[index] === i) optionElement.classList.add('selected');
                if (i === q.correctAnswer) {
                    optionElement.classList.add('correct');
                } else if (userAnswers[index] === i && userAnswers[index] !== q.correctAnswer) {
                    optionElement.classList.add('incorrect');
                }
            }

            optionElement.innerHTML = `
                <div class="option-letter">${optionLetters[i]}</div>
                <div class="option-text">${option}</div>
            `;

            if (userAnswers[index] === undefined) {
                optionElement.addEventListener('click', () => selectOption(i));
            }

            optionsContainer.appendChild(optionElement);
        });

        updateQuestionCounter();
        updateProgressBar(index + 1, gkQuestions.length);

        feedbackElement.className = 'feedback';
        feedbackElement.innerHTML = '';

        // ✅ MathJax render
        renderMathJax([questionText, optionsContainer]);

        startQuestionTimer();
    }

    function selectOption(optionIndex) {
        if (userAnswers[currentQuestionIndex] !== undefined) return;

        const options = document.querySelectorAll('.option');
        options.forEach(opt => {
            opt.classList.remove('selected');
            opt.style.pointerEvents = 'none';
        });

        options[optionIndex].classList.add('selected');

        const q = gkQuestions[currentQuestionIndex];
        const isCorrect = optionIndex === q.correctAnswer;
        userAnswers[currentQuestionIndex] = optionIndex;

        if (isCorrect) {
            score++;
            updateScore();
            showFeedback(true);
            options[q.correctAnswer].classList.add('correct');
        } else {
            showFeedback(false, q.options[q.correctAnswer]);
            options[q.correctAnswer].classList.add('correct');
            options[optionIndex].classList.add('incorrect');
        }

        if (questionTimer && questionTimer.stopTimer) questionTimer.stopTimer();
        startAutoAdvance(2000);
    }

    function startAutoAdvance(duration) {
        let progressBar = document.querySelector('.auto-advance-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'auto-advance-progress';
            progressBar.innerHTML = '<div class="advance-progress"></div>';
            if (feedbackElement && feedbackElement.parentNode) {
                feedbackElement.parentNode.insertBefore(progressBar, feedbackElement.nextSibling);
            }
        }

        const progressFill = progressBar.querySelector('.advance-progress');
        progressBar.classList.add('active');
        progressFill.style.width = '0%';

        if (autoAdvanceTimeout) clearTimeout(autoAdvanceTimeout);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);

        let progress = 0;
        const increment = 100 / (duration / 50);

        advanceProgressInterval = setInterval(() => {
            progress += increment;
            progressFill.style.width = `${Math.min(progress, 100)}%`;
        }, 50);

        autoAdvanceTimeout = setTimeout(() => {
            progressBar.classList.remove('active');
            clearInterval(advanceProgressInterval);
            goToNextQuestion();
        }, duration);
    }

    function goToNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < gkQuestions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    }

    function startQuestionTimer() {
        if (questionTimer && questionTimer.stopTimer) questionTimer.stopTimer();
        if (typeof initTimer === 'function') {
            questionTimer = initTimer(QUESTION_TIME, onTimeUp);
            if (questionTimer) questionTimer.startTimer();
        }
    }

    function onTimeUp() {
        const options = document.querySelectorAll('.option');
        options.forEach(opt => { opt.style.pointerEvents = 'none'; });

        const q = gkQuestions[currentQuestionIndex];
        if (options[q.correctAnswer]) options[q.correctAnswer].classList.add('correct');

        userAnswers[currentQuestionIndex] = -1;
        showFeedback(false, q.options[q.correctAnswer]);
        startAutoAdvance(2000);
    }

    function showFeedback(isCorrect, correctAnswer = null) {
        if (isCorrect) {
            feedbackElement.innerHTML = "Correct! 🎉";
            feedbackElement.className = 'feedback correct show';
            if (typeof playSound === 'function') playSound('correct');
            if (typeof createConfetti === 'function') createConfetti();
        } else {
            feedbackElement.innerHTML = correctAnswer
                ? `Incorrect. Correct answer: ${correctAnswer}`
                : "Time's up!";
            feedbackElement.className = 'feedback incorrect show';
            if (typeof playSound === 'function') playSound('incorrect');
        }
        renderMathJax([feedbackElement]);
    }

    function startQuizTimer() {
        let totalSeconds = TOTAL_TIME;

        const updateDisplay = () => {
            if (totalTimeElement) {
                totalTimeElement.textContent = (typeof formatTime === 'function')
                    ? formatTime(totalSeconds)
                    : `${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, '0')}`;
            }
        };

        updateDisplay();
        if (quizTimerInterval) clearInterval(quizTimerInterval);

        quizTimerInterval = setInterval(() => {
            if (quizCompleted) {
                clearInterval(quizTimerInterval);
                return;
            }
            totalSeconds--;
            updateDisplay();
            if (totalSeconds <= 0) {
                clearInterval(quizTimerInterval);
                endQuiz();
            }
        }, 1000);
    }

    function updateQuestionCounter() {
        if (currentQuestionElement) {
            currentQuestionElement.textContent = `${currentQuestionIndex + 1}/${gkQuestions.length}`;
        }
    }

    function updateScore() {
        if (scoreElement) scoreElement.textContent = score;
    }

    function updateTotalTime() {
        if (totalTimeElement) {
            totalTimeElement.textContent = (typeof formatTime === 'function')
                ? formatTime(TOTAL_TIME)
                : '25:00';
        }
    }

    function updateProgressBar(current, total) {
        const progressBar =
            document.querySelector('#progress-fill') || document.querySelector('.progress');
        if (progressBar) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    }

    function endQuiz() {
        quizCompleted = true;

        if (questionTimer && questionTimer.stopTimer) questionTimer.stopTimer();
        if (autoAdvanceTimeout) clearTimeout(autoAdvanceTimeout);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        if (quizTimerInterval) clearInterval(quizTimerInterval);

        const quizDuration = Math.floor((Date.now() - quizStartTime) / 1000);
        const correctCount = score;
        const incorrectCount = gkQuestions.length - score;
        const percentage = Math.round((score / gkQuestions.length) * 100);

        if (finalScoreElement) finalScoreElement.textContent = `${score}/${gkQuestions.length}`;
        if (correctCountElement) correctCountElement.textContent = correctCount;
        if (incorrectCountElement) incorrectCountElement.textContent = incorrectCount;
        if (timeTakenElement) {
            timeTakenElement.textContent = (typeof formatTime === 'function')
                ? formatTime(quizDuration)
                : `${Math.floor(quizDuration / 60)}:${String(quizDuration % 60).padStart(2, '0')}`;
        }
        if (percentageElement) percentageElement.textContent = `${percentage}%`;

        let message = "";
        if (percentage >= 90) message = "Outstanding! You're an Electrodynamics genius! 🎉";
        else if (percentage >= 70) message = "Excellent work! You have great knowledge! 👍";
        else if (percentage >= 50) message = "Good job! You know quite a bit! 👏";
        else message = "Keep learning! You'll do better next time! 💪";

        if (resultMessageElement) resultMessageElement.textContent = message;

        const qc = document.querySelector('.question-container');
        const tc = document.querySelector('.timer-container');
        if (qc) qc.style.display = 'none';
        if (tc) tc.style.display = 'none';
        if (resultContainer) resultContainer.style.display = 'block';

        if (percentage >= 70 && typeof createConfetti === 'function') createConfetti();
    }

    if (restartBtn) restartBtn.addEventListener('click', initQuiz);
    if (homeBtn) homeBtn.addEventListener('click', () => { window.location.href = '/'; });

    initQuiz();
});


