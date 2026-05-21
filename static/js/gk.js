const gkQuestions = [
{
    question: "1. পরমাণুর কেন্দ্রে কী থাকে?",
    options: ["ইলেকট্রন", "প্রোটন ও নিউট্রন", "শুধু নিউট্রন", "শুধু ইলেকট্রন"],
    correctAnswer: 1
},
{
    question: "2. ইলেকট্রনের চার্জ কী?",
    options: ["ধনাত্মক", "ঋণাত্মক", "নিরপেক্ষ", "দুটোই"],
    correctAnswer: 1
},
{
    question: "3. প্রোটনের চার্জ কী?",
    options: ["ঋণাত্মক", "ধনাত্মক", "নিরপেক্ষ", "পরিবর্তনশীল"],
    correctAnswer: 1
},
{
    question: "4. নিউট্রনের চার্জ কী?",
    options: ["ধনাত্মক", "ঋণাত্মক", "নিরপেক্ষ", "দুটোই"],
    correctAnswer: 2
},
{
    question: "5. একটি পরমাণুতে প্রোটন ও ইলেকট্রনের সংখ্যা সাধারণত কেমন হয়?",
    options: ["অসমান", "সমান", "কখনো সমান", "জানা যায় না"],
    correctAnswer: 1
},
{
    question: "6. পরমাণুর সবচেয়ে বাইরের স্তরকে কী বলে?",
    options: ["কেন্দ্র", "কক্ষপথ", "ভ্যালেন্স শেল", "নিউক্লিয়াস"],
    correctAnswer: 2
},
{
    question: "7. যোজ্যতা কী নির্দেশ করে?",
    options: ["ভর", "আকার", "সংযোজন ক্ষমতা", "রং"],
    correctAnswer: 2
},
{
    question: "8. হাইড্রোজেনের যোজ্যতা কত?",
    options: ["1", "2", "3", "0"],
    correctAnswer: 0
},
{
    question: "9. অক্সিজেনের যোজ্যতা কত?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1
},
{
    question: "10. সোডিয়ামের সংকেত কী?",
    options: ["So", "Na", "S", "Sn"],
    correctAnswer: 1
},
{
    question: "11. অক্সিজেনের সংকেত কী?",
    options: ["O", "Ox", "Om", "Og"],
    correctAnswer: 0
},
{
    question: "12. রাসায়নিক বিক্রিয়া কী?",
    options: ["শারীরিক পরিবর্তন", "পদার্থের রূপ পরিবর্তন", "নতুন পদার্থ সৃষ্টি", "রং পরিবর্তন"],
    correctAnswer: 2
},
{
    question: "13. রাসায়নিক সমীকরণ কী?",
    options: ["গল্প", "চিত্র", "বিক্রিয়ার প্রতীকী রূপ", "সংখ্যা"],
    correctAnswer: 2
},
{
    question: "14. সমীকরণ সমতা বিধান কেন করা হয়?",
    options: ["সুন্দর দেখাতে", "ভর সংরক্ষণ করতে", "সহজ করতে", "সময় বাঁচাতে"],
    correctAnswer: 1
},
{
    question: "15. H₂O কী বোঝায়?",
    options: ["হাইড্রোজেন", "অক্সিজেন", "জল", "লবণ"],
    correctAnswer: 2
},
{
    question: "16. 2H₂ + O₂ → 2H₂O এটি কোন ধরনের বিক্রিয়া?",
    options: ["বিয়োজন", "সংযোগ", "প্রতিস্থাপন", "বিনিময়"],
    correctAnswer: 1
},
{
    question: "17. CaCO₃ → CaO + CO₂ এটি কোন বিক্রিয়া?",
    options: ["সংযোগ", "বিয়োজন", "বিনিময়", "প্রতিস্থাপন"],
    correctAnswer: 1
},
{
    question: "18. প্রতিস্থাপন বিক্রিয়ায় কী ঘটে?",
    options: ["দুটি পদার্থ যুক্ত হয়", "একটি পদার্থ ভেঙে যায়", "একটি অন্যটিকে প্রতিস্থাপন করে", "কিছুই না"],
    correctAnswer: 2
},
{
    question: "19. বিনিময় বিক্রিয়ায় কী ঘটে?",
    options: ["দুটি পদার্থের অংশ বিনিময় হয়", "ভেঙে যায়", "জোড়া লাগে", "কিছুই না"],
    correctAnswer: 0
},
{
    question: "20. অ্যাসিডের বৈশিষ্ট্য কী?",
    options: ["তিক্ত স্বাদ", "টক স্বাদ", "মিষ্টি", "গন্ধহীন"],
    correctAnswer: 1
},
{
    question: "21. ক্ষারের বৈশিষ্ট্য কী?",
    options: ["টক", "তিক্ত", "মিষ্টি", "লবণাক্ত"],
    correctAnswer: 1
},
{
    question: "22. অ্যাসিড + ক্ষার → ?",
    options: ["গ্যাস", "লবণ + জল", "শুধু জল", "শুধু লবণ"],
    correctAnswer: 1
},
{
    question: "23. HCl কী ধরনের পদার্থ?",
    options: ["ক্ষার", "অ্যাসিড", "লবণ", "ধাতু"],
    correctAnswer: 1
},
{
    question: "24. NaOH কী?",
    options: ["অ্যাসিড", "ক্ষার", "গ্যাস", "লবণ"],
    correctAnswer: 1
},
{
    question: "25. রাসায়নিক সংকেত কী বোঝায়?",
    options: ["রং", "পদার্থের সংক্ষিপ্ত রূপ", "ওজন", "আকার"],
    correctAnswer: 1
},
{
    question: "26. Fe কী নির্দেশ করে?",
    options: ["লোহা", "সোনা", "রূপা", "তামা"],
    correctAnswer: 0
},
{
    question: "27. CO₂ কী?",
    options: ["কার্বন মনোক্সাইড", "কার্বন ডাই অক্সাইড", "অক্সিজেন", "হাইড্রোজেন"],
    correctAnswer: 1
},
{
    question: "28. সমীকরণে তীর চিহ্ন কী বোঝায়?",
    options: ["শুরু", "শেষ", "বিক্রিয়া থেকে উৎপন্ন", "সংখ্যা"],
    correctAnswer: 2
},
{
    question: "29. Mg + O₂ → MgO এটি কী ধরনের বিক্রিয়া?",
    options: ["সংযোগ", "বিয়োজন", "প্রতিস্থাপন", "বিনিময়"],
    correctAnswer: 0
},
{
    question: "30. Zn + HCl → ZnCl₂ + H₂ এটি কী?",
    options: ["সংযোগ", "প্রতিস্থাপন", "বিয়োজন", "বিনিময়"],
    correctAnswer: 1
},
{
    question: "31. ইলেকট্রন কোথায় থাকে?",
    options: ["নিউক্লিয়াসে", "কক্ষপথে", "প্রোটনে", "নিউট্রনে"],
    correctAnswer: 1
},
{
    question: "32. নিউক্লিয়াসে কী থাকে?",
    options: ["ইলেকট্রন", "প্রোটন ও নিউট্রন", "শুধু ইলেকট্রন", "কিছুই না"],
    correctAnswer: 1
},
{
    question: "33. যোজ্যতা নির্ভর করে কোনটির উপর?",
    options: ["ভর", "ইলেকট্রন সংখ্যা", "রং", "গন্ধ"],
    correctAnswer: 1
},
{
    question: "34. Cl এর যোজ্যতা কত?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0
},
{
    question: "35. N এর যোজ্যতা কত?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2
},
{
    question: "36. রাসায়নিক বিক্রিয়ায় কী সংরক্ষিত থাকে?",
    options: ["রং", "ভর", "গন্ধ", "স্বাদ"],
    correctAnswer: 1
},
{
    question: "37. বিক্রিয়ায় অংশগ্রহণকারী পদার্থকে কী বলে?",
    options: ["উৎপাদ", "বিক্রিয়ক", "গ্যাস", "ক্ষার"],
    correctAnswer: 1
},
{
    question: "38. উৎপন্ন পদার্থকে কী বলে?",
    options: ["বিক্রিয়ক", "উৎপাদ", "অ্যাসিড", "ধাতু"],
    correctAnswer: 1
},
{
    question: "39. CaO + H₂O → Ca(OH)₂ এটি কী?",
    options: ["সংযোগ", "বিয়োজন", "প্রতিস্থাপন", "বিনিময়"],
    correctAnswer: 0
},
{
    question: "40. NaCl কী?",
    options: ["অ্যাসিড", "ক্ষার", "লবণ", "গ্যাস"],
    correctAnswer: 2
},
{
    question: "41. H₂SO₄ কী?",
    options: ["ক্ষার", "অ্যাসিড", "লবণ", "ধাতু"],
    correctAnswer: 1
},
{
    question: "42. রাসায়নিক সমীকরণে সংখ্যা বসানোকে কী বলে?",
    options: ["সমতা বিধান", "সংযোগ", "বিয়োজন", "প্রতিস্থাপন"],
    correctAnswer: 0
},
{
    question: "43. 2H₂O → 2H₂ + O₂ এটি কী?",
    options: ["সংযোগ", "বিয়োজন", "বিনিময়", "প্রতিস্থাপন"],
    correctAnswer: 1
},
{
    question: "44. K এর যোজ্যতা কত?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0
},
{
    question: "45. Ca এর যোজ্যতা কত?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1
},
{
    question: "46. রাসায়নিক বিক্রিয়া চিহ্নিত করার একটি লক্ষণ কী?",
    options: ["রং পরিবর্তন", "শব্দ", "চাপ", "দৈর্ঘ্য"],
    correctAnswer: 0
},
{
    question: "47. গ্যাস নির্গমন হলে তা কী নির্দেশ করে?",
    options: ["শারীরিক পরিবর্তন", "রাসায়নিক বিক্রিয়া", "কিছু না", "ভর কমেছে"],
    correctAnswer: 1
},
{
    question: "48. তাপ উৎপন্ন হলে তা কী নির্দেশ করে?",
    options: ["রাসায়নিক বিক্রিয়া", "কিছু না", "শুধু গরম", "ভুল"],
    correctAnswer: 0
},
{
    question: "49. CH₄ কী?",
    options: ["মিথেন", "ইথেন", "প্রোপেন", "বিউটেন"],
    correctAnswer: 0
},
{
    question: "50. NH₃ কী?",
    options: ["অ্যামোনিয়া", "নাইট্রোজেন", "অক্সিজেন", "হাইড্রোজেন"],
    correctAnswer: 0
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
