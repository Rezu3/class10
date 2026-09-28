 const gkQuestions = [
    // ===== Section: Molecular Spectra and Atomic Physics =====
    {
        id: 1,
        question: `Molecular spectra consists of`,
        image: null,
        options: [
            `discrete lines`,
            `bands`,
            `mixture of lines and bands`,
            `none of these.`
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        question: `The order of energy associated with rotational spectra is`,
        image: null,
        options: [
            `\\( 10^{-3} \\text{ eV} \\)`,
            `\\( 2 \\text{ eV} \\)`,
            `\\( 10^{-6} \\text{ eV} \\)`,
            `\\( 10^{-2} \\text{ eV} \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 3,
        question: `The radiation emitted in rotational spectrum lies in`,
        image: null,
        options: [
            `visible region`,
            `near infrared region`,
            `ultraviolet region`,
            `audible region.`
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: `The wavelength of electronic spectra lines between`,
        image: null,
        options: [
            `\\( 100 \\text{ to } 1000 \\text{ \\AA} \\)`,
            `\\( 1000 \\text{ to } 7000 \\text{ \\AA} \\)`,
            `\\( 10000 \\text{ to } 15000 \\text{ \\AA} \\)`,
            `\\( 10^5 \\text{ to } 10^7 \\text{ \\AA} \\)`
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        question: `If the rotational, vibrational and electronic energy of a molecule be represented by \\( E_r, E_v \\) and \\( E_e \\) respectively, then`,
        image: null,
        options: [
            `\\( E_v > E_r > E_e \\)`,
            `\\( E_e > E_r > E_v \\)`,
            `\\( E_e > E_v > E_r \\)`,
            `\\( E_r = E_v = E_e \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 6,
        question: `The rotational energy levels of diatomic molecules are`,
        image: null,
        options: [
            `equi-spaced`,
            `closely spaced at higher values`,
            `decreases with \\( v \\)`,
            `none of these.`
        ],
        correctAnswer: 0
    },
    {
        id: 7,
        question: `The frequency separation of rotational level`,
        image: null,
        options: [
            `is constant`,
            `increases with \\( v \\)`,
            `decreases with \\( v \\)`,
            `none of these.`
        ],
        correctAnswer: 0
    },
    {
        id: 8,
        question: `Molecular spectra is more complicated as compared to atomic spectra because`,
        image: null,
        options: [
            `the molecule has many more energy levels,`,
            `the electron in a molecule does not move in a central force field like an atom`,
            `the molecular mass is usually greater than atomic mass`,
            `the molecule can dissociate into atoms.`
        ],
        correctAnswer: 0
    },
    {
        id: 9,
        question: `The importance of rotational spectral study is that we can determine the`,
        image: null,
        options: [
            `the mass of the atom forming the molecule`,
            `bond length of the molecule`,
            `angular momentum`,
            `molecular structure.`
        ],
        correctAnswer: 1
    },
    {
        id: 10,
        question: `All diatomic molecules do not show rotational spectra because,`,
        image: null,
        options: [
            `they possess very heavy mass`,
            `they do not have permanent dipole moment`,
            `their angular momentum is constant`,
            `they always occupy ground state though they have higher rotational level.`
        ],
        correctAnswer: 1
    },
    {
        id: 11,
        question: `The minimum vibrational energy of a diatomic molecule is given by`,
        image: null,
        options: [
            `\\( \\left( v + \\frac{1}{2} \\right) h \\nu_0 \\)`,
            `\\( v h \\nu_0 \\)`,
            `\\( \\frac{1}{2} h \\nu_0 \\)`,
            `\\( h \\nu_0 \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 12,
        question: `The vibrational levels of a diatomic molecule are`,
        image: null,
        options: [
            `equi-spaced`,
            `unequi-spaced`,
            `irregularly spaced`,
            `none of these.`
        ],
        correctAnswer: 0
    },
    {
        id: 13,
        question: `If \\( \\nu_1 \\) and \\( \\nu_2 \\) be the frequencies of the \\( R \\)-branch \\( P \\)-branch of vibrational-rotational spectra, then`,
        image: null,
        options: [
            `\\( \\nu_1 = \\nu_2 \\)`,
            `\\( \\nu_1 > \\nu_2 \\)`,
            `\\( \\nu_2 > \\nu_1 \\)`,
            `\\( \\nu_2 \\ge \\nu_1 \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 14,
        question: `The origin of band structure of electronic spectra of molecules is due to the fact that,`,
        image: null,
        options: [
            `\\( \\Delta E_e \\gg E_j \\)`,
            `\\( \\Delta E_v > E_j \\)`,
            `\\( \\Delta E_v \\simeq \\Delta E_e \\)`,
            `\\( \\Delta E_e > \\Delta E_v, \\Delta E_j \\)`
        ],
        correctAnswer: 3
    },
    {
        id: 15,
        question: `The band length of homonuclear molecules can be determined from the study of`,
        image: null,
        options: [
            `rotational spectra`,
            `vibrational-rotational spectra`,
            `electronic spectra`,
            `Raman spectra.`
        ],
        correctAnswer: 3
    },
    {
        id: 16,
        question: `The spacing between two successive Stokes lines is`,
        image: null,
        options: [
            `dependent on rotational quantum number \\( J \\)`,
            `independent of \\( J \\)`,
            `depend directly on the M.I. of the molecule`,
            `dependent on the frequency of the lines.`
        ],
        correctAnswer: 1
    },
    {
        id: 17,
        question: `In phosphorescence the absorption and emission of light take place`,
        image: null,
        options: [
            `simultaneously`,
            `where emission is delayed by \\( \\sim 10^7 \\text{ s} \\)`,
            `where emission is not always delayed`,
            `with delay time \\( \\sim \\) several years.`
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        question: `The selection rule for transition in rotational spectra is`,
        image: null,
        options: [
            `\\( \\Delta J = 0 \\)`,
            `\\( \\Delta J = \\pm 1 \\)`,
            `\\( \\Delta J = \\pm 2 \\)`,
            `\\( \\Delta J = \\pm 1, \\pm 2 \\)`
        ],
        correctAnswer: 1
    },
    {
        id: 19,
        question: `The stokes and anti-Stokes lines in Raman spectra are`,
        image: null,
        options: [
            `equally spaced`,
            `unequally spaced`,
            `irregularly spaced`,
            `none of these.`
        ],
        correctAnswer: 0
    },
    {
        id: 20,
        question: `Which of the following is homonuclear molecule?`,
        image: null,
        options: [
            `\\( \\text{CO} \\)`,
            `\\( \\text{O}_2 \\)`,
            `\\( \\text{NO} \\)`,
            `\\( \\text{CO}_2 \\)`
        ],
        correctAnswer: 1
    },
    {
        id: 21,
        question: `The molecules and ions which show ESR spectra must have spin`,
        image: null,
        options: [
            `zero`,
            `non-zero`,
            `zero or non-zero`,
            `none of these.`
        ],
        correctAnswer: 1
    },
    {
        id: 22,
        question: `In a system of diatomic molecule some atoms of one element are replaced by a heavier isotope such that the reduced mass is changed by \\( 1.05 \\). The shift in spectral line will be by a factor`,
        image: null,
        options: [
            `0.475`,
            `0.5`,
            `0.98`,
            `1.`
        ],
        correctAnswer: 2
    },
    {
        id: 23,
        question: `For a diatomic molecule the vibrational energy level spacing \\( (\\Delta E_v) \\) and rotational energy level spacing \\( (\\Delta E_J) \\) are :`,
        image: null,
        options: [
            `\\( \\Delta E_v \\) increases with \\( v \\), \\( \\Delta E_J \\) increases with \\( J \\)`,
            `\\( \\Delta E_v \\) decreases with \\( v \\), \\( \\Delta E_J \\) increases with \\( J \\)`,
            `\\( \\Delta E_v \\) decreases with \\( v \\), \\( \\Delta E_J \\) increases with \\( J \\)`,
            `\\( \\Delta E_v \\) decreases with \\( v \\), \\( \\Delta E_J \\) decreases with \\( J \\)`
        ],
        correctAnswer: 1
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
    const QUESTION_TIME = 60;

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


