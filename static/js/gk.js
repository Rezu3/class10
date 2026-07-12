const gkQuestions = [
    {
        question: "১. পর্যায় সারণির জনক কাকে বলা হয়?",
        options: ["মেন্ডেলিভ", "মোসলে", "ডোবেরাইনার", "নিউল্যান্ডস"],
        correctAnswer: 0
    },
    {
        question: "২. মেন্ডেলিভের পর্যায় সূত্রটি মৌলদের কোন ধর্মের ওপর ভিত্তি করে গড়ে উঠেছিল?",
        options: ["পারমাণবিক সংখ্যা", "পারমাণবিক গুরুত্ব", "যোজ্যতা", "ইলেকট্রন বিন্যাস"],
        correctAnswer: 1
    },
    {
        question: "৩. আধুনিক পর্যায় সূত্রের ভিত্তি কী?",
        options: ["পারমাণবিক গুরুত্ব", "পারমাণবিক সংখ্যা", "ভর সংখ্যা", "আইসোটোপ সংখ্যা"],
        correctAnswer: 1
    },
    {
        question: "৪. দীর্ঘ পর্যায় সারণিতে মোট কয়টি পর্যায় রয়েছে?",
        options: ["৭টি", "৮টি", "৯টি", "১৮টি"],
        correctAnswer: 0
    },
    {
        question: "৫. আধুনিক দীর্ঘ পর্যায় সারণিতে মোট কয়টি শ্রেণী (Group) আছে?",
        options: ["৭টি", "৯টি", "১৮টি", "৮টি"],
        correctAnswer: 2
    },
    {
        question: "৬. পর্যায় সারণির প্রথম পর্যায়কে কী বলা হয়?",
        options: ["অতি হ্রস্ব পর্যায়", "হ্রস্ব পর্যায়", "দীর্ঘ পর্যায়", "অতি দীর্ঘ পর্যায়"],
        correctAnswer: 0
    },
    {
        question: "৭. প্রথম পর্যায়ে মৌলের সংখ্যা কয়টি?",
        options: ["২টি", "৮টি", "১৮টি", "৩২টি"],
        correctAnswer: 0
    },
    {
        question: "৮. নিচের কোনটি একটি ক্ষার ধাতু (Alkali Metal)?",
        options: ["Ca", "Mg", "Na", "Fe"],
        correctAnswer: 2
    },
    {
        question: "৯. ক্ষার ধাতুগুলি আধুনিক পর্যায় সারণির কোন শ্রেণীতে অবস্থিত?",
        options: ["১ নম্বর শ্রেণী", "২ নম্বর শ্রেণী", "১৭ নম্বর শ্রেণী", "১৮ নম্বর শ্রেণী"],
        correctAnswer: 0
    },
    {
        question: "১০. নিচের কোনটি ক্ষারীয় মৃত্তিকা ধাতু (Alkaline Earth Metal)?",
        options: ["Na", "K", "Mg", "Cu"],
        correctAnswer: 2
    },
    {
        question: "১১. ক্ষারীয় মৃত্তিকা ধাতুগুলি পর্যায় সারণির কোন শ্রেণীতে থাকে?",
        options: ["শ্রেণী ১", "শ্রেণী ২", "শ্রেণী ১৩", "শ্রেণী ১৫"],
        correctAnswer: 1
    },
    {
        question: "১২. হ্যালোজেন মৌলগুলি দীর্ঘ পর্যায় সারণির কোন শ্রেণীতে অবস্থিত?",
        options: ["১৬", "১৭", "১৮", "১"],
        correctAnswer: 1
    },
    {
        question: "১৩. নিচের কোনটি একটি হ্যালোজেন মৌল নয়?",
        options: ["ফ্লোরিন", "ক্লোরিন", "ব্রোমিন", "হিলিয়াম"],
        correctAnswer: 3
    },
    {
        question: "১৪. সবচেয়ে তড়িৎ-ঋণাত্মক (Highly Electronegative) মৌল কোনটি?",
        options: ["ক্লোরিন (Cl)", "ফ্লোরিন (F)", "অক্সিজেন (O)", "নাইট্রোজেন (N)"],
        correctAnswer: 1
    },
    {
        question: "১৫. নিষ্ক্রিয় গ্যাস বা নোবেল গ্যাসগুলি কোন শ্রেণীতে অবস্থান করে?",
        options: ["শ্রেণী ০ বা ১৮", "শ্রেণী ১৭", "শ্রেণী ১", "শ্রেণী ২"],
        correctAnswer: 0
    },
    {
        question: "১৬. নিচের কোনটি একটি নোবেল গ্যাস?",
        options: ["অক্সিজেন", "হাইড্রোজেন", "আর্গন", "ক্লোরিন"],
        correctAnswer: 2
    },
    {
        question: "১৭. মেন্ডেলিভের পর্যায় সারণিতে হাইড্রোজেনকে কোন কোন শ্রেণীর মৌলদের সাথে সাদৃশ্যের জন্য 'দুষ্ট মৌল' বলা হয়েছিল?",
        options: ["IA এবং VIIA", "IA এবং IIA", "IIA এবং VIIA", "IB এবং VIII"],
        correctAnswer: 0
    },
    {
        question: "১৮. মেন্ডেলিভ তার পর্যায় সারণি প্রকাশের সময় নিচের কোন মৌলটির অস্তিত্ব ভবিষ্যদ্বাণী করেছিলেন (একা-বোরন)?",
        options: ["স্ক্যান্ডিয়াম", "গ্যালিয়াম", "জার্মেনিয়াম", "টেকনেশিয়াম"],
        correctAnswer: 0
    },
    {
        question: "১৯. মেন্ডেলিভের 'একা-অ্যালুমিনিয়াম' পরবর্তীতে কোন মৌল হিসেবে আবিষ্কৃত হয়?",
        options: ["বোরন", "গ্যালিয়াম", "জার্মেনিয়াম", "সিলিকন"],
        correctAnswer: 1
    },
    {
        question: "২০. পর্যায় সারণির কোনো পর্যায়ের বাম দিক থেকে ডান দিকে গেলে পরমাণুর ব্যাসার্ধ বা আকার সাধারণত কেমন হয়?",
        options: ["বৃদ্ধি পায়", "হ্রাস পায়", "একই থাকে", "প্রথমে বাড়ে পরে কমে"],
        correctAnswer: 1
    },
    {
        question: "২১. কোনো শ্রেণীর ওপর থেকে নিচের দিকে নামলে পরমাণুর আকার সাধারণত কী হয়?",
        options: ["হ্রাস পায়", "বৃদ্ধি পায়", "অপরিবর্তিত থাকে", "কোনো নিয়ম মানে না"],
        correctAnswer: 1
    },
    {
        question: "২২. নিচের মৌলগুলির মধ্যে কোনটির পরমাণুর আকার সবচেয়ে ছোট?",
        options: ["Li", "Na", "K", "Rb"],
        correctAnswer: 0
    },
    {
        question: "২৩. নিচের মৌলগুলির মধ্যে কোনটির পারমাণবিক ব্যাসার্ধ সবচেয়ে বেশি?",
        options: ["F", "Cl", "Br", "I"],
        correctAnswer: 3
    },
    {
        question: "২৪. বাম দিক থেকে ডান দিকে গেলে মৌলদের ধাতব ধর্ম (Metallic Character):",
        options: ["বৃদ্ধি পায়", "হ্রাস পায়", "একই থাকে", "প্রথমে কমে পরে বাড়ে"],
        correctAnswer: 1
    },
    {
        question: "২৫. একটি শ্রেণীর ওপর থেকে নিচের দিকে নামলে অধাতব ধর্ম (Non-metallic Character):",
        options: ["বৃদ্ধি পায়", "হ্রাস পায়", "অপরিবর্তিত থাকে", "হঠাৎ বাড়ে"],
        correctAnswer: 1
    },
    {
        question: "২৬. দ্বিতীয় পর্যায়ে তীব্র জারণধর্মী মৌল কোনটি?",
        options: ["লিথিয়াম", "কার্বন", "নাইট্রোজেন", "ফ্লোরিন"],
        correctAnswer: 3
    },
    {
        question: "২৭. নিচের কোনটি একটি সন্ধিগত মৌল (Transition Element)?",
        options: ["Ca", "Fe", "Na", "Al"],
        correctAnswer: 1
    },
    {
        question: "২৮. চতুর্থ পর্যায়ে কয়টি সন্ধিগত মৌল আছে?",
        options: ["৮টি", "১০টি", "১৮টি", "২টি"],
        correctAnswer: 1
    },
    {
        question: "২৯. ইউরেনিয়াম-উত্তর মৌল বা নেপচুনিয়াম-পরবর্তী কৃত্রিম মৌল (Transuranic Element) কোনটি?",
        options: ["প্লুটোনিয়াম", "থোরিয়াম", "ইউরেনিয়াম", "রেডিয়াম"],
        correctAnswer: 0
    },
    {
        question: "৩০. কোনো মৌলের গ্যাসীয় অবস্থায় তার বহিস্থ কক্ষ থেকে একটি ইলেকট্রন বের করতে যে ন্যূনতম শক্তির প্রয়োজন হয়, তাকে কী বলে?",
        options: ["তড়িৎ ঋণাত্মকতা", "ইলেকট্রন আসক্তি", "আয়নন শক্তি (Ionisation Energy)", "পরমাণু শক্তি"],
        correctAnswer: 2
    },
    {
        question: "৩১. পর্যায় সারণির কোনো পর্যায়ের বাম দিক থেকে ডান দিকে গেলে আয়নন শক্তি সাধারণত:",
        options: ["হ্রাস পায়", "বৃদ্ধি পায়", "একই থাকে", "প্রথমে বৃদ্ধি পায় পরে হ্রাস পায়"],
        correctAnswer: 1
    },
    {
        question: "৩২. দীর্ঘ পর্যায় সারণির সবচেয়ে হালকা ক্ষার ধাতু কোনটি?",
        options: ["Na", "Li", "K", "Cs"],
        correctAnswer: 1
    },
    {
        question: "৩৩. পর্যায় সারণির কোন মৌলটির ইলেকট্রন আসক্তি (Electron Affinity) সবচেয়ে বেশি?",
        options: ["ফ্লোরিন (F)", "ক্লোরিন (Cl)", "ব্রোমিন (Br)", "আয়োডিন (I)"],
        correctAnswer: 1
    },
    {
        question: "৩৪. নিচের কোনটি একটি চ্যালকোজেন (Chalcogen) মৌল?",
        options: ["নাইট্রোজেন", "অক্সিজেন", "ফ্লোরিন", "হিলিয়াম"],
        correctAnswer: 1
    },
    {
        question: "৩৫. চ্যালকোজেন মৌলগুলি আধুনিক পর্যায় সারণির কোন শ্রেণীতে থাকে?",
        options: ["১৫ নম্বর শ্রেণী", "১৬ নম্বর শ্রেণী", "১৭ নম্বর শ্রেণী", "১৮ নম্বর শ্রেণী"],
        correctAnswer: 1
    },
    {
        question: "৩৬. ত্রয়ী সূত্র (Law of Triads) কে প্রবর্তন করেন?",
        options: ["নিউল্যান্ডস", "ডোবেরাইনার", "মেন্ডেলিভ", "লথার মেয়ার"],
        correctAnswer: 1
    },
    {
        question: "৩৭. অষ্টক সূত্র (Law of Octaves) কার দ্বারা প্রবর্তিত হয়েছিল?",
        options: ["ডোবেরাইনার", "মোসলে", "নিউল্যান্ডস", "মেন্ডেলিভ"],
        correctAnswer: 2
    },
    {
        question: "৩৮. ল্যান্থানাইড মৌলগুলির (Lanthanides) মোট সংখ্যা কয়টি?",
        options: ["১০টি", "১৪টি", "১৮টি", "৩২টি"],
        correctAnswer: 1
    },
    {
        question: "৩৯. অ্যাক্টিনাইড মৌলগুলি (Actinides) পর্যায় সারণির কোন পর্যায়ে অবস্থিত?",
        options: ["৫ম পর্যায়", "৬ষ্ঠ পর্যায়", "৭ম পর্যায়", "৪র্থ পর্যায়"],
        correctAnswer: 2
    },
    {
        question: "৪০. নিচের কোন ধর্মটি মৌলদের পর্যায়গত ধর্ম (Periodic Property) নয়?",
        options: ["পারমাণবিক ব্যাসার্ধ", "আয়নন শক্তি", "তেজস্ক্রিয়তা", "তড়িৎ ঋণাত্মকতা"],
        correctAnswer: 2
    },
    {
        question: "৪১. একটি তরল হ্যালোজেন মৌলের নাম কী?",
        options: ["ক্লোরিন", "ফ্লোরিন", "ব্রোমিন", "আয়োডিন"],
        correctAnswer: 2
    },
    {
        question: "৪২. একটি কঠিন হ্যালোজেন মৌল কোনটি?",
        options: ["ব্রোমিন", "ক্লোরিন", "আয়োডিন", "ফ্লোরিন"],
        correctAnswer: 2
    },
    {
        question: "৪৩. মুদ্রা ধাতু (Coinage Metals) যেমন Cu, Ag, Au পর্যায় সারণির কোন শ্রেণীতে অবস্থিত?",
        options: ["শ্রেণী ১", "শ্রেণী ১১", "শ্রেণী ১২", "শ্রেণী ২"],
        correctAnswer: 1
    },
    {
        question: "৪৪. পর্যায় সারণির কোন শ্রেণীতে কঠিন, তরল ও গ্যাসীয়—তিন প্রকার মৌলই দেখা যায়?",
        options: ["শ্রেণী ১", "শ্রেণী ২", "শ্রেণী ১৭", "শ্রেণী ১৮"],
        correctAnswer: 2
    },
    {
        question: "৪৫. নিচের কোন মৌলটি সবচেয়ে তীব্র বিজারণধর্মী?",
        options: ["Li", "Na", "K", "Cs"],
        correctAnswer: 3
    },
    {
        question: "৪৬. কোনো মৌলের পরমাণুর যোজ্যতা কিসের ওপর নির্ভর করে?",
        options: ["সবচেয়ে ভেতরের কক্ষের ইলেকট্রন সংখ্যার ওপর", "সবচেয়ে বাইরের কক্ষের (যোজ্যতা কক্ষ) ইলেকট্রন সংখ্যার ওপর", "প্রোটন সংখ্যার ওপর", "নিউট্রন সংখ্যার ওপর"],
        correctAnswer: 1
    },
    {
        question: "৪৭. মেন্ডেলিভের আদি পর্যায় সারণিতে মোট কয়টি পর্যায় এবং শ্রেণী ছিল?",
        options: ["৭টি পর্যায় ও ৮টি শ্রেণী", "৭টি পর্যায় ও ৯টি শ্রেণী", "৬টি পর্যায় ও ৮টি শ্রেণী", "৭টি পর্যায় ও ১৮টি শ্রেণী"],
        correctAnswer: 0
    },
    {
        question: "৪৮. নিক্টোজেন (Pnictogen) বা শ্বাসরোধকারী মৌল কোন শ্রেণীর মৌলদের বলা হয়?",
        options: ["শ্রেণী ১৪", "শ্রেণী ১৫", "শ্রেণী ১৬", "শ্রেণী ১৭"],
        correctAnswer: 1
    },
    {
        question: "৪৯. নিচের কোনটি একটি ধাতুকল্প (Metalloid)?",
        options: ["সিলিকন (Si)", "সোডিয়াম (Na)", "কার্বন (C)", "লোহা (Fe)"],
        correctAnswer: 0
    },
    {
        question: "৫০. দীর্ঘ পর্যায় সারণির দ্বিতীয় ও তৃতীয় পর্যায়কে কী বলা হয়?",
        options: ["অতি হ্রস্ব পর্যায়", "হ্রস্ব পর্যায়", "দীর্ঘ পর্যায়", "পূর্ণ পর্যায়"],
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
