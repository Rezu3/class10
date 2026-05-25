const gkQuestions = [
    {
        question: "1. নির্দিষ্ট তাপমাত্রায় নির্দিষ্ট ভরের গ্যাসের চাপ ও আয়তনের গুণফল কত?",
        options: ["পরিবর্তনশীল", "স্থির", "শূন্য", "অসংজ্ঞায়িত"],
        correctAnswer: 1
    },
    {
        question: "2. বয়েলের সূত্র কোন দুটি রাশির সম্পর্ক নির্দেশ করে?",
        options: ["চাপ ও তাপমাত্রা", "আয়তন ও তাপমাত্রা", "চাপ ও আয়তন", "মোল সংখ্যা ও চাপ"],
        correctAnswer: 2
    },
    {
        question: "3. বয়েলের সূত্রানুসারে, নির্দিষ্ট তাপমাত্রায় P-V লেখচিত্র কীরূপ?",
        options: ["সরলরেখা", "বৃত্ত", "আয়তাকার হাইপারবোলা", "প্যারাবোলা"],
        correctAnswer: 2
    },
    {
        question: "4. নিচের কোনটি বয়েলের সূত্রের গাণিতিক রূপ?",
        options: ["V/T = constant", "PV = constant", "P/T = constant", "V/n = constant"],
        correctAnswer: 1
    },
    {
        question: "5. বয়েলের সূত্র কোন অবস্থায় গ্যাসের জন্য প্রযোজ্য?",
        options: ["উচ্চ চাপ ও নিম্ন তাপমাত্রায়", "নিম্ন চাপ ও উচ্চ তাপমাত্রায়", "যেকোনো চাপ ও তাপমাত্রায়", "শুধু স্থির তাপমাত্রায়"],
        correctAnswer: 3
    },
    {
        question: "6. একটি নির্দিষ্ট গ্যাসের চাপ দ্বিগুণ করলে তার আয়তন কীরূপ হবে (তাপমাত্রা স্থির)?",
        options: ["দ্বিগুণ", "অর্ধেক", "একই থাকবে", "চারগুণ"],
        correctAnswer: 1
    },
    {
        question: "7. PV = ধ্রুবক — এখানে ধ্রুবকটি কীসের উপর নির্ভর করে?",
        options: ["শুধু চাপ", "গ্যাসের ভর ও তাপমাত্রা", "শুধু আয়তন", "শুধু তাপমাত্রা"],
        correctAnswer: 1
    },
    {
        question: "8. বয়েলের সূত্রের সঠিক ব্যাখ্যা কোনটি?",
        options: ["P ∝ 1/V (T ধ্রুবক)", "P ∝ V (T ধ্রুবক)", "V ∝ T (P ধ্রুবক)", "P ∝ T (V ধ্রুবক)"],
        correctAnswer: 0
    },
    {
        question: "9. নিচের কোন লেখচিত্রটি বয়েলের সূত্রকে নির্দেশ করে?",
        options: ["P বনাম V সরলরেখা", "P বনাম 1/V সরলরেখা", "V বনাম T সরলরেখা", "P বনাম T বক্ররেখা"],
        correctAnswer: 1
    },
    {
        question: "10. 'PV = ধ্রুবক' সূত্রটি কে আবিষ্কার করেন?",
        options: ["চার্লস", "বয়েল", "অ্যাভোগাড্রো", "গে-লুসাক"],
        correctAnswer: 1
    },
    {
        question: "11. চার্লসের সূত্র কোন দুটি রাশির সম্পর্ক নির্দেশ করে?",
        options: ["চাপ ও আয়তন", "আয়তন ও তাপমাত্রা", "চাপ ও তাপমাত্রা", "আয়তন ও মোল সংখ্যা"],
        correctAnswer: 1
    },
    {
        question: "12. চার্লসের সূত্রানুসারে, নির্দিষ্ট চাপে V-T লেখচিত্র কীরূপ?",
        options: ["সরলরেখা", "বৃত্ত", "হাইপারবোলা", "এলিপ্স"],
        correctAnswer: 0
    },
    {
        question: "13. চার্লসের সূত্রের গাণিতিক রূপ কোনটি?",
        options: ["PV = constant", "V/T = constant", "P/T = constant", "V/n = constant"],
        correctAnswer: 1
    },
    {
        question: "14. পরম শূন্য তাপমাত্রার মান কত সেলসিয়াস?",
        options: ["0°C", "-273.15°C", "273.15°C", "-100°C"],
        correctAnswer: 1
    },
    {
        question: "15. কেলভিন স্কেলে তাপমাত্রার একককে কী বলা হয়?",
        options: ["ডিগ্রি সেলসিয়াস", "কেলভিন", "ফারেনহাইট", "র্যাংকিন"],
        correctAnswer: 1
    },
    {
        question: "16. 27°C তাপমাত্রাকে কেলভিনে প্রকাশ করলে কত হয়?",
        options: ["27 K", "300 K", "246 K", "273 K"],
        correctAnswer: 1
    },
    {
        question: "17. চার্লসের সূত্রে তাপমাত্রা কোন স্কেলে পরিমাপ করতে হবে?",
        options: ["সেলসিয়াস", "ফারেনহাইট", "কেলভিন", "যেকোনো একক"],
        correctAnswer: 2
    },
    {
        question: "18. চার্লসের সূত্রানুসারে 0 K তাপমাত্রায় গ্যাসের আয়তন কত?",
        options: ["শূন্য", "অসীম", "1 L", "273.15 L"],
        correctAnswer: 0
    },
    {
        question: "19. স্থির চাপে কোন গ্যাসের আয়তন দ্বিগুণ করতে তাপমাত্রা কীরূপ করতে হবে?",
        options: ["অর্ধেক করতে হবে", "দ্বিগুণ করতে হবে", "স্থির রাখতে হবে", "চারগুণ করতে হবে"],
        correctAnswer: 1
    },
    {
        question: "20. কেলভিন তাপমাত্রা ও সেলসিয়াস তাপমাত্রার মধ্যে সম্পর্ক কোনটি?",
        options: ["K = °C + 273", "K = °C - 273", "K = °C × 273", "K = °C / 273"],
        correctAnswer: 0
    },
    {
        question: "21. বয়েল ও চার্লসের সূত্র একত্রে কোনটি দেয়?",
        options: ["PV = nRT", "P₁V₁/T₁ = P₂V₂/T₂", "V/n = constant", "P/T = constant"],
        correctAnswer: 1
    },
    {
        question: "22. অ্যাভোগাড্রোর সূত্র কী বলে?",
        options: ["নির্দিষ্ট উষ্ণতা ও চাপে সমআয়তনে সমসংখ্যক অণু থাকে", "গ্যাসের চাপ ও আয়তন বিপরীতভাবে সম্পর্কিত", "গ্যাসের আয়তন তাপমাত্রার সমানুপাতিক", "গ্যাসের চাপ তাপমাত্রার সমানুপাতিক"],
        correctAnswer: 0
    },
    {
        question: "23. STP-তে 1 মোল গ্যাসের আয়তন কত?",
        options: ["22.4 L", "24.5 L", "11.2 L", "44.8 L"],
        correctAnswer: 0
    },
    {
        question: "24. অ্যাভোগাড্রোর সূত্রের গাণিতিক রূপ কোনটি?",
        options: ["P ∝ 1/V", "V ∝ T", "V ∝ n", "P ∝ T"],
        correctAnswer: 2
    },
    {
        question: "25. STP-তে 2 মোল H₂ গ্যাসের আয়তন কত?",
        options: ["22.4 L", "44.8 L", "11.2 L", "67.2 L"],
        correctAnswer: 1
    },
    {
        question: "26. আদর্শ গ্যাস সমীকরণ কোনটি?",
        options: ["PV = nRT", "PV = RT", "P = nRT/V", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "27. PV = nRT সমীকরণে R-এর মান কত (SI এককে)?",
        options: ["0.0821", "8.314", "1.987", "0.0831"],
        correctAnswer: 1
    },
    {
        question: "28. চাপ atm, আয়তন L, মোল mol ও তাপমাত্রা K হলে R-এর মান কত?",
        options: ["0.0821 L·atm·mol⁻¹·K⁻¹", "8.314 L·atm·mol⁻¹·K⁻¹", "1.987 L·atm·mol⁻¹·K⁻¹", "0.0831 L·atm·mol⁻¹·K⁻¹"],
        correctAnswer: 0
    },
    {
        question: "29. NTP-তে 1 মোল গ্যাসের আয়তন কত?",
        options: ["22.4 L", "24.45 L", "22.4 m³", "24.45 m³"],
        correctAnswer: 0
    },
    {
        question: "30. আদর্শ গ্যাস সমীকরণে 'n' কী নির্দেশ করে?",
        options: ["চাপ", "আয়তন", "মোল সংখ্যা", "তাপমাত্রা"],
        correctAnswer: 2
    },
    {
        question: "31. নিচের কোনটি আদর্শ গ্যাসের ক্ষেত্রে সঠিক নয়?",
        options: ["অণুগুলোর আয়তন শূন্য", "অণুগুলোর মধ্যে আকর্ষণ বল নেই", "সংঘর্ষ স্থিতিস্থাপক", "অণুগুলোর মধ্যে বিকর্ষণ বল বেশি"],
        correctAnswer: 3
    },
    {
        question: "32. PV = nRT সমীকরণে R-এর মান নির্ভর করে কীসের উপর?",
        options: ["গ্যাসের প্রকৃতি", "চাপের একক", "তাপমাত্রা ও আয়তনের এককের উপর", "এককের পদ্ধতির উপর"],
        correctAnswer: 3
    },
    {
        question: "33. 0°C ও 1 atm চাপে 1 মোল গ্যাসের আয়তন কত লিটার?",
        options: ["22.4", "24.5", "11.2", "44.8"],
        correctAnswer: 0
    },
    {
        question: "34. 3 মোল CO₂ গ্যাসের STP-তে আয়তন কত?",
        options: ["22.4 L", "44.8 L", "67.2 L", "89.6 L"],
        correctAnswer: 2
    },
    {
        question: "35. আদর্শ গ্যাস সমীকরণকে PV = m/M RT আকারে লেখা যায় — এখানে m কী?",
        options: ["গ্যাসের মোলার ভর", "গ্যাসের ভর", "মোল সংখ্যা", "অণুর সংখ্যা"],
        correctAnswer: 1
    },
    {
        question: "36. গ্যাসের অণুগত তত্ত্ব অনুযায়ী, চাপ সৃষ্টির কারণ কী?",
        options: ["অণুগুলোর মধ্যে সংঘর্ষ", "অণু ও পাত্রের দেয়ালের সংঘর্ষ", "অণুগুলোর মধ্যাকর্ষণ", "অণুগুলোর কম্পন"],
        correctAnswer: 1
    },
    {
        question: "37. আদর্শ গ্যাসের ক্ষেত্রে নিচের কোনটি সঠিক?",
        options: ["অণুর নিজস্ব আয়তন আছে", "অণুর মধ্যে আকর্ষণ আছে", "সংঘর্ষ অস্থিতিস্থাপক", "অণুর নিজস্ব আয়তন নেই"],
        correctAnswer: 3
    },
    {
        question: "38. বাস্তব গ্যাস কোন অবস্থায় আদর্শ গ্যাসের মতো আচরণ করে?",
        options: ["উচ্চ চাপ ও নিম্ন তাপমাত্রায়", "নিম্ন চাপ ও উচ্চ তাপমাত্রায়", "উচ্চ চাপ ও উচ্চ তাপমাত্রায়", "নিম্ন চাপ ও নিম্ন তাপমাত্রায়"],
        correctAnswer: 1
    },
    {
        question: "39. বাস্তব গ্যাসের বিচ্যুতির প্রধান কারণ কী?",
        options: ["অণুর গতিশক্তি শূন্য", "অণুর নিজস্ব আয়তন ও আকর্ষণ বল", "অণুর মধ্যে শুধু বিকর্ষণ", "অণুর ঘূর্ণন"],
        correctAnswer: 1
    },
    {
        question: "40. নিচের কোন গ্যাসটি অধিক তাপমাত্রা ও নিম্ন চাপে প্রায় আদর্শ আচরণ করে?",
        options: ["CO₂", "NH₃", "H₂", "SO₂"],
        correctAnswer: 2
    },
    {
        question: "41. বাস্তব গ্যাসের বিচ্যুতি বুঝতে কোন সমীকরণ ব্যবহৃত হয়?",
        options: ["বয়েলের সমীকরণ", "চার্লসের সমীকরণ", "ভ্যান ডার ওয়ালস সমীকরণ", "অ্যাভোগাড্রোর সূত্র"],
        correctAnswer: 2
    },
    {
        question: "42. উচ্চ চাপে বাস্তব গ্যাস PV-এর মান আদর্শ গ্যাসের তুলনায় কেমন হয়?",
        options: ["বেশি", "কম", "সমান", "শূন্য"],
        correctAnswer: 0
    },
    {
        question: "43. নিম্ন তাপমাত্রায় বাস্তব গ্যাসের সংকোচনশীলতা কেমন হয়?",
        options: ["বেশি হয়", "কম হয়", "অপরিবর্তিত থাকে", "শূন্য হয়"],
        correctAnswer: 0
    },
    {
        question: "44. কোন গ্যাসের জন্য বিচ্যুতি সবচেয়ে কম?",
        options: ["H₂", "He", "CO₂", "H₂O বাষ্প"],
        correctAnswer: 1
    },
    {
        question: "45. গ্যাসের অণুগত তত্ত্ব অনুযায়ী, গ্যাসের গড় গতিশক্তি কীসের সমানুপাতিক?",
        options: ["পরম তাপমাত্রা", "চাপের বর্গ", "আয়তনের বর্গ", "মোল সংখ্যা"],
        correctAnswer: 0
    },
    {
        question: "46. 2 atm চাপে 5 L গ্যাসের আয়তন 10 L করতে চাপ কত করতে হবে (তাপমাত্রা স্থির)?",
        options: ["4 atm", "2 atm", "1 atm", "0.5 atm"],
        correctAnswer: 2
    },
    {
        question: "47. 300 K তাপমাত্রায় 10 L গ্যাসের তাপমাত্রা 600 K করলে আয়তন কত হবে (চাপ স্থির)?",
        options: ["5 L", "10 L", "20 L", "40 L"],
        correctAnswer: 2
    },
    {
        question: "48. 2 atm, 300 K ও 5 L গ্যাসের মোল সংখ্যা কত (R = 0.0821)?",
        options: ["0.406 mol", "0.203 mol", "0.812 mol", "1 mol"],
        correctAnswer: 0
    },
    {
        question: "49. নিচের কোনটি গ্যাসের অণুগত তত্ত্বের অনুমান নয়?",
        options: ["গ্যাস অণুগুলি বিন্দুর মতো", "অণুগুলোর মধ্যে কোনো বল নেই", "অণুর গতিশক্তি তাপমাত্রার বর্গের সমানুপাতিক", "সংঘর্ষ স্থিতিস্থাপক"],
        correctAnswer: 2
    },
    {
        question: "50. বাস্তব গ্যাসের ক্ষেত্রে 'বয়েল তাপমাত্রা' কী?",
        options: ["যে তাপমাত্রায় গ্যাস আদর্শ আচরণ করে", "যে তাপমাত্রায় গ্যাস তরল হয়", "যে তাপমাত্রায় P-V বক্ররেখা অনুভূমিক হয়", "যে তাপমাত্রায় বয়েলের সূত্র প্রযোজ্য"],
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
