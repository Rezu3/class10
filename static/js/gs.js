const gkQuestions = [
    { question: "আলো কী ধরনের শক্তি?", options: ["যান্ত্রিক শক্তি", "তড়িৎচৌম্বকীয় শক্তি", "শব্দ শক্তি", "রাসায়নিক শক্তি"], correctAnswer: 1 },
    { question: "আলো সরলরেখায় চলার ঘটনাকে কী বলে?", options: ["প্রতিসরণ", "প্রতিফলন", "সরলরেখায় গমন", "বিচ্ছুরণ"], correctAnswer: 2 },
    { question: "সমতল দর্পণে প্রতিবিম্ব কেমন হয়?", options: ["উল্টো", "সোজা ও সমান", "বড়", "ছোট"], correctAnswer: 1 },
    { question: "প্রতিফলনের সূত্র কয়টি?", options: ["১টি", "২টি", "৩টি", "৪টি"], correctAnswer: 1 },
    { question: "আপতন কোণ ও প্রতিফলন কোণের সম্পর্ক কী?", options: ["সমান", "বেশি", "কম", "নেই"], correctAnswer: 0 },
    { question: "আয়নায় প্রতিবিম্ব সবসময় কোথায় গঠিত হয়?", options: ["বাস্তব", "ভার্চুয়াল", "উল্টো", "ছোট"], correctAnswer: 1 },
    { question: "উত্তল দর্পণ কোথায় ব্যবহৃত হয়?", options: ["গাড়ির সাইড মিরর", "শেভিং", "দূরবীন", "মাইক্রোস্কোপ"], correctAnswer: 0 },
    { question: "অবতল দর্পণ কোথায় ব্যবহৃত হয়?", options: ["সাইড মিরর", "শেভিং মিরর", "রাস্তার আয়না", "কোনোটিই নয়"], correctAnswer: 1 },
    { question: "আলোর প্রতিসরণ ঘটে কখন?", options: ["মাধ্যম পরিবর্তনে", "একই মাধ্যমে", "অন্ধকারে", "কখনো নয়"], correctAnswer: 0 },
    { question: "হালকা মাধ্যম থেকে ঘন মাধ্যমে গেলে রশ্মি?", options: ["লম্বের দিকে বাঁকে", "লম্ব থেকে দূরে", "সোজা", "থামে"], correctAnswer: 0 },

    { question: "ঘন থেকে হালকা মাধ্যমে গেলে রশ্মি?", options: ["লম্বের দিকে", "লম্ব থেকে দূরে", "সোজা", "থামে"], correctAnswer: 1 },
    { question: "সংকট কোণ কী?", options: ["আপতন কোণ", "প্রতিসরণ কোণ", "পূর্ণ প্রতিফলনের শুরু কোণ", "কোনোটিই নয়"], correctAnswer: 2 },
    { question: "পূর্ণ অভ্যন্তরীণ প্রতিফলন কখন হয়?", options: ["ঘন→হালকা ও কোণ বেশি", "হালকা→ঘন", "সবসময়", "কখনো নয়"], correctAnswer: 0 },
    { question: "লেন্স কত প্রকার?", options: ["১", "২", "৩", "৪"], correctAnswer: 1 },
    { question: "উত্তল লেন্স কী করে?", options: ["রশ্মি ছড়ায়", "রশ্মি একত্র করে", "কোনোটিই নয়", "আলো বন্ধ করে"], correctAnswer: 1 },
    { question: "অবতল লেন্স কী করে?", options: ["একত্র করে", "ছড়ায়", "আলো শোষণ করে", "প্রতিফলিত করে"], correctAnswer: 1 },
    { question: "মানব চোখে কোন লেন্স থাকে?", options: ["উত্তল", "অবতল", "সমতল", "কোনোটিই নয়"], correctAnswer: 0 },
    { question: "রেটিনা কোথায়?", options: ["চোখের সামনে", "মাঝে", "পেছনে", "বাইরে"], correctAnswer: 2 },
    { question: "দৃষ্টিশক্তির ত্রুটি কোনটি?", options: ["মায়োপিয়া", "হাইপারমেট্রোপিয়া", "দুটোই", "কোনোটিই নয়"], correctAnswer: 2 },
    { question: "মায়োপিয়া হলে কী দেখা যায়?", options: ["দূর", "কাছ", "দুটোই", "কোনোটিই নয়"], correctAnswer: 1 },

    { question: "হাইপারমেট্রোপিয়া হলে?", options: ["কাছ", "দূর", "দুটোই", "কোনোটিই নয়"], correctAnswer: 1 },
    { question: "প্রিজম কী করে?", options: ["প্রতিফলন", "বিচ্ছুরণ", "শোষণ", "কোনোটিই নয়"], correctAnswer: 1 },
    { question: "রংধনু কীভাবে তৈরি হয়?", options: ["প্রতিফলন", "প্রতিসরণ", "বিচ্ছুরণ", "সবগুলো"], correctAnswer: 3 },
    { question: "আলোর বেগ কোথায় সর্বাধিক?", options: ["বায়ু", "জল", "কাঁচ", "শূন্যস্থান"], correctAnswer: 3 },
    { question: "ছায়া কেন হয়?", options: ["আলো সোজা চলে", "আলো বাঁকে", "আলো থামে", "কোনোটিই নয়"], correctAnswer: 0 },
    { question: "অপেক বস্তু কী?", options: ["আলো যেতে দেয়", "আলো যেতে দেয় না", "আংশিক দেয়", "কোনোটিই নয়"], correctAnswer: 1 },
    { question: "স্বচ্ছ বস্তু কী?", options: ["সব আলো যেতে দেয়", "দেয় না", "আংশিক", "কোনোটিই নয়"], correctAnswer: 0 },
    { question: "অর্ধস্বচ্ছ বস্তু কী?", options: ["সব দেয়", "কিছু দেয়", "দেয় না", "কোনোটিই নয়"], correctAnswer: 1 },
    { question: "সমতল দর্পণের ফোকাল দৈর্ঘ্য?", options: ["অসীম", "০", "১", "২"], correctAnswer: 0 },
    { question: "আয়নায় ল্যাটারাল ইনভার্সন কী?", options: ["উল্টো", "ডান-বাম বদল", "বড়", "ছোট"], correctAnswer: 1 },

    { question: "আলোর প্রতিফলন কী?", options: ["বাঁক", "ফিরে আসা", "ছড়ানো", "থামা"], correctAnswer: 1 },
    { question: "নিয়মিত প্রতিফলন কোথায় হয়?", options: ["মসৃণ পৃষ্ঠে", "খসখসে", "জলে", "কোনোটিই নয়"], correctAnswer: 0 },
    { question: "বিক্ষিপ্ত প্রতিফলন কোথায় হয়?", options: ["মসৃণ", "খসখসে", "আয়না", "কাঁচ"], correctAnswer: 1 },
    { question: "আয়নার পেছনে ছবি হলে?", options: ["বাস্তব", "ভার্চুয়াল", "উল্টো", "বড়"], correctAnswer: 1 },
    { question: "লেন্সের কেন্দ্রকে কী বলে?", options: ["ফোকাস", "অপটিক্যাল সেন্টার", "অক্ষ", "রশ্মি"], correctAnswer: 1 },
    { question: "ফোকাস কী?", options: ["কেন্দ্র", "রশ্মির মিলন বিন্দু", "আয়না", "লেন্স"], correctAnswer: 1 },
    { question: "মানব চোখে ছবি কোথায় পড়ে?", options: ["লেন্স", "রেটিনা", "করনিয়া", "আইরিস"], correctAnswer: 1 },
    { question: "আইরিস কী নিয়ন্ত্রণ করে?", options: ["রং", "আলোর প্রবেশ", "ছবি", "দৃষ্টি"], correctAnswer: 1 },
    { question: "পিউপিল কী?", options: ["লেন্স", "ছিদ্র", "রেটিনা", "নার্ভ"], correctAnswer: 1 },
    { question: "চোখের লেন্স কেমন?", options: ["উত্তল", "অবতল", "সমতল", "কোনোটিই নয়"], correctAnswer: 0 },

    { question: "ক্যামেরা কোন নীতিতে কাজ করে?", options: ["প্রতিফলন", "প্রতিসরণ", "দুটোই", "কোনোটিই নয়"], correctAnswer: 1 },
    { question: "পেরিস্কোপ কী কাজে লাগে?", options: ["উপর দেখা", "নীচে দেখা", "চারদিকে দেখা", "কোনোটিই নয়"], correctAnswer: 0 },
    { question: "দূরবীন কী?", options: ["লেন্স", "আয়না", "যন্ত্র", "কোনোটিই নয়"], correctAnswer: 2 },
    { question: "মাইক্রোস্কোপ কী করে?", options: ["বড় করে", "ছোট করে", "রং বদলায়", "কোনোটিই নয়"], correctAnswer: 0 },
    { question: "প্রতিসরণ সূচক কী?", options: ["বেগের অনুপাত", "দূরত্ব", "সময়", "কোনোটিই নয়"], correctAnswer: 0 },
    { question: "আলো কোন মাধ্যমে ধীর?", options: ["বায়ু", "জল", "কাঁচ", "শূন্য"], correctAnswer: 2 },
    { question: "আলো কী?", options: ["তরঙ্গ", "কণা", "দুটোই", "কোনোটিই নয়"], correctAnswer: 2 },
    { question: "ছায়ার আকার কিসে বদলায়?", options: ["দূরত্ব", "আলো", "বস্তু", "সব"], correctAnswer: 3 },
    { question: "গ্রহণ কী?", options: ["ছায়া", "আলো", "রং", "লেন্স"], correctAnswer: 0 }
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
        
        questionTimer = initTimer(60, onTimeUp);
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
