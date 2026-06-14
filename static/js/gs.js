const gkQuestions = [
    {
        question: "1. গ্যাসের চাপের মূল কারণ কী?",
        options: ["অণুর আকর্ষণ বল", "অণুর প্রাচীরের সাথে সংঘর্ষ", "অণুর সৃষ্টি", "অণুর ধ্বংস"],
        correctAnswer: 1
    },
    {
        question: "2. বয়েলের সূত্রে কোন রাশি স্থির থাকে?",
        options: ["তাপমাত্রা", "চাপ", "আয়তন", "ভর"],
        correctAnswer: 0
    },
    {
        question: "3. বয়েলের সূত্র অনুযায়ী P ∝ ?",
        options: ["V", "V²", "1/V", "√V"],
        correctAnswer: 2
    },
    {
        question: "4. বয়েলের সূত্রের গাণিতিক রূপ কোনটি?",
        options: ["PV = ধ্রুবক", "P/V = ধ্রুবক", "P+V = ধ্রুবক", "PV² = ধ্রুবক"],
        correctAnswer: 0
    },
    {
        question: "5. চাপ দ্বিগুণ করলে আয়তন কত হবে (তাপমাত্রা স্থির)?",
        options: ["দ্বিগুণ", "অর্ধেক", "চারগুণ", "অপরিবর্তিত"],
        correctAnswer: 1
    },
    {
        question: "6. চার্লসের সূত্রে কোন রাশি স্থির থাকে?",
        options: ["চাপ", "আয়তন", "তাপমাত্রা", "ঘনত্ব"],
        correctAnswer: 0
    },
    {
        question: "7. চার্লসের সূত্র অনুযায়ী V ∝ ?",
        options: ["1/T", "T", "P", "P²"],
        correctAnswer: 1
    },
    {
        question: "8. চার্লসের সূত্রের গাণিতিক রূপ কোনটি?",
        options: ["PV=ধ্রুবক", "V/T=ধ্রুবক", "PT=ধ্রুবক", "P/T=ধ্রুবক"],
        correctAnswer: 1
    },
    {
        question: "9. পরম শূন্য তাপমাত্রা কত?",
        options: ["0°C", "-100°C", "-273°C", "273°C"],
        correctAnswer: 2
    },
    {
        question: "10. 0 K সমান কত °C?",
        options: ["0°C", "-273°C", "273°C", "-100°C"],
        correctAnswer: 1
    },
    {
        question: "11. কেলভিন স্কেলে বরফের গলনাঙ্ক কত?",
        options: ["0 K", "100 K", "273 K", "373 K"],
        correctAnswer: 2
    },
    {
        question: "12. কেলভিন স্কেলে জলের স্ফুটনাঙ্ক কত?",
        options: ["100 K", "273 K", "373 K", "473 K"],
        correctAnswer: 2
    },
    {
        question: "13. সেলসিয়াস থেকে কেলভিনে রূপান্তর সূত্র কী?",
        options: ["K=C-273", "K=C+273", "K=C×273", "K=C/273"],
        correctAnswer: 1
    },
    {
        question: "14. যৌগিক গ্যাস সূত্র কোনটি?",
        options: ["PV/T = ধ্রুবক", "PV = ধ্রুবক", "V/T = ধ্রুবক", "P/T = ধ্রুবক"],
        correctAnswer: 0
    },
    {
        question: "15. আদর্শ গ্যাস সমীকরণ কোনটি?",
        options: ["PV=nRT", "PV=RT", "P=nRT", "V=nRT"],
        correctAnswer: 0
    },
    {
        question: "16. আদর্শ গ্যাস ধ্রুবককে কী দ্বারা প্রকাশ করা হয়?",
        options: ["K", "R", "G", "A"],
        correctAnswer: 1
    },
    {
        question: "17. আদর্শ গ্যাস সমীকরণে n কী নির্দেশ করে?",
        options: ["ভর", "মোল সংখ্যা", "চাপ", "ঘনত্ব"],
        correctAnswer: 1
    },
    {
        question: "18. অ্যাভোগাড্রোর সূত্র অনুযায়ী V ∝ ?",
        options: ["n", "1/n", "P", "T"],
        correctAnswer: 0
    },
    {
        question: "19. সমচাপ ও সমতাপমাত্রায় সমআয়তনের সকল গ্যাসে কী সমান থাকে?",
        options: ["ভর", "চাপ", "অণুর সংখ্যা", "ঘনত্ব"],
        correctAnswer: 2
    },
    {
        question: "20. অ্যাভোগাড্রো সংখ্যা কত?",
        options: ["6.02×10²³", "3×10⁸", "9.8", "1.6×10⁻¹⁹"],
        correctAnswer: 0
    },
    {
        question: "21. STP-তে 1 মোল গ্যাসের আয়তন কত?",
        options: ["11.2 L", "22.4 L", "44.8 L", "1 L"],
        correctAnswer: 1
    },
    {
        question: "22. আদর্শ গ্যাসে অণুগুলির নিজস্ব আয়তন ধরা হয়—",
        options: ["অনেক বেশি", "সসীম", "শূন্য", "পরিবর্তনশীল"],
        correctAnswer: 2
    },
    {
        question: "23. আদর্শ গ্যাসে আন্তঃআণবিক বল ধরা হয়—",
        options: ["খুব বেশি", "কম", "শূন্য", "অসীম"],
        correctAnswer: 2
    },
    {
        question: "24. গ্যাসের চাপের SI একক কী?",
        options: ["জুল", "পাসকেল", "নিউটন", "ওয়াট"],
        correctAnswer: 1
    },
    {
        question: "25. 1 atm ≈ কত Pa?",
        options: ["1.013×10⁵", "10⁵", "760", "22.4"],
        correctAnswer: 0
    },
    {
        question: "26. গ্যাস অণুর গতি কেমন?",
        options: ["স্থির", "এলোমেলো", "বৃত্তাকার", "একমুখী"],
        correctAnswer: 1
    },
    {
        question: "27. গতিতত্ত্ব অনুযায়ী গ্যাস অণুর সংঘর্ষ কেমন?",
        options: ["স্থিতিস্থাপক", "অস্থিতিস্থাপক", "আংশিক", "কোনোটিই নয়"],
        correctAnswer: 0
    },
    {
        question: "28. তাপমাত্রা বৃদ্ধি পেলে গ্যাস অণুর গড় গতিশক্তি—",
        options: ["কমে", "বাড়ে", "অপরিবর্তিত", "শূন্য হয়"],
        correctAnswer: 1
    },
    {
        question: "29. গ্যাস অণুর গড় গতিশক্তি কার সমানুপাতিক?",
        options: ["P", "V", "T", "n"],
        correctAnswer: 2
    },
    {
        question: "30. বিসরণ বলতে কী বোঝায়?",
        options: ["গলন", "মিশ্রণ", "স্বতঃস্ফূর্ত মিশে যাওয়া", "সংকোচন"],
        correctAnswer: 2
    },
    {
        question: "31. কোন গ্যাস দ্রুত বিসরণ করে?",
        options: ["ভারী গ্যাস", "হালকা গ্যাস", "সব সমান", "কোনোটিই নয়"],
        correctAnswer: 1
    },
    {
        question: "32. গ্রাহামের সূত্র অনুযায়ী বিসরণের হার ∝ ?",
        options: ["√M", "M", "1/√M", "1/M"],
        correctAnswer: 2
    },
    {
        question: "33. H₂ ও O₂ এর মধ্যে দ্রুত বিসরণ করে—",
        options: ["O₂", "H₂", "উভয়ই সমান", "নির্ধারণ করা যায় না"],
        correctAnswer: 1
    },
    {
        question: "34. বাস্তব গ্যাস আদর্শ আচরণ থেকে বেশি বিচ্যুত হয়—",
        options: ["উচ্চ T ও নিম্ন P", "নিম্ন T ও উচ্চ P", "মধ্যম T", "কম ঘনত্বে"],
        correctAnswer: 1
    },
    {
        question: "35. কোন অবস্থায় গ্যাস আদর্শ আচরণের নিকটবর্তী হয়?",
        options: ["উচ্চ চাপ", "নিম্ন তাপমাত্রা", "উচ্চ T ও নিম্ন P", "উচ্চ ঘনত্ব"],
        correctAnswer: 2
    },
    {
        question: "36. বাস্তব গ্যাসের বিচ্যুতির কারণ কী?",
        options: ["আন্তঃআণবিক বল", "অণুর আয়তন", "উভয়ই", "কোনোটিই নয়"],
        correctAnswer: 2
    },
    {
        question: "37. PV=nRT সমীকরণটি কার সমন্বয়ে গঠিত?",
        options: ["বয়েল + চার্লস + অ্যাভোগাড্রো", "নিউটন + বয়েল", "চার্লস + কুলম্ব", "রাদারফোর্ড + বয়েল"],
        correctAnswer: 0
    },
    {
        question: "38. গ্যাসের ঘনত্ব বাড়লে অণুগুলির সংঘর্ষের হার—",
        options: ["কমে", "বাড়ে", "অপরিবর্তিত", "শূন্য হয়"],
        correctAnswer: 1
    },
    {
        question: "39. 27°C সমান কত K?",
        options: ["273 K", "300 K", "127 K", "246 K"],
        correctAnswer: 1
    },
    {
        question: "40. 127°C সমান কত K?",
        options: ["300 K", "373 K", "400 K", "273 K"],
        correctAnswer: 2
    },
    {
        question: "41. -23°C সমান কত K?",
        options: ["250 K", "273 K", "296 K", "223 K"],
        correctAnswer: 0
    },
    {
        question: "42. চাপ স্থির থাকলে তাপমাত্রা দ্বিগুণ করলে আয়তন হবে—",
        options: ["অর্ধেক", "দ্বিগুণ", "চারগুণ", "অপরিবর্তিত"],
        correctAnswer: 1
    },
    {
        question: "43. তাপমাত্রা স্থির থাকলে আয়তন অর্ধেক করলে চাপ হবে—",
        options: ["অর্ধেক", "দ্বিগুণ", "চারগুণ", "অপরিবর্তিত"],
        correctAnswer: 1
    },
    {
        question: "44. আদর্শ গ্যাসের ক্ষেত্রে PV/nT এর মান কী?",
        options: ["R", "0", "1", "P"],
        correctAnswer: 0
    },
    {
        question: "45. গ্যাসের চাপ সৃষ্টি হয়—",
        options: ["মাধ্যাকর্ষণের জন্য", "অণুর সংঘর্ষের জন্য", "তাপের জন্য", "আলো জন্য"],
        correctAnswer: 1
    },
    {
        question: "46. গতিতত্ত্ব অনুযায়ী অণুগুলি সর্বদা—",
        options: ["স্থির", "কম্পমান", "গতিশীল", "নিষ্ক্রিয়"],
        correctAnswer: 2
    },
    {
        question: "47. গ্যাসের গড় গতিশক্তি নির্ভর করে—",
        options: ["চাপের উপর", "আয়তনের উপর", "তাপমাত্রার উপর", "ঘনত্বের উপর"],
        correctAnswer: 2
    },
    {
        question: "48. আদর্শ গ্যাস সমীকরণে P দ্বারা বোঝায়—",
        options: ["চাপ", "ক্ষমতা", "পোটেনশিয়াল", "ঘনত্ব"],
        correctAnswer: 0
    },
    {
        question: "49. আদর্শ গ্যাস সমীকরণে V দ্বারা বোঝায়—",
        options: ["বেগ", "আয়তন", "ভর", "ঘনত্ব"],
        correctAnswer: 1
    },
    {
        question: "50. আদর্শ গ্যাস সমীকরণে T অবশ্যই কোন স্কেলে নিতে হয়?",
        options: ["সেলসিয়াস", "ফারেনহাইট", "কেলভিন", "র‍্যাঙ্কিন"],
        correctAnswer: 2
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
