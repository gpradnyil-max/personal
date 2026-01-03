/**
 * Advait's Math Adventure
 * A fun math learning app for kids
 * Supports Addition, Subtraction, and Multiplication
 */

// ===========================================
// CONFIGURATION
// ===========================================
const CONFIG = {
    // Tables to practice for multiplication
    TABLES: [1, 2, 3, 4, 5, 6, 10, 11],
    
    // Maximum multiplier
    MAX_MULTIPLIER: 10,
    
    // Timer settings (in seconds)
    TIMER_DURATION: 10,
    HURRY_UP_TIME: 7,
    
    // Points
    POINTS_PER_CORRECT: 10,
    BONUS_STREAK_MULTIPLIER: 5,
    
    // Snowfall streak trigger
    SNOWFALL_STREAK: 10,
    
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
    questionsAnswered: 0,
    challengeType: null, // 'addition', 'subtraction', 'multiplication'
    snowfallActive: false
};

// ===========================================
// DOM ELEMENTS
// ===========================================
const elements = {
    // Screens
    welcomeScreen: document.getElementById('welcome-screen'),
    configScreen: document.getElementById('config-screen'),
    gameScreen: document.getElementById('game-screen'),
    
    // Welcome screen
    challengeTiles: document.querySelectorAll('.challenge-tile'),
    
    // Config screen (for multiplication)
    tablesSelection: document.getElementById('tables-selection'),
    startBtn: document.getElementById('start-btn'),
    backToWelcomeBtn: document.getElementById('back-to-welcome-btn'),
    
    // Game screen
    score: document.getElementById('score'),
    timerText: document.getElementById('timer-text'),
    timerCircle: document.getElementById('timer-circle'),
    pauseBtn: document.getElementById('pause-btn'),
    pauseIcon: document.getElementById('pause-icon'),
    pauseOverlay: document.getElementById('pause-overlay'),
    resumeBtn: document.getElementById('resume-btn'),
    quitBtn: document.getElementById('quit-btn'),
    
    // Challenge badge
    challengeBadge: document.getElementById('challenge-badge'),
    challengeIcon: document.getElementById('challenge-icon'),
    challengeName: document.getElementById('challenge-name'),
    
    // Question
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    operator: document.getElementById('operator'),
    questionCard: document.getElementById('question-card'),
    hurryIndicator: document.getElementById('hurry-indicator'),
    answerInput: document.getElementById('answer-input'),
    submitBtn: document.getElementById('submit-btn'),
    feedback: document.getElementById('feedback'),
    
    // Effects
    celebrationContainer: document.getElementById('celebration-container'),
    particles: document.getElementById('particles'),
    snowfallContainer: document.getElementById('snowfall-container')
};

// ===========================================
// INITIALIZATION
// ===========================================
function init() {
    createBackgroundParticles();
    createTablesSelection();
    setupEventListeners();
    
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
    const allTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    allTables.forEach(table => {
        const btn = document.createElement('button');
        btn.className = 'table-btn';
        btn.textContent = table;
        btn.dataset.table = table;
        
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
    
    if (gameState.selectedTables.length === 0) {
        btn.classList.add('selected');
        gameState.selectedTables.push(table);
    }
}

function setupEventListeners() {
    // Challenge tiles
    elements.challengeTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            selectChallenge(tile.dataset.challenge);
        });
    });
    
    // Back to welcome
    elements.backToWelcomeBtn.addEventListener('click', goToWelcome);
    
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
// SCREEN NAVIGATION
// ===========================================
function selectChallenge(challengeType) {
    gameState.challengeType = challengeType;
    
    if (challengeType === 'multiplication') {
        // Show config screen for multiplication
        elements.welcomeScreen.classList.remove('active');
        elements.configScreen.classList.add('active');
    } else {
        // Start directly for addition/subtraction
        startGame();
    }
}

function goToWelcome() {
    elements.configScreen.classList.remove('active');
    elements.gameScreen.classList.remove('active');
    elements.welcomeScreen.classList.add('active');
    gameState.challengeType = null;
}

// ===========================================
// AUDIO
// ===========================================
let audioContext;

function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playSound(type) {
    if (!CONFIG.SOUNDS_ENABLED || !audioContext) return;
    
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch (type) {
        case 'correct':
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
            break;
            
        case 'wrong':
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
            break;
            
        case 'hurry':
            oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
            break;
            
        case 'tick':
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
            
        case 'snowfall':
            // Magical chime sound for snowfall
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(1047, audioContext.currentTime); // C6
            oscillator.frequency.setValueAtTime(1319, audioContext.currentTime + 0.1); // E6
            oscillator.frequency.setValueAtTime(1568, audioContext.currentTime + 0.2); // G6
            oscillator.frequency.setValueAtTime(2093, audioContext.currentTime + 0.3); // C7
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.6);
            break;
    }
}

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
    
    // Update challenge badge
    updateChallengeBadge();
    
    // Switch screens
    elements.welcomeScreen.classList.remove('active');
    elements.configScreen.classList.remove('active');
    elements.gameScreen.classList.add('active');
    
    // Generate first question
    generateQuestion();
}

function updateChallengeBadge() {
    const challengeInfo = {
        addition: { icon: '➕', name: 'Addition', operator: '+' },
        subtraction: { icon: '➖', name: 'Subtraction', operator: '−' },
        multiplication: { icon: '✖️', name: 'Multiplication', operator: '×' }
    };
    
    const info = challengeInfo[gameState.challengeType];
    elements.challengeIcon.textContent = info.icon;
    elements.challengeName.textContent = info.name;
    elements.operator.textContent = info.operator;
}

function generateQuestion() {
    let num1, num2, answer, operator;
    
    switch (gameState.challengeType) {
        case 'addition':
            // Generate addition questions: 1-digit + 1-digit OR 2-digit + 1-digit
            if (Math.random() < 0.5) {
                // 1-digit + 1-digit (e.g., 2+3, 5+7)
                num1 = Math.floor(Math.random() * 9) + 1; // 1-9
                num2 = Math.floor(Math.random() * 9) + 1; // 1-9
            } else {
                // 2-digit + 1-digit (e.g., 75+5, 99+4)
                num1 = Math.floor(Math.random() * 90) + 10; // 10-99
                num2 = Math.floor(Math.random() * 9) + 1; // 1-9
            }
            answer = num1 + num2;
            operator = '+';
            break;
            
        case 'subtraction':
            // Generate subtraction questions: 1-digit - 1-digit OR 2-digit - 1-digit
            if (Math.random() < 0.5) {
                // 1-digit - 1-digit (e.g., 9-4, 8-4)
                num1 = Math.floor(Math.random() * 9) + 1; // 1-9
                num2 = Math.floor(Math.random() * num1) + 1; // 1 to num1 (ensure positive result)
                if (num2 > num1) {
                    [num1, num2] = [num2, num1]; // Swap to ensure positive result
                }
            } else {
                // 2-digit - 1-digit (e.g., 89-9, 95-5)
                num1 = Math.floor(Math.random() * 90) + 10; // 10-99
                num2 = Math.floor(Math.random() * 9) + 1; // 1-9
            }
            answer = num1 - num2;
            operator = '−';
            break;
            
        case 'multiplication':
            // Pick random table from selected tables
            num1 = gameState.selectedTables[Math.floor(Math.random() * gameState.selectedTables.length)];
            num2 = Math.floor(Math.random() * CONFIG.MAX_MULTIPLIER) + 1;
            answer = num1 * num2;
            operator = '×';
            break;
    }
    
    // Store current question
    gameState.currentQuestion = {
        num1: num1,
        num2: num2,
        answer: answer
    };
    
    // Update display
    elements.num1.textContent = num1;
    elements.num2.textContent = num2;
    elements.operator.textContent = operator;
    
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
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timeLeft = CONFIG.TIMER_DURATION;
    updateTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
        if (gameState.isPaused) return;
        
        gameState.timeLeft--;
        updateTimerDisplay();
        
        if (gameState.timeLeft === CONFIG.TIMER_DURATION - CONFIG.HURRY_UP_TIME) {
            showHurryUp();
        }
        
        if (gameState.timeLeft <= 3 && gameState.timeLeft > 0) {
            playSound('tick');
        }
        
        if (gameState.timeLeft <= 0) {
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    elements.timerText.textContent = gameState.timeLeft;
    
    const circumference = 283;
    const progress = (gameState.timeLeft / CONFIG.TIMER_DURATION) * circumference;
    elements.timerCircle.style.strokeDashoffset = circumference - progress;
    
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
    
    elements.answerInput.style.animation = 'shake 0.3s ease';
    setTimeout(() => {
        elements.answerInput.style.animation = '';
    }, 300);
}

function handleTimeUp() {
    clearInterval(gameState.timerInterval);
    
    elements.feedback.textContent = '⏰ Time\'s up! Try again!';
    elements.feedback.className = 'feedback wrong';
    
    showSadEmoji();
    playSound('wrong');
    
    // Reset streak
    gameState.streak = 0;
    stopSnowfall();
    
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
    
    // Check for snowfall trigger (streak of 10)
    if (gameState.streak === CONFIG.SNOWFALL_STREAK) {
        startSnowfall();
    }
    
    // Update streak badge
    updateStreakBadge();
    
    // Next question after delay
    setTimeout(() => {
        generateQuestion();
    }, 1500);
}

function handleWrongAnswer() {
    elements.feedback.textContent = `😢 Try again! You can do it!`;
    elements.feedback.className = 'feedback wrong';
    
    // Reset streak
    gameState.streak = 0;
    updateStreakBadge();
    stopSnowfall();
    
    // Visual effects
    elements.questionCard.classList.add('wrong-shake');
    showSadEmoji();
    playSound('wrong');
    
    // Let them try again
    setTimeout(() => {
        elements.answerInput.value = '';
        elements.answerInput.focus();
        elements.questionCard.classList.remove('wrong-shake');
        startTimer();
    }, 1500);
}

function updateStreakBadge() {
    const existingBadge = document.querySelector('.streak-badge');
    if (existingBadge) {
        existingBadge.remove();
    }
    
    if (gameState.streak >= 3) {
        const badge = document.createElement('div');
        badge.className = 'streak-badge';
        badge.textContent = `🔥 ${gameState.streak} streak!`;
        elements.questionCard.appendChild(badge);
    }
}

// ===========================================
// SNOWFALL EFFECT
// ===========================================
function startSnowfall() {
    if (gameState.snowfallActive) return;
    
    gameState.snowfallActive = true;
    playSound('snowfall');
    
    // Show celebration message
    showSnowfallCelebration();
    
    // Create snowflakes
    createSnowflakes();
}

function showSnowfallCelebration() {
    const celebration = document.createElement('div');
    celebration.className = 'snowfall-celebration';
    celebration.innerHTML = `
        <div class="snowfall-message">
            ❄️ WOW! 10 in a row! ❄️
            <span>You're on FIRE! 🔥</span>
        </div>
    `;
    elements.celebrationContainer.appendChild(celebration);
    
    setTimeout(() => celebration.remove(), 3000);
}

function createSnowflakes() {
    const snowflakes = ['❄️', '❅', '❆', '✧', '✦', '⁕'];
    
    function createSnowflake() {
        if (!gameState.snowfallActive) return;
        
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;
        snowflake.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        elements.snowfallContainer.appendChild(snowflake);
        
        setTimeout(() => snowflake.remove(), 6000);
    }
    
    // Create initial burst
    for (let i = 0; i < 30; i++) {
        setTimeout(createSnowflake, i * 50);
    }
    
    // Continue creating snowflakes while active
    gameState.snowfallInterval = setInterval(() => {
        if (gameState.snowfallActive) {
            createSnowflake();
        }
    }, 150);
}

function stopSnowfall() {
    gameState.snowfallActive = false;
    if (gameState.snowfallInterval) {
        clearInterval(gameState.snowfallInterval);
        gameState.snowfallInterval = null;
    }
    
    // Clear remaining snowflakes after a delay
    setTimeout(() => {
        elements.snowfallContainer.innerHTML = '';
    }, 3000);
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
    clearInterval(gameState.timerInterval);
    stopSnowfall();
    
    gameState.isGameActive = false;
    gameState.isPaused = false;
    
    elements.pauseOverlay.classList.remove('show');
    elements.gameScreen.classList.remove('active');
    elements.welcomeScreen.classList.add('active');
}

// ===========================================
// CELEBRATION EFFECTS
// ===========================================
function showPartyPoppers() {
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
