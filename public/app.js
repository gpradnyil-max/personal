/**
 * Advait's Math Adventure
 * A fun multiplication learning app for kids
 * 
 * Configuration: Adjust TABLES array to add more tables as the child progresses
 */

// ===========================================
// CONFIGURATION - Adjust these as needed!
// ===========================================
const CONFIG = {
    // Tables to practice (add more numbers as child progresses)
    // Currently: 1-6, 10, 11 as requested
    TABLES: [1, 2, 3, 4, 5, 6, 10, 11],
    
    // Maximum multiplier (questions will be: TABLE × 1 to TABLE × MAX_MULTIPLIER)
    MAX_MULTIPLIER: 12,
    
    // Timer settings (in seconds)
    TIMER_DURATION: 10,
    HURRY_UP_TIME: 7,  // Start warning after this many seconds
    
    // Points
    POINTS_PER_CORRECT: 10,
    BONUS_STREAK_MULTIPLIER: 5,  // Extra points per streak after 3
    
    // Sounds enabled
    SOUNDS_ENABLED: true
};

// ===========================================
// GAME STATE
// ===========================================
let gameState = {
    score: 0,
    currentQuestion: null,
    timeLeft: CONFIG.TIMER_DURATION,
    isPaused: false,
    isGameActive: false,
    timerInterval: null,
    selectedTables: [...CONFIG.TABLES],
    streak: 0,
    questionsAnswered: 0
};

// ===========================================
// DOM ELEMENTS
// ===========================================
const elements = {
    // Screens
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    
    // Start screen
    tablesSelection: document.getElementById('tables-selection'),
    startBtn: document.getElementById('start-btn'),
    
    // Game screen
    score: document.getElementById('score'),
    timerText: document.getElementById('timer-text'),
    timerCircle: document.getElementById('timer-circle'),
    pauseBtn: document.getElementById('pause-btn'),
    pauseIcon: document.getElementById('pause-icon'),
    pauseOverlay: document.getElementById('pause-overlay'),
    resumeBtn: document.getElementById('resume-btn'),
    quitBtn: document.getElementById('quit-btn'),
    
    // Question
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    questionCard: document.getElementById('question-card'),
    hurryIndicator: document.getElementById('hurry-indicator'),
    answerInput: document.getElementById('answer-input'),
    submitBtn: document.getElementById('submit-btn'),
    feedback: document.getElementById('feedback'),
    
    // Effects
    celebrationContainer: document.getElementById('celebration-container'),
    particles: document.getElementById('particles')
};

// ===========================================
// INITIALIZATION
// ===========================================
function init() {
    createBackgroundParticles();
    createTablesSelection();
    setupEventListeners();
    
    // Pre-create audio context for sounds
    if (CONFIG.SOUNDS_ENABLED) {
        initAudio();
    }
}

function createBackgroundParticles() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.width = (Math.random() * 15 + 5) + 'px';
        particle.style.height = particle.style.width;
        elements.particles.appendChild(particle);
    }
}

function createTablesSelection() {
    // Create buttons for tables 1-12
    const allTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    allTables.forEach(table => {
        const btn = document.createElement('button');
        btn.className = 'table-btn';
        btn.textContent = table;
        btn.dataset.table = table;
        
        // Pre-select configured tables
        if (CONFIG.TABLES.includes(table)) {
            btn.classList.add('selected');
        }
        
        btn.addEventListener('click', () => toggleTable(btn, table));
        elements.tablesSelection.appendChild(btn);
    });
}

function toggleTable(btn, table) {
    btn.classList.toggle('selected');
    
    if (gameState.selectedTables.includes(table)) {
        gameState.selectedTables = gameState.selectedTables.filter(t => t !== table);
    } else {
        gameState.selectedTables.push(table);
    }
    
    // Ensure at least one table is selected
    if (gameState.selectedTables.length === 0) {
        btn.classList.add('selected');
        gameState.selectedTables.push(table);
    }
}

function setupEventListeners() {
    // Start game
    elements.startBtn.addEventListener('click', startGame);
    
    // Pause/Resume
    elements.pauseBtn.addEventListener('click', togglePause);
    elements.resumeBtn.addEventListener('click', resumeGame);
    elements.quitBtn.addEventListener('click', quitGame);
    
    // Submit answer
    elements.submitBtn.addEventListener('click', checkAnswer);
    elements.answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && gameState.isGameActive) {
            togglePause();
        }
    });
}

// ===========================================
// AUDIO
// ===========================================
let audioContext;
let sounds = {};

function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playSound(type) {
    if (!CONFIG.SOUNDS_ENABLED || !audioContext) return;
    
    // Resume audio context if suspended (browser autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch (type) {
        case 'correct':
            // Happy ascending sound
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
            break;
            
        case 'wrong':
            // Sad descending sound
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
            break;
            
        case 'hurry':
            // Alert beep
            oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
            break;
            
        case 'tick':
            // Subtle tick for last 3 seconds
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
    }
}

// Speech synthesis for hurry up message
function speakHurryUp() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('Hurry up!');
        utterance.rate = 1.2;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
    }
}

// ===========================================
// GAME LOGIC
// ===========================================
function startGame() {
    // Reset game state
    gameState.score = 0;
    gameState.streak = 0;
    gameState.questionsAnswered = 0;
    gameState.isGameActive = true;
    gameState.isPaused = false;
    
    // Update UI
    elements.score.textContent = '0';
    
    // Switch screens
    elements.startScreen.classList.remove('active');
    elements.gameScreen.classList.add('active');
    
    // Generate first question
    generateQuestion();
}

function generateQuestion() {
    // Pick random table from selected tables
    const table = gameState.selectedTables[Math.floor(Math.random() * gameState.selectedTables.length)];
    
    // Pick random multiplier (1 to MAX_MULTIPLIER)
    const multiplier = Math.floor(Math.random() * CONFIG.MAX_MULTIPLIER) + 1;
    
    // Store current question
    gameState.currentQuestion = {
        num1: table,
        num2: multiplier,
        answer: table * multiplier
    };
    
    // Update display
    elements.num1.textContent = table;
    elements.num2.textContent = multiplier;
    
    // Clear previous state
    elements.answerInput.value = '';
    elements.feedback.textContent = '';
    elements.feedback.className = 'feedback';
    elements.questionCard.classList.remove('correct-glow', 'wrong-shake');
    elements.hurryIndicator.classList.remove('show');
    
    // Focus input
    elements.answerInput.focus();
    
    // Start timer
    startTimer();
}

function startTimer() {
    // Clear any existing timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timeLeft = CONFIG.TIMER_DURATION;
    updateTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
        if (gameState.isPaused) return;
        
        gameState.timeLeft--;
        updateTimerDisplay();
        
        // Check for hurry up warning
        if (gameState.timeLeft === CONFIG.TIMER_DURATION - CONFIG.HURRY_UP_TIME) {
            showHurryUp();
        }
        
        // Tick sound for last 3 seconds
        if (gameState.timeLeft <= 3 && gameState.timeLeft > 0) {
            playSound('tick');
        }
        
        // Time's up
        if (gameState.timeLeft <= 0) {
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    elements.timerText.textContent = gameState.timeLeft;
    
    // Update circular progress
    const circumference = 283; // 2 * PI * 45
    const progress = (gameState.timeLeft / CONFIG.TIMER_DURATION) * circumference;
    elements.timerCircle.style.strokeDashoffset = circumference - progress;
    
    // Update colors based on time
    elements.timerText.classList.remove('warning', 'danger');
    elements.timerCircle.classList.remove('warning', 'danger');
    
    if (gameState.timeLeft <= 3) {
        elements.timerText.classList.add('danger');
        elements.timerCircle.classList.add('danger');
    } else if (gameState.timeLeft <= CONFIG.TIMER_DURATION - CONFIG.HURRY_UP_TIME) {
        elements.timerText.classList.add('warning');
        elements.timerCircle.classList.add('warning');
    }
}

function showHurryUp() {
    elements.hurryIndicator.classList.add('show');
    playSound('hurry');
    speakHurryUp();
    
    // Add visual shake to input
    elements.answerInput.style.animation = 'shake 0.3s ease';
    setTimeout(() => {
        elements.answerInput.style.animation = '';
    }, 300);
}

function handleTimeUp() {
    clearInterval(gameState.timerInterval);
    
    // Show timeout message - let them try again
    elements.feedback.textContent = '⏰ Time\'s up! Try again!';
    elements.feedback.className = 'feedback wrong';
    
    showSadEmoji();
    playSound('wrong');
    
    // Reset streak
    gameState.streak = 0;
    
    // Restart timer for retry
    setTimeout(() => {
        elements.feedback.textContent = '';
        elements.answerInput.value = '';
        elements.answerInput.focus();
        startTimer();
    }, 2000);
}

function checkAnswer() {
    const userAnswer = parseInt(elements.answerInput.value);
    
    if (isNaN(userAnswer)) {
        // No answer entered
        elements.answerInput.focus();
        return;
    }
    
    clearInterval(gameState.timerInterval);
    
    if (userAnswer === gameState.currentQuestion.answer) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
}

function handleCorrectAnswer() {
    gameState.streak++;
    gameState.questionsAnswered++;
    
    // Calculate points with streak bonus
    let points = CONFIG.POINTS_PER_CORRECT;
    if (gameState.streak > 3) {
        points += (gameState.streak - 3) * CONFIG.BONUS_STREAK_MULTIPLIER;
    }
    
    gameState.score += points;
    elements.score.textContent = gameState.score;
    
    // Show feedback
    const streakText = gameState.streak >= 3 ? ` 🔥 ${gameState.streak} streak!` : '';
    elements.feedback.textContent = `🎉 Correct! +${points} points${streakText}`;
    elements.feedback.className = 'feedback correct';
    
    // Visual effects
    elements.questionCard.classList.add('correct-glow');
    showPartyPoppers();
    playSound('correct');
    
    // Update streak badge
    updateStreakBadge();
    
    // Next question after delay
    setTimeout(() => {
        generateQuestion();
    }, 1500);
}

function handleWrongAnswer() {
    // Show sad feedback
    elements.feedback.textContent = `😢 Try again! You can do it!`;
    elements.feedback.className = 'feedback wrong';
    
    // Reset streak
    gameState.streak = 0;
    updateStreakBadge();
    
    // Visual effects
    elements.questionCard.classList.add('wrong-shake');
    showSadEmoji();
    playSound('wrong');
    
    // Let them try again - DON'T proceed to next question
    setTimeout(() => {
        elements.answerInput.value = '';
        elements.answerInput.focus();
        elements.questionCard.classList.remove('wrong-shake');
        
        // Restart timer for retry
        startTimer();
    }, 1500);
}

function updateStreakBadge() {
    // Remove existing badge
    const existingBadge = document.querySelector('.streak-badge');
    if (existingBadge) {
        existingBadge.remove();
    }
    
    // Add new badge if streak >= 3
    if (gameState.streak >= 3) {
        const badge = document.createElement('div');
        badge.className = 'streak-badge';
        badge.textContent = `🔥 ${gameState.streak} streak!`;
        elements.questionCard.appendChild(badge);
    }
}

// ===========================================
// PAUSE/RESUME
// ===========================================
function togglePause() {
    if (gameState.isPaused) {
        resumeGame();
    } else {
        pauseGame();
    }
}

function pauseGame() {
    gameState.isPaused = true;
    elements.pauseOverlay.classList.add('show');
    elements.pauseIcon.textContent = '▶️';
}

function resumeGame() {
    gameState.isPaused = false;
    elements.pauseOverlay.classList.remove('show');
    elements.pauseIcon.textContent = '⏸️';
    elements.answerInput.focus();
}

function quitGame() {
    // Stop timer
    clearInterval(gameState.timerInterval);
    
    // Reset state
    gameState.isGameActive = false;
    gameState.isPaused = false;
    
    // Hide pause overlay
    elements.pauseOverlay.classList.remove('show');
    
    // Switch screens
    elements.gameScreen.classList.remove('active');
    elements.startScreen.classList.add('active');
}

// ===========================================
// CELEBRATION EFFECTS
// ===========================================
function showPartyPoppers() {
    // Create multiple party poppers
    const positions = [
        { left: '20%', top: '30%' },
        { left: '80%', top: '30%' },
        { left: '50%', top: '20%' },
        { left: '30%', top: '50%' },
        { left: '70%', top: '50%' }
    ];
    
    positions.forEach((pos, index) => {
        setTimeout(() => {
            const popper = document.createElement('div');
            popper.className = 'party-popper';
            popper.textContent = '🎉';
            popper.style.left = pos.left;
            popper.style.top = pos.top;
            elements.celebrationContainer.appendChild(popper);
            
            setTimeout(() => popper.remove(), 1000);
        }, index * 100);
    });
    
    // Create confetti
    createConfetti();
}

function createConfetti() {
    const colors = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#007AFF', '#AF52DE', '#FF2D55'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            elements.celebrationContainer.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

function showSadEmoji() {
    const sadEmojis = ['😢', '😞', '🥺', '😿'];
    const emoji = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
    
    const sadDiv = document.createElement('div');
    sadDiv.className = 'sad-emoji';
    sadDiv.textContent = emoji;
    elements.celebrationContainer.appendChild(sadDiv);
    
    setTimeout(() => sadDiv.remove(), 1500);
}

// ===========================================
// START THE APP
// ===========================================
document.addEventListener('DOMContentLoaded', init);
