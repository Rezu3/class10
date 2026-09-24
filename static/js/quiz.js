// quiz.js - Shared quiz functionality

document.addEventListener('DOMContentLoaded', function() {
    // Add confetti effect for correct answers
    window.createConfetti = function() {
        const colors = ['#4361ee', '#7209b7', '#4cc9f0', '#f72585', '#f8961e'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = Math.random() * 8 + 4 + 'px';
            confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
            confetti.style.animationDelay = Math.random() * 1 + 's';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }
    };
    
    // Format time from seconds to MM:SS
    window.formatTime = function(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    // Initialize timer with callback
    window.initTimer = function(seconds, onTimeUp) {
        // FIX: id বা class দুটোই support করে
        const timerElement = document.querySelector('#timer') || document.querySelector('.timer');
        
        if (!timerElement) return null;
        
        let timeLeft = seconds;
        let timerInterval;
        
        const updateTimerDisplay = () => {
            // FIX: শুধু number বসালে icon হারিয়ে যায়, তাই innerHTML ব্যবহার
            timerElement.innerHTML = `<i class="fas fa-clock"></i> ${timeLeft}s`;
            
            if (timeLeft <= 10) {
                timerElement.classList.add('danger');
                timerElement.classList.remove('warning');
            } else if (timeLeft <= 20) {
                timerElement.classList.add('warning');
                timerElement.classList.remove('danger');
            } else {
                timerElement.classList.remove('warning', 'danger');
            }
        };
        
        const startTimer = () => {
            updateTimerDisplay();
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    if (onTimeUp) onTimeUp();
                }
            }, 1000);
        };
        
        const stopTimer = () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
        
        const resetTimer = (newSeconds = seconds) => {
            stopTimer();
            timeLeft = newSeconds;
            updateTimerDisplay();
        };
        
        return { startTimer, stopTimer, resetTimer, timeLeft: () => timeLeft };
    };
    
    // Play sound effects
    window.playSound = function(type) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'correct') {
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            } else if (type === 'incorrect') {
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            }
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (e) {
            // Audio not supported, fail silently
        }
    };
    
    // Update progress bar
    window.updateProgressBar = function(current, total) {
        // FIX: id বা class দুটোই support করে
        const progressBar = document.querySelector('#progress-fill') || document.querySelector('.progress');
        if (progressBar) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    };
});
