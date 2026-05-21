const gkQuestions = [
    {
        question: "1. গোলীয় দর্পণের প্রতিফলনকারী পৃষ্ঠ যদি ভিতরের দিকে বাঁকা হয়, তবে তাকে কী বলে?",
        options: ["উত্তল দর্পণ", "অবতল দর্পণ", "সমতল দর্পণ", "প্যারাবোলিক দর্পণ"],
        correctAnswer: 1
    },
    {
        question: "2. গোলীয় দর্পণের মেরু ও বক্রতা কেন্দ্রের মধ্যবর্তী দূরত্বকে কী বলা হয়?",
        options: ["ফোকাস দূরত্ব", "বক্রতা ব্যাসার্ধ", "দর্পণের ব্যাস", "প্রধান অক্ষ"],
        correctAnswer: 1
    },
    {
        question: "3. গোলীয় দর্পণের ফোকাস দূরত্ব (f) ও বক্রতা ব্যাসার্ধ (R) এর মধ্যে সম্পর্ক কোনটি?",
        options: ["f = R", "f = R/2", "f = 2R", "f = R/3"],
        correctAnswer: 1
    },
    {
        question: "4. কোনো দর্পণের প্রধান ফোকাসের সংজ্ঞা কী?",
        options: ["দর্পণের কেন্দ্র", "আলো যেখানে জমা হয়", "মেরু থেকে বক্রতা কেন্দ্রের দূরত্ব", "প্রধান অক্ষের সমান্তরাল রশ্মি যেখানে মিলিত হয় বা বিচ্যুত হয় বলে মনে হয়"],
        correctAnswer: 3
    },
    {
        question: "5. অবতল দর্পণে অসীম দূরের কোনো বস্তুর প্রতিবিম্ব কেমন হয়?",
        options: ["অসীম দূরে", "মেরুতে", "ফোকাসে (বাস্তব ও সূক্ষ্ম)", "বক্রতা কেন্দ্রে"],
        correctAnswer: 2
    },
    {
        question: "6. অবতল দর্পণের ফোকাস কী ধরনের?",
        options: ["আভাসিক", "বাস্তব", "সমতল", "বিচ্ছুরিত"],
        correctAnswer: 1
    },
    {
        question: "7. উত্তল দর্পণের ফোকাস কী ধরনের?",
        options: ["বাস্তব", "আভাসিক", "মেরুর ওপরে", "বক্রতা কেন্দ্রের বাইরে"],
        correctAnswer: 1
    },
    {
        question: "8. গোলীয় দর্পণের মেরুকে কী চিহ্ন দিয়ে প্রকাশ করা হয়?",
        options: ["C", "F", "P", "R"],
        correctAnswer: 2
    },
    {
        question: "9. গোলীয় দর্পণের বক্রতা কেন্দ্রকে কোন অক্ষর দিয়ে বোঝানো হয়?",
        options: ["P", "F", "C", "O"],
        correctAnswer: 2
    },
    {
        question: "10. দর্পণের প্রতিফলন পৃষ্ঠের কেন্দ্রবিন্দুকে কী বলে?",
        options: ["মেরু", "ফোকাস", "বক্রতা কেন্দ্র", "অক্ষাংশ"],
        correctAnswer: 0
    },
    {
        question: "11. একটি অবতল দর্পণের সম্মুখে বস্তু অসীম দূরে থাকলে প্রতিবিম্ব কোথায় গঠিত হয়?",
        options: ["P এবং F এর মাঝে", "F-তে", "C-তে", "অসীম দূরে"],
        correctAnswer: 1
    },
    {
        question: "12. অবতল দর্পণে বস্তু C এবং F এর মাঝে থাকলে প্রতিবিম্ব কেমন হয়?",
        options: ["আভাসিক, খাড়া, বড়", "বাস্তব, উল্টো, বড়", "বাস্তব, উল্টো, ছোট", "আভাসিক, উল্টো, সমান"],
        correctAnswer: 1
    },
    {
        question: "13. গোলীয় দর্পণের প্রতিবিম্ব গঠনের সময় চিহ্ন প্রথা অনুযায়ী দর্পণের সম্মুখের দূরত্বকে কী চিহ্ন দেওয়া হয়?",
        options: ["ধনাত্মক", "ঋণাত্মক", "শূন্য", "উভয় সম্ভব"],
        correctAnswer: 1
    },
    {
        question: "14. দর্পণের সূত্র কোনটি?",
        options: ["1/u + 1/v = 1/f", "1/u + 1/v = 2/R", "1/u - 1/v = 1/f", "u + v = f"],
        correctAnswer: 0
    },
    {
        question: "15. গোলীয় দর্পণের বিবর্ধন (m) এর সূত্র কোনটি?",
        options: ["m = v/u", "m = -v/u", "m = u/v", "m = f/u"],
        correctAnswer: 1
    },
    {
        question: "16. কোনো উত্তল দর্পণের সম্মুখে বস্তু যেখানেই রাখা হোক না কেন, প্রতিবিম্ব কীরূপ হবে?",
        options: ["বাস্তব ও উল্টো", "আভাসিক ও খাড়া", "বাস্তব ও খাড়া", "অনন্ত দূরে"],
        correctAnswer: 1
    },
    {
        question: "17. উত্তল দর্পণের ক্ষেত্রে ফোকাস দূরত্বের চিহ্ন কী হয়?",
        options: ["ধনাত্মক", "ঋণাত্মক", "শূন্য", "অনির্দিষ্ট"],
        correctAnswer: 0
    },
    {
        question: "18. কোনো গোলীয় দর্পণের বক্রতা ব্যাসার্ধ 20 সেমি হলে ফোকাস দূরত্ব কত?",
        options: ["20 সেমি", "40 সেমি", "10 সেমি", "5 সেমি"],
        correctAnswer: 2
    },
    {
        question: "19. দর্পণের বিবর্ধন -2 হলে কী বোঝায়?",
        options: ["প্রতিবিম্ব আভাসিক ও ছোট", "প্রতিবিম্ব বাস্তব ও উল্টো এবং বস্তুর চেয়ে বড়", "প্রতিবিম্ব খাড়া ও সমান", "প্রতিবিম্ব অসীমে"],
        correctAnswer: 1
    },
    {
        question: "20. প্যানকেক বা রোড ভিউ আয়নায় কোন দর্পণ ব্যবহার করা হয়?",
        options: ["সমতল দর্পণ", "অবতল দর্পণ", "উত্তল দর্পণ", "প্যারাবোলিক দর্পণ"],
        correctAnswer: 2
    },
    {
        question: "21. দাঁতের ডাক্তাররা দাঁতের বড় প্রতিবিম্ব দেখার জন্য কোন দর্পণ ব্যবহার করেন?",
        options: ["উত্তল", "সমতল", "অবতল", "সমতল ও উত্তল"],
        correctAnswer: 2
    },
    {
        question: "22. গোলীয় দর্পণের প্রধান অক্ষ কাকে বলে?",
        options: ["মেরু ও বক্রতা কেন্দ্রের সংযোগকারী রেখা", "মেরু ও ফোকাসের সংযোগকারী রেখা", "যেকোনো জ্যা", "দর্পণের প্রান্তের সংযোগকারী রেখা"],
        correctAnswer: 0
    },
    {
        question: "23. আলোর প্রতিফলনের সূত্রানুযায়ী আপতন কোণ ও প্রতিফলন কোণের মধ্যে সম্পর্ক কী?",
        options: ["আপতন কোণ = ২ × প্রতিফলন কোণ", "আপতন কোণ = প্রতিফলন কোণ", "আপতন কোণ > প্রতিফলন কোণ", "আপতন কোণ < প্রতিফলন কোণ"],
        correctAnswer: 1
    },
    {
        question: "24. গোলীয় দর্পণের জন্য ফোকাস দূরত্ব পরিমাপ করা হয় কোন বিন্দু থেকে?",
        options: ["বক্রতা কেন্দ্র থেকে", "মেরু থেকে", "প্রান্ত থেকে", "অভিলম্ব বরাবর"],
        correctAnswer: 1
    },
    {
        question: "25. একটি অবতল দর্পণে বস্তু F ও P এর মাঝে থাকলে প্রতিবিম্ব কীরূপ হয়?",
        options: ["বাস্তব ও বড়", "আভাসিক ও বড়", "বাস্তব ও ছোট", "আভাসিক ও ছোট"],
        correctAnswer: 1
    },
    {
        question: "26. কোনো দর্পণে m = +0.5 হলে কী বুঝবেন?",
        options: ["প্রতিবিম্ব বাস্তব, উল্টো এবং ছোট", "প্রতিবিম্ব আভাসিক, খাড়া এবং ছোট", "প্রতিবিম্ব বাস্তব ও সমান", "প্রতিবিম্ব আভাসিক ও বড়"],
        correctAnswer: 1
    },
    {
        question: "27. দর্পণ সূত্রে u কে কী বলা হয়?",
        options: ["প্রতিবিম্ব দূরত্ব", "বস্তু দূরত্ব", "ফোকাস দূরত্ব", "বক্রতা ব্যাসার্ধ"],
        correctAnswer: 1
    },
    {
        question: "28. দর্পণ সূত্রে v এর মান ধনাত্মক হলে প্রতিবিম্ব কোথায় গঠিত হয়?",
        options: ["দর্পণের সম্মুখে (বাস্তব)", "দর্পণের পেছনে (আভাসিক)", "ফোকাসে", "বক্রতা কেন্দ্রে"],
        correctAnswer: 1
    },
    {
        question: "29. গাড়ির সাইড ভিউ মিরর হিসেবে কোন দর্পণ বেশি উপযোগী?",
        options: ["সমতল", "অবতল", "উত্তল", "প্যারাবোলিক"],
        correctAnswer: 2
    },
    {
        question: "30. একটি বস্তুকে উত্তল দর্পণের সামনে 30 cm দূরে রাখায় 15 cm ফোকাস দূরত্বের দর্পণে প্রতিবিম্বের অবস্থান কত?",
        options: ["30 cm (পেছনে)", "10 cm (পেছনে)", "20 cm (সম্মুখে)", "15 cm (পেছনে)"],
        correctAnswer: 1
    },
    {
        question: "31. দর্পণের বিবর্ধনের মান 1 থেকে কম হলে কী বোঝায়?",
        options: ["প্রতিবিম্ব বিবর্ধিত", "প্রতিবিম্ব সঙ্কুচিত", "প্রতিবিম্ব সমান", "প্রতিবিম্ব অসীম"],
        correctAnswer: 1
    },
    {
        question: "32. গোলীয় দর্পণের ফোকাস বিন্দুকে কী চিহ্ন দেওয়া হয়?",
        options: ["P", "C", "F", "R"],
        correctAnswer: 2
    },
    {
        question: "33. একটি অবতল দর্পণের ফোকাস দূরত্ব 10 cm। বক্রতা কেন্দ্র কত দূরে থাকবে?",
        options: ["10 cm", "20 cm", "5 cm", "30 cm"],
        correctAnswer: 1
    },
    {
        question: "34. দর্পণের পৃষ্ঠ খাড়াভাবে কাটলে যে কাল্পনিক রেখা পাওয়া যায় তাকে কী বলে?",
        options: ["প্রধান অক্ষ", "আপতন বিন্দু", "অভিলম্ব", "প্রান্তরেখা"],
        correctAnswer: 2
    },
    {
        question: "35. আলোক রশ্মি দর্পণের প্রধান ফোকাস দিয়ে প্রতিফলিত হয়ে কী পথে চলে?",
        options: ["মেরু দিয়ে", "প্রধান অক্ষের সমান্তরাল", "বক্রতা কেন্দ্র দিয়ে", "যেকোনো পথে"],
        correctAnswer: 1
    },
    {
        question: "36. চাঁদের আলো পৃথিবীতে প্রতিফলনের কোন নীতি মেনে আসে?",
        options: ["অভিন্ন প্রতিফলন", "ব্যাপ্ত প্রতিফলন", "কোণীয় প্রতিফলন", "শোষণ"],
        correctAnswer: 0
    },
    {
        question: "37. গোলীয় দর্পণের প্রতিফলন ঘটে কোন পৃষ্ঠে?",
        options: ["সমতল পৃষ্ঠে", "গোলকের অংশবিশেষে", "অনিয়ত পৃষ্ঠে", "প্রিজমের ভেতরে"],
        correctAnswer: 1
    },
    {
        question: "38. অবতল দর্পণে বস্তু C-তে থাকলে প্রতিবিম্ব কোথায় গঠিত হয়?",
        options: ["অসীমে", "F-তে", "C-তে (বাস্তব, উল্টো, সমান)", "P-তে"],
        correctAnswer: 2
    },
    {
        question: "39. আলোর প্রতিফলনে আপতন রশ্মি, প্রতিফলন রশ্মি এবং অভিলম্ব কীরূপ?",
        options: ["পৃথক সমতলে থাকে", "একই সমতলে থাকে", "পরস্পর লম্ব", "পরস্পর সমান্তরাল"],
        correctAnswer: 1
    },
    {
        question: "40. দর্পণের কোনো বস্তুর প্রতিবিম্ব অসীম দূরে গঠিত হয়, বস্তু কোথায় থাকবে?",
        options: ["F এবং C এর মাঝে", "F-তে", "C-তে", "P-তে"],
        correctAnswer: 1
    },
    {
        question: "41. উত্তর দর্পণের প্রতিবিম্ব সর্বদা কীরূপ হয়?",
        options: ["বাস্তব", "উল্টো", "খাড়া ও আভাসিক", "বিবর্ধিত"],
        correctAnswer: 2
    },
    {
        question: "42. যদি কোনো দর্পণের বিবর্ধন m = -1 হয়, তাহলে বস্তু কোথায় অবস্থিত?",
        options: ["F-তে", "C এবং F এর মাঝে", "C-তে", "অসীমে"],
        correctAnswer: 2
    },
    {
        question: "43. গোলীয় দর্পণের বক্রতা কেন্দ্র দিয়ে গমনকারী রশ্মি প্রতিফলনের পর কীরূপ হয়?",
        options: ["একই পথে ফিরে আসে", "ফোকাস দিয়ে যায়", "মেরুতে যায়", "সমান্তরাল হয়"],
        correctAnswer: 0
    },
    {
        question: "44. দর্পণের ক্ষেত্রে প্রতিবিম্বের দূরত্ব ও বস্তুর দূরত্ব সমান হয় কোন অবস্থায়?",
        options: ["বস্তু F তে থাকলে", "বস্তু C তে থাকলে", "বস্তু অসীমে থাকলে", "বস্তু P তে থাকলে"],
        correctAnswer: 1
    },
    {
        question: "45. নিচের কোনটি অভিন্ন প্রতিফলনের উদাহরণ?",
        options: ["কাগজে প্রতিফলন", "কালো বোর্ডে প্রতিফলন", "সমতল দর্পণে প্রতিফলন", "মেঝেতে প্রতিফলন"],
        correctAnswer: 2
    },
    {
        question: "46. দর্পণের পোলারিটি (চিহ্ন প্রথা) মতে, অবতল দর্পণের ফোকাস দূরত্ব কীরূপ হয়?",
        options: ["সর্বদা ধনাত্মক", "সর্বদা ঋণাত্মক", "কখনো ধনাত্মক, কখনো ঋণাত্মক", "শূন্য"],
        correctAnswer: 1
    },
    {
        question: "47. আভাসিক প্রতিবিম্ব সম্পর্কে নিচের কোন বক্তব্যটি সঠিক?",
        options: ["পর্দায় ধরা যায়", "দর্পণের পেছনে গঠিত হয়", "সর্বদা উল্টো হয়", "সর্বদা বিবর্ধিত হয়"],
        correctAnswer: 1
    },
    {
        question: "48. কোনো বস্তুকে উত্তল দর্পণের সামনে কোনো দূরত্বে রাখলে প্রতিবিম্ব কোথায় হয়?",
        options: ["F এবং P এর মাঝে (দর্পণের পেছনে)", "C এর বাইরে", "F এর বাইরে", "অসীমে"],
        correctAnswer: 0
    },
    {
        question: "49. নিচের কোন দর্পণের ফোকাস দূরত্ব ধনাত্মক?",
        options: ["অবতল দর্পণ", "উত্তল দর্পণ", "উভয় দর্পণ", "সমতল দর্পণ"],
        correctAnswer: 1
    },
    {
        question: "50. আলোর প্রতিফলনের একটি মৌলিক ব্যবহার কী?",
        options: ["প্রিজমে বর্ণবিয়োজন", "পেরিস্কোপ তৈরি", "লেন্সে প্রতিসরণ", "জলতরঙ্গ সৃষ্টি"],
        correctAnswer: 1
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
