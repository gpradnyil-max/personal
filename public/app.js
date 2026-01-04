/**
 * Advait's Learning Adventure
 * A fun learning app for kids
 * Supports Math (Addition, Subtraction, Multiplication) and English (Grammar)
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
    ENGLISH_TIMER_DURATION: 15,
    HURRY_UP_TIME: 7,
    ENGLISH_HURRY_UP_TIME: 10,
    
    // Points
    POINTS_PER_CORRECT: 10,
    BONUS_STREAK_MULTIPLIER: 5,
    
    // Snowfall streak trigger
    SNOWFALL_STREAK: 10,
    
    // Sounds enabled
    SOUNDS_ENABLED: true,
    
    // Questions per game session
    QUESTIONS_PER_GAME: 30
};

// ===========================================
// GAME STATE
// ===========================================
// NOTE: GRAMMAR_DATA is loaded from questions.js

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
    questionsCorrect: 0,      // Track correct answers for summary
    questionsWrong: 0,        // Track wrong answers for summary
    wrongQuestions: [],       // Track details of wrong math questions
    challengeType: null,
    snowfallActive: false,
    category: null, // 'math' or 'english'
    usedQuestions: [], // Track used questions to avoid repetition
    
    // Vocabulary game state
    vocabWords: [],        // Current set of 5 words to learn
    vocabCurrentIndex: 0,  // Current word index in learning phase
    vocabQuizIndex: 0,     // Current word index in quiz phase
    vocabCorrect: 0,       // Correct answers in quiz
    vocabScore: 0,         // Points earned
    usedVocabWords: []     // Track used vocabulary words
};

// ===========================================
// DOM ELEMENTS
// ===========================================
const elements = {
    // Screens
    mainWelcomeScreen: document.getElementById('main-welcome-screen'),
    mathWelcomeScreen: document.getElementById('math-welcome-screen'),
    englishWelcomeScreen: document.getElementById('english-welcome-screen'),
    configScreen: document.getElementById('config-screen'),
    gameScreen: document.getElementById('game-screen'),
    englishGameScreen: document.getElementById('english-game-screen'),
    
    // Category tiles
    categoryTiles: document.querySelectorAll('.category-tile'),
    
    // Math challenge tiles
    mathChallengeTiles: document.querySelectorAll('#math-welcome-screen .challenge-tile'),
    
    // English challenge tiles
    englishChallengeTiles: document.querySelectorAll('#english-welcome-screen .challenge-tile'),
    
    // Back buttons
    backToMainFromMath: document.getElementById('back-to-main-from-math'),
    backToMainFromEnglish: document.getElementById('back-to-main-from-english'),
    backToMathBtn: document.getElementById('back-to-math-btn'),
    
    // Config screen (for multiplication)
    tablesSelection: document.getElementById('tables-selection'),
    startBtn: document.getElementById('start-btn'),
    
    // Math Game screen
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
    
    // Math Question
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    operator: document.getElementById('operator'),
    questionCard: document.getElementById('question-card'),
    hurryIndicator: document.getElementById('hurry-indicator'),
    answerInput: document.getElementById('answer-input'),
    submitBtn: document.getElementById('submit-btn'),
    feedback: document.getElementById('feedback'),
    
    // English Game screen
    englishScore: document.getElementById('english-score'),
    englishTimerText: document.getElementById('english-timer-text'),
    englishTimerCircle: document.getElementById('english-timer-circle'),
    englishPauseBtn: document.getElementById('english-pause-btn'),
    englishPauseIcon: document.getElementById('english-pause-icon'),
    englishPauseOverlay: document.getElementById('english-pause-overlay'),
    englishResumeBtn: document.getElementById('english-resume-btn'),
    englishQuitBtn: document.getElementById('english-quit-btn'),
    
    // English Challenge badge
    englishChallengeBadge: document.getElementById('english-challenge-badge'),
    englishChallengeIcon: document.getElementById('english-challenge-icon'),
    englishChallengeName: document.getElementById('english-challenge-name'),
    
    // English Question
    englishQuestionCard: document.getElementById('english-question-card'),
    englishHurryIndicator: document.getElementById('english-hurry-indicator'),
    questionInstruction: document.getElementById('question-instruction'),
    sentenceDisplay: document.getElementById('sentence-display'),
    wordOptions: document.getElementById('word-options'),
    englishFeedback: document.getElementById('english-feedback'),
    
    // Definition Modal
    definitionModal: document.getElementById('definition-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    definitionWord: document.getElementById('definition-word'),
    definitionPhonetic: document.getElementById('definition-phonetic'),
    definitionMeaning: document.getElementById('definition-meaning'),
    playPronunciationBtn: document.getElementById('play-pronunciation-btn'),
    
    // Vocabulary Learning Screen
    vocabularyLearnScreen: document.getElementById('vocabulary-learn-screen'),
    vocabCurrent: document.getElementById('vocab-current'),
    vocabTotal: document.getElementById('vocab-total'),
    vocabWord: document.getElementById('vocab-word'),
    meaningText: document.getElementById('meaning-text'),
    exampleText: document.getElementById('example-text'),
    vocabListenBtn: document.getElementById('vocab-listen-btn'),
    vocabWordsList: document.getElementById('vocab-words-list'),
    vocabBackBtn: document.getElementById('vocab-back-btn'),
    vocabNextBtn: document.getElementById('vocab-next-btn'),
    
    // Vocabulary Quiz Screen
    vocabularyQuizScreen: document.getElementById('vocabulary-quiz-screen'),
    vocabScoreDisplay: document.getElementById('vocab-score'),
    quizCurrent: document.getElementById('quiz-current'),
    quizTotal: document.getElementById('quiz-total'),
    quizMeaning: document.getElementById('quiz-meaning'),
    spellingOptions: document.getElementById('spelling-options'),
    vocabFeedback: document.getElementById('vocab-feedback'),
    
    // Vocabulary Results Screen
    vocabularyResultsScreen: document.getElementById('vocabulary-results-screen'),
    resultsEmoji: document.getElementById('results-emoji'),
    resultsTitle: document.getElementById('results-title'),
    resultsScore: document.getElementById('results-score'),
    resultsCorrect: document.getElementById('results-correct'),
    resultsWords: document.getElementById('results-words'),
    vocabPlayAgainBtn: document.getElementById('vocab-play-again-btn'),
    vocabHomeBtn: document.getElementById('vocab-home-btn'),
    
    // Game Summary Screen (Universal)
    gameSummaryScreen: document.getElementById('game-summary-screen'),
    summarySmiley: document.getElementById('summary-smiley'),
    summaryTitle: document.getElementById('summary-title'),
    summarySubtitle: document.getElementById('summary-subtitle'),
    starRating: document.getElementById('star-rating'),
    summaryCorrect: document.getElementById('summary-correct'),
    summaryWrong: document.getElementById('summary-wrong'),
    summaryScore: document.getElementById('summary-score'),
    summaryMessage: document.getElementById('summary-message'),
    summaryPlayAgainBtn: document.getElementById('summary-play-again-btn'),
    summaryHomeBtn: document.getElementById('summary-home-btn'),
    wrongStatClickable: document.getElementById('wrong-stat-clickable'),
    clickHint: document.getElementById('click-hint'),
    
    // Wrong Questions Modal
    wrongQuestionsModal: document.getElementById('wrong-questions-modal'),
    wrongQuestionsList: document.getElementById('wrong-questions-list'),
    closeWrongModalBtn: document.getElementById('close-wrong-modal-btn'),
    closeWrongReviewBtn: document.getElementById('close-wrong-review-btn'),
    
    // Effects
    celebrationContainer: document.getElementById('celebration-container'),
    particles: document.getElementById('particles'),
    snowfallContainer: document.getElementById('snowfall-container')
};

// Store current word audio URL
let currentWordAudioUrl = null;

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
    // Category tiles (main welcome screen)
    elements.categoryTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            selectCategory(tile.dataset.category);
        });
    });
    
    // Math challenge tiles
    elements.mathChallengeTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            selectMathChallenge(tile.dataset.challenge);
        });
    });
    
    // English challenge tiles
    elements.englishChallengeTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            selectEnglishChallenge(tile.dataset.challenge);
        });
    });
    
    // Back buttons
    elements.backToMainFromMath.addEventListener('click', goToMainWelcome);
    elements.backToMainFromEnglish.addEventListener('click', goToMainWelcome);
    elements.backToMathBtn.addEventListener('click', goToMathWelcome);
    
    // Start game (multiplication config)
    elements.startBtn.addEventListener('click', startMathGame);
    
    // Math Pause/Resume
    elements.pauseBtn.addEventListener('click', togglePause);
    elements.resumeBtn.addEventListener('click', resumeGame);
    elements.quitBtn.addEventListener('click', quitGame);
    
    // Math Submit answer
    elements.submitBtn.addEventListener('click', checkMathAnswer);
    elements.answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkMathAnswer();
        }
    });
    
    // English Pause/Resume
    elements.englishPauseBtn.addEventListener('click', toggleEnglishPause);
    elements.englishResumeBtn.addEventListener('click', resumeEnglishGame);
    elements.englishQuitBtn.addEventListener('click', quitEnglishGame);
    
    // Definition modal
    elements.closeModalBtn.addEventListener('click', closeDefinitionModal);
    elements.definitionModal.addEventListener('click', (e) => {
        if (e.target === elements.definitionModal) {
            closeDefinitionModal();
        }
    });
    elements.playPronunciationBtn.addEventListener('click', playPronunciation);
    
    // Vocabulary learning and quiz buttons
    elements.vocabBackBtn.addEventListener('click', goBackFromVocab);
    elements.vocabNextBtn.addEventListener('click', goToNextVocabWord);
    elements.vocabListenBtn.addEventListener('click', () => {
        speakWord(gameState.vocabWords[gameState.vocabCurrentIndex].word);
    });
    elements.vocabPlayAgainBtn.addEventListener('click', startVocabularyLearning);
    elements.vocabHomeBtn.addEventListener('click', goToMainWelcome);
    
    // Game summary screen buttons
    elements.summaryPlayAgainBtn.addEventListener('click', handlePlayAgain);
    elements.summaryHomeBtn.addEventListener('click', goToMainWelcome);
    
    // Wrong questions review (Math only)
    elements.wrongStatClickable.addEventListener('click', showWrongQuestionsModal);
    elements.closeWrongModalBtn.addEventListener('click', closeWrongQuestionsModal);
    elements.closeWrongReviewBtn.addEventListener('click', closeWrongQuestionsModal);
    elements.wrongQuestionsModal.addEventListener('click', (e) => {
        if (e.target === elements.wrongQuestionsModal) {
            closeWrongQuestionsModal();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (elements.wrongQuestionsModal.classList.contains('show')) {
                closeWrongQuestionsModal();
            } else if (elements.definitionModal.classList.contains('show')) {
                closeDefinitionModal();
            } else if (gameState.isGameActive) {
                if (gameState.category === 'math') {
                    togglePause();
                } else {
                    toggleEnglishPause();
                }
            }
        }
    });
}

// ===========================================
// SCREEN NAVIGATION
// ===========================================
function selectCategory(category) {
    gameState.category = category;
    
    elements.mainWelcomeScreen.classList.remove('active');
    
    if (category === 'math') {
        elements.mathWelcomeScreen.classList.add('active');
    } else if (category === 'english') {
        elements.englishWelcomeScreen.classList.add('active');
    }
}

function selectMathChallenge(challengeType) {
    gameState.challengeType = challengeType;
    
    if (challengeType === 'multiplication') {
        elements.mathWelcomeScreen.classList.remove('active');
        elements.configScreen.classList.add('active');
    } else {
        startMathGame();
    }
}

function selectEnglishChallenge(challengeType) {
    gameState.challengeType = challengeType;
    gameState.usedQuestions = []; // Reset used questions
    
    if (challengeType === 'vocabulary') {
        startVocabularyLearning();
    } else {
        startEnglishGame();
    }
}

function goToMainWelcome() {
    elements.mathWelcomeScreen.classList.remove('active');
    elements.englishWelcomeScreen.classList.remove('active');
    elements.configScreen.classList.remove('active');
    elements.gameScreen.classList.remove('active');
    elements.englishGameScreen.classList.remove('active');
    elements.vocabularyLearnScreen.classList.remove('active');
    elements.vocabularyQuizScreen.classList.remove('active');
    elements.vocabularyResultsScreen.classList.remove('active');
    elements.gameSummaryScreen.classList.remove('active');
    elements.mainWelcomeScreen.classList.add('active');
    gameState.category = null;
    gameState.challengeType = null;
    stopSnowfall();
}

function goToMathWelcome() {
    elements.configScreen.classList.remove('active');
    elements.mathWelcomeScreen.classList.add('active');
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
// MATH GAME LOGIC
// ===========================================
function startMathGame() {
    // Reset game state
    gameState.score = 0;
    gameState.streak = 0;
    gameState.questionsAnswered = 0;
    gameState.questionsCorrect = 0;
    gameState.questionsWrong = 0;
    gameState.wrongQuestions = [];
    gameState.isGameActive = true;
    gameState.isPaused = false;
    gameState.category = 'math';
    
    // Update UI
    elements.score.textContent = '0';
    
    // Update challenge badge
    updateMathChallengeBadge();
    
    // Switch screens
    elements.mathWelcomeScreen.classList.remove('active');
    elements.configScreen.classList.remove('active');
    elements.gameScreen.classList.add('active');
    
    // Generate first question
    generateMathQuestion();
}

function updateMathChallengeBadge() {
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

function generateMathQuestion() {
    // Check if we've reached the question limit
    if (gameState.questionsAnswered >= CONFIG.QUESTIONS_PER_GAME) {
        showGameSummary();
        return;
    }
    
    let num1, num2, answer, operator;
    
    switch (gameState.challengeType) {
        case 'addition':
            // Two-digit + two-digit where one number is tens OR answer is tens
            // Examples: 12 + 18 = 30, 32 + 30 = 62, 97 + 33 = 130
            const additionType = Math.floor(Math.random() * 3);
            
            if (additionType === 0) {
                // Type 1: Both two-digit, answer is a multiple of 10
                // e.g., 12 + 18 = 30, 23 + 17 = 40, 45 + 25 = 70
                const targetSum = (Math.floor(Math.random() * 15) + 3) * 10; // 30-170
                num1 = Math.floor(Math.random() * Math.min(targetSum - 10, 89)) + 11; // 11 to min(targetSum-10, 99)
                num2 = targetSum - num1;
                // Ensure num2 is also two-digit (10-99)
                if (num2 < 10 || num2 > 99) {
                    num1 = Math.floor(targetSum / 2) - Math.floor(Math.random() * 5);
                    num2 = targetSum - num1;
                }
            } else if (additionType === 1) {
                // Type 2: First number is two-digit, second is a multiple of 10
                // e.g., 32 + 30 = 62, 45 + 20 = 65
                num1 = Math.floor(Math.random() * 89) + 11; // 11-99
                num2 = (Math.floor(Math.random() * 9) + 1) * 10; // 10, 20...90
            } else {
                // Type 3: First number is multiple of 10, second is two-digit
                // e.g., 40 + 37 = 77, 50 + 28 = 78
                num1 = (Math.floor(Math.random() * 9) + 1) * 10; // 10, 20...90
                num2 = Math.floor(Math.random() * 89) + 11; // 11-99
            }
            answer = num1 + num2;
            operator = '+';
            break;
            
        case 'subtraction':
            // Two-digit minus tens digit: e.g., 23-10=13, 32-30=2, 92-70=22
            // First number is 11-99, second is a multiple of 10, result is positive
            num1 = Math.floor(Math.random() * 89) + 11; // 11-99
            const maxTens = Math.floor(num1 / 10); // Maximum tens we can subtract
            const tensToSubtract = Math.floor(Math.random() * maxTens) + 1; // 1 to maxTens
            num2 = tensToSubtract * 10; // 10, 20, 30, etc.
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
    startMathTimer();
}

function startMathTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timeLeft = CONFIG.TIMER_DURATION;
    updateMathTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
        if (gameState.isPaused) return;
        
        gameState.timeLeft--;
        updateMathTimerDisplay();
        
        if (gameState.timeLeft === CONFIG.TIMER_DURATION - CONFIG.HURRY_UP_TIME) {
            showMathHurryUp();
        }
        
        if (gameState.timeLeft <= 3 && gameState.timeLeft > 0) {
            playSound('tick');
        }
        
        if (gameState.timeLeft <= 0) {
            handleMathTimeUp();
        }
    }, 1000);
}

function updateMathTimerDisplay() {
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

function showMathHurryUp() {
    elements.hurryIndicator.classList.add('show');
    playSound('hurry');
    speakHurryUp();
    
    elements.answerInput.style.animation = 'shake 0.3s ease';
    setTimeout(() => {
        elements.answerInput.style.animation = '';
    }, 300);
}

function handleMathTimeUp() {
    clearInterval(gameState.timerInterval);
    
    gameState.questionsAnswered++;
    gameState.questionsWrong++;
    
    // Track wrong question for summary (Math only)
    gameState.wrongQuestions.push({
        num1: gameState.currentQuestion.num1,
        num2: gameState.currentQuestion.num2,
        correctAnswer: gameState.currentQuestion.answer,
        userAnswer: 'Time up',
        operator: getOperatorSymbol()
    });
    
    elements.feedback.textContent = `⏰ Time's up! The answer was ${gameState.currentQuestion.answer}`;
    elements.feedback.className = 'feedback wrong';
    
    showSadEmoji();
    playSound('wrong');
    
    // Reset streak
    gameState.streak = 0;
    stopSnowfall();
    
    setTimeout(() => {
        generateMathQuestion();
    }, 2000);
}

function checkMathAnswer() {
    const userAnswer = parseInt(elements.answerInput.value);
    
    if (isNaN(userAnswer)) {
        elements.answerInput.focus();
        return;
    }
    
    clearInterval(gameState.timerInterval);
    
    if (userAnswer === gameState.currentQuestion.answer) {
        handleMathCorrectAnswer();
    } else {
        handleMathWrongAnswer();
    }
}

function handleMathCorrectAnswer() {
    gameState.streak++;
    gameState.questionsAnswered++;
    gameState.questionsCorrect++;
    
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
    updateMathStreakBadge();
    
    // Next question after delay
    setTimeout(() => {
        generateMathQuestion();
    }, 1500);
}

function handleMathWrongAnswer() {
    const userAnswer = parseInt(elements.answerInput.value);
    
    gameState.questionsAnswered++;
    gameState.questionsWrong++;
    
    // Track wrong question for summary (Math only)
    gameState.wrongQuestions.push({
        num1: gameState.currentQuestion.num1,
        num2: gameState.currentQuestion.num2,
        correctAnswer: gameState.currentQuestion.answer,
        userAnswer: userAnswer,
        operator: getOperatorSymbol()
    });
    
    // Show correct answer
    elements.feedback.textContent = `😢 The answer was ${gameState.currentQuestion.answer}. Keep going!`;
    elements.feedback.className = 'feedback wrong';
    
    // Reset streak
    gameState.streak = 0;
    updateMathStreakBadge();
    stopSnowfall();
    
    // Visual effects
    elements.questionCard.classList.add('wrong-shake');
    showSadEmoji();
    playSound('wrong');
    
    // Move to next question after showing correct answer
    setTimeout(() => {
        elements.questionCard.classList.remove('wrong-shake');
        generateMathQuestion();
    }, 2000);
}

function getOperatorSymbol() {
    switch (gameState.challengeType) {
        case 'addition': return '+';
        case 'subtraction': return '−';
        case 'multiplication': return '×';
        default: return '?';
    }
}

function updateMathStreakBadge() {
    const existingBadge = elements.questionCard.querySelector('.streak-badge');
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
    elements.mathWelcomeScreen.classList.add('active');
}

// ===========================================
// ENGLISH GAME LOGIC
// ===========================================
function startEnglishGame() {
    // Reset game state
    gameState.score = 0;
    gameState.streak = 0;
    gameState.questionsAnswered = 0;
    gameState.questionsCorrect = 0;
    gameState.questionsWrong = 0;
    gameState.isGameActive = true;
    gameState.isPaused = false;
    gameState.category = 'english';
    gameState.usedQuestions = [];
    
    // Update UI
    elements.englishScore.textContent = '0';
    
    // Update challenge badge
    updateEnglishChallengeBadge();
    
    // Switch screens
    elements.englishWelcomeScreen.classList.remove('active');
    elements.englishGameScreen.classList.add('active');
    
    // Generate first question
    generateEnglishQuestion();
}

function updateEnglishChallengeBadge() {
    const grammarData = GRAMMAR_DATA[gameState.challengeType];
    elements.englishChallengeIcon.textContent = grammarData.icon;
    elements.englishChallengeName.textContent = grammarData.name;
    elements.questionInstruction.textContent = grammarData.instruction;
}

function generateEnglishQuestion() {
    // Check if we've reached the question limit
    if (gameState.questionsAnswered >= CONFIG.QUESTIONS_PER_GAME) {
        showGameSummary();
        return;
    }
    
    const grammarData = GRAMMAR_DATA[gameState.challengeType];
    const sentences = grammarData.sentences;
    
    // Find available questions (not yet used)
    const availableIndices = sentences.map((_, i) => i)
        .filter(i => !gameState.usedQuestions.includes(i));
    
    // If all questions used, reset
    if (availableIndices.length === 0) {
        gameState.usedQuestions = [];
        availableIndices.push(...sentences.map((_, i) => i));
    }
    
    // Pick a random question
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    gameState.usedQuestions.push(randomIndex);
    
    const question = sentences[randomIndex];
    
    // Store current question
    gameState.currentQuestion = {
        template: question.template,
        answer: question.answer,
        options: shuffleArray([...question.options]),
        explanation: question.explanation || ''
    };
    
    // Display sentence with blank
    displayEnglishSentence(question.template);
    
    // Display word options
    displayWordOptions(gameState.currentQuestion.options);
    
    // Clear feedback
    elements.englishFeedback.textContent = '';
    elements.englishFeedback.className = 'feedback';
    elements.englishQuestionCard.classList.remove('correct-glow', 'wrong-shake');
    elements.englishHurryIndicator.classList.remove('show');
    
    // Start timer
    startEnglishTimer();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function displayEnglishSentence(template) {
    // Replace _____ with a styled blank
    const html = template.replace('_____', '<span class="blank-word">_____</span>');
    elements.sentenceDisplay.innerHTML = html;
}

function displayWordOptions(options) {
    elements.wordOptions.innerHTML = '';
    
    options.forEach(word => {
        const button = document.createElement('button');
        button.className = 'word-option';
        button.textContent = word;
        button.addEventListener('click', () => checkEnglishAnswer(word, button));
        
        // Add info icon for word meaning
        const infoIcon = document.createElement('span');
        infoIcon.className = 'word-info';
        infoIcon.textContent = 'ℹ️';
        infoIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            showWordDefinition(word);
        });
        button.appendChild(infoIcon);
        
        elements.wordOptions.appendChild(button);
    });
}

function startEnglishTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timeLeft = CONFIG.ENGLISH_TIMER_DURATION;
    updateEnglishTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
        if (gameState.isPaused) return;
        
        gameState.timeLeft--;
        updateEnglishTimerDisplay();
        
        if (gameState.timeLeft === CONFIG.ENGLISH_TIMER_DURATION - CONFIG.ENGLISH_HURRY_UP_TIME) {
            showEnglishHurryUp();
        }
        
        if (gameState.timeLeft <= 3 && gameState.timeLeft > 0) {
            playSound('tick');
        }
        
        if (gameState.timeLeft <= 0) {
            handleEnglishTimeUp();
        }
    }, 1000);
}

function updateEnglishTimerDisplay() {
    elements.englishTimerText.textContent = gameState.timeLeft;
    
    const circumference = 283;
    const progress = (gameState.timeLeft / CONFIG.ENGLISH_TIMER_DURATION) * circumference;
    elements.englishTimerCircle.style.strokeDashoffset = circumference - progress;
    
    elements.englishTimerText.classList.remove('warning', 'danger');
    elements.englishTimerCircle.classList.remove('warning', 'danger');
    
    if (gameState.timeLeft <= 3) {
        elements.englishTimerText.classList.add('danger');
        elements.englishTimerCircle.classList.add('danger');
    } else if (gameState.timeLeft <= CONFIG.ENGLISH_TIMER_DURATION - CONFIG.ENGLISH_HURRY_UP_TIME) {
        elements.englishTimerText.classList.add('warning');
        elements.englishTimerCircle.classList.add('warning');
    }
}

function showEnglishHurryUp() {
    elements.englishHurryIndicator.classList.add('show');
    playSound('hurry');
    speakHurryUp();
}

function handleEnglishTimeUp() {
    clearInterval(gameState.timerInterval);
    
    gameState.questionsAnswered++;
    gameState.questionsWrong++;
    
    // Highlight correct answer
    const buttons = elements.wordOptions.querySelectorAll('.word-option');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent.replace('ℹ️', '').trim() === gameState.currentQuestion.answer) {
            btn.classList.add('correct');
        }
    });
    
    // Get explanation for the correct answer
    const explanation = gameState.currentQuestion.explanation || '';
    
    // Show feedback with explanation
    elements.englishFeedback.innerHTML = `
        <div class="wrong-answer-feedback">
            <div class="feedback-title">⏰ Time's up! The answer was "${gameState.currentQuestion.answer}"</div>
            ${explanation ? `<div class="feedback-explanation">💡 <strong>Why?</strong> ${explanation}</div>` : ''}
        </div>
    `;
    elements.englishFeedback.className = 'feedback wrong with-explanation';
    
    showSadEmoji();
    playSound('wrong');
    
    // Reset streak
    gameState.streak = 0;
    stopSnowfall();
    
    // 20 seconds delay to read explanation, then next question
    setTimeout(() => {
        generateEnglishQuestion();
    }, 20000);
}

function checkEnglishAnswer(selectedWord, button) {
    clearInterval(gameState.timerInterval);
    
    // Disable all buttons
    const buttons = elements.wordOptions.querySelectorAll('.word-option');
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedWord === gameState.currentQuestion.answer) {
        handleEnglishCorrectAnswer(button);
    } else {
        handleEnglishWrongAnswer(button);
    }
}

function handleEnglishCorrectAnswer(button) {
    gameState.streak++;
    gameState.questionsAnswered++;
    gameState.questionsCorrect++;
    
    // Calculate points with streak bonus
    let points = CONFIG.POINTS_PER_CORRECT;
    if (gameState.streak > 3) {
        points += (gameState.streak - 3) * CONFIG.BONUS_STREAK_MULTIPLIER;
    }
    
    gameState.score += points;
    elements.englishScore.textContent = gameState.score;
    
    // Show feedback
    const streakText = gameState.streak >= 3 ? ` 🔥 ${gameState.streak} streak!` : '';
    elements.englishFeedback.textContent = `🎉 Correct! +${points} points${streakText}`;
    elements.englishFeedback.className = 'feedback correct';
    
    // Mark button as correct
    button.classList.add('correct');
    
    // Fill in the blank with correct answer
    const blankSpan = elements.sentenceDisplay.querySelector('.blank-word');
    if (blankSpan) {
        blankSpan.textContent = gameState.currentQuestion.answer;
        blankSpan.classList.add('filled');
    }
    
    // Visual effects
    elements.englishQuestionCard.classList.add('correct-glow');
    showPartyPoppers();
    playSound('correct');
    
    // Check for snowfall trigger
    if (gameState.streak === CONFIG.SNOWFALL_STREAK) {
        startSnowfall();
    }
    
    // Update streak badge
    updateEnglishStreakBadge();
    
    // Next question after delay
    setTimeout(() => {
        generateEnglishQuestion();
    }, 2000);
}

function handleEnglishWrongAnswer(button) {
    gameState.questionsAnswered++;
    gameState.questionsWrong++;
    
    button.classList.add('wrong');
    
    // Show correct answer
    const buttons = elements.wordOptions.querySelectorAll('.word-option');
    buttons.forEach(btn => {
        if (btn.textContent.replace('ℹ️', '').trim() === gameState.currentQuestion.answer) {
            btn.classList.add('correct');
        }
    });
    
    // Get explanation for the correct answer
    const explanation = gameState.currentQuestion.explanation || '';
    
    // Show feedback with explanation
    elements.englishFeedback.innerHTML = `
        <div class="wrong-answer-feedback">
            <div class="feedback-title">😢 Not quite! The answer was "${gameState.currentQuestion.answer}"</div>
            ${explanation ? `<div class="feedback-explanation">💡 <strong>Why?</strong> ${explanation}</div>` : ''}
        </div>
    `;
    elements.englishFeedback.className = 'feedback wrong with-explanation';
    
    // Reset streak
    gameState.streak = 0;
    updateEnglishStreakBadge();
    stopSnowfall();
    
    // Visual effects
    elements.englishQuestionCard.classList.add('wrong-shake');
    showSadEmoji();
    playSound('wrong');
    
    // Next question after delay (60 seconds to read explanation)
    setTimeout(() => {
        generateEnglishQuestion();
    }, 60000);
}

function updateEnglishStreakBadge() {
    const existingBadge = elements.englishQuestionCard.querySelector('.streak-badge');
    if (existingBadge) {
        existingBadge.remove();
    }
    
    if (gameState.streak >= 3) {
        const badge = document.createElement('div');
        badge.className = 'streak-badge';
        badge.textContent = `🔥 ${gameState.streak} streak!`;
        elements.englishQuestionCard.appendChild(badge);
    }
}

// ===========================================
// WORD DEFINITION (API)
// ===========================================
async function showWordDefinition(word) {
    // Show modal immediately with loading state
    elements.definitionWord.textContent = word;
    elements.definitionPhonetic.textContent = 'Loading...';
    elements.definitionMeaning.innerHTML = '<p>Fetching definition...</p>';
    elements.playPronunciationBtn.style.display = 'none';
    currentWordAudioUrl = null;
    
    elements.definitionModal.classList.add('show');
    
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        
        if (!response.ok) {
            throw new Error('Word not found');
        }
        
        const data = await response.json();
        const wordData = data[0];
        
        // Get phonetic
        let phonetic = wordData.phonetic || '';
        if (!phonetic && wordData.phonetics) {
            const phoneticObj = wordData.phonetics.find(p => p.text);
            phonetic = phoneticObj ? phoneticObj.text : '';
        }
        elements.definitionPhonetic.textContent = phonetic;
        
        // Get audio URL
        if (wordData.phonetics) {
            const audioObj = wordData.phonetics.find(p => p.audio && p.audio.length > 0);
            if (audioObj) {
                currentWordAudioUrl = audioObj.audio;
                elements.playPronunciationBtn.style.display = 'inline-flex';
            }
        }
        
        // Get meanings
        let meaningsHtml = '';
        wordData.meanings.forEach(meaning => {
            meaningsHtml += `<div class="meaning-entry">`;
            meaningsHtml += `<strong>${meaning.partOfSpeech}</strong>`;
            meaningsHtml += `<ul>`;
            meaning.definitions.slice(0, 2).forEach(def => {
                meaningsHtml += `<li>${def.definition}`;
                if (def.example) {
                    meaningsHtml += `<br><em>Example: "${def.example}"</em>`;
                }
                meaningsHtml += `</li>`;
            });
            meaningsHtml += `</ul></div>`;
        });
        
        elements.definitionMeaning.innerHTML = meaningsHtml;
        
    } catch (error) {
        elements.definitionPhonetic.textContent = '';
        elements.definitionMeaning.innerHTML = `
            <p>Sorry, couldn't find the definition for "${word}".</p>
            <p><em>This word is used to describe: ${getWordTypeDescription(word)}</em></p>
        `;
    }
}

function getWordTypeDescription(word) {
    // Provide fallback descriptions for common grammar words
    const descriptions = {
        // Adjectives
        'tall': 'something with great height',
        'messy': 'something untidy or disorganized',
        'juicy': 'something with lots of juice or flavor',
        'long': 'something with great length',
        'busy': 'full of activity or people',
        'warm': 'having a comfortable heat',
        'happy': 'feeling joy or pleasure',
        'beautiful': 'pleasing to look at',
        'huge': 'very large in size',
        'loud': 'making a lot of noise',
        'lazy': 'not wanting to work or be active',
        'delicious': 'tasting very good',
        'strong': 'having great power or force',
        'bright': 'giving out light or shining',
        'kind': 'friendly and helpful',
        // Adverbs
        'slowly': 'at a slow speed',
        'quickly': 'at a fast speed',
        'carefully': 'with great attention',
        'happily': 'in a happy way',
        'loudly': 'in a loud way',
        'quietly': 'without making much noise',
        'beautifully': 'in a beautiful way',
        'gracefully': 'with elegance',
        'patiently': 'with patience',
        'fiercely': 'with great intensity',
        'correctly': 'in a correct way',
        'elegantly': 'with elegance and style',
        'honestly': 'in an honest way',
        'brightly': 'with brightness',
        // Conjunctions
        'and': 'connecting words or ideas together',
        'but': 'showing contrast or exception',
        'or': 'showing alternatives or choices',
        'so': 'showing result or consequence',
        'because': 'showing reason or cause',
        'if': 'showing condition'
    };
    
    return descriptions[word.toLowerCase()] || 'a specific quality or action';
}

function closeDefinitionModal() {
    elements.definitionModal.classList.remove('show');
    currentWordAudioUrl = null;
}

function playPronunciation() {
    if (currentWordAudioUrl) {
        const audio = new Audio(currentWordAudioUrl);
        audio.play();
    } else {
        // Fallback to speech synthesis
        const word = elements.definitionWord.textContent;
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }
}

// ===========================================
// ENGLISH PAUSE/RESUME
// ===========================================
function toggleEnglishPause() {
    if (gameState.isPaused) {
        resumeEnglishGame();
    } else {
        pauseEnglishGame();
    }
}

function pauseEnglishGame() {
    gameState.isPaused = true;
    elements.englishPauseOverlay.classList.add('show');
    elements.englishPauseIcon.textContent = '▶️';
}

function resumeEnglishGame() {
    gameState.isPaused = false;
    elements.englishPauseOverlay.classList.remove('show');
    elements.englishPauseIcon.textContent = '⏸️';
}

function quitEnglishGame() {
    clearInterval(gameState.timerInterval);
    stopSnowfall();
    
    gameState.isGameActive = false;
    gameState.isPaused = false;
    
    elements.englishPauseOverlay.classList.remove('show');
    elements.englishGameScreen.classList.remove('active');
    elements.englishWelcomeScreen.classList.add('active');
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
// VOCABULARY LEARNING GAME
// ===========================================
function startVocabularyLearning() {
    // Reset vocabulary state
    gameState.vocabCurrentIndex = 0;
    gameState.vocabQuizIndex = 0;
    gameState.vocabCorrect = 0;
    gameState.vocabScore = 0;
    
    // Select 5 random words from the pool
    gameState.vocabWords = selectRandomVocabWords(5);
    
    // Update UI
    elements.vocabTotal.textContent = gameState.vocabWords.length;
    
    // Switch screens
    elements.englishWelcomeScreen.classList.remove('active');
    elements.vocabularyResultsScreen.classList.remove('active');
    elements.vocabularyLearnScreen.classList.add('active');
    
    // Display first word
    displayVocabWord(0);
    
    // Build word dots
    buildVocabWordDots();
}

function selectRandomVocabWords(count) {
    // Find available words (not yet used)
    const availableIndices = VOCABULARY_DATA.map((_, i) => i)
        .filter(i => !gameState.usedVocabWords.includes(i));
    
    // If we've used most words, reset
    if (availableIndices.length < count) {
        gameState.usedVocabWords = [];
        availableIndices.push(...VOCABULARY_DATA.map((_, i) => i));
    }
    
    // Shuffle and pick random words
    const shuffled = shuffleArray(availableIndices);
    const selectedIndices = shuffled.slice(0, count);
    
    // Mark as used
    gameState.usedVocabWords.push(...selectedIndices);
    
    return selectedIndices.map(i => VOCABULARY_DATA[i]);
}

function displayVocabWord(index) {
    const word = gameState.vocabWords[index];
    
    elements.vocabCurrent.textContent = index + 1;
    elements.vocabWord.textContent = word.word;
    elements.meaningText.textContent = word.meaning;
    elements.exampleText.innerHTML = `<em>"${word.example}"</em>`;
    
    // Update word dots
    updateVocabWordDots(index);
    
    // Update button text
    if (index === gameState.vocabWords.length - 1) {
        elements.vocabNextBtn.textContent = '🎯 Start Quiz!';
    } else {
        elements.vocabNextBtn.textContent = 'Next Word ➡️';
    }
    
    // Update back button visibility
    elements.vocabBackBtn.style.display = index === 0 ? 'none' : 'inline-flex';
}

function buildVocabWordDots() {
    elements.vocabWordsList.innerHTML = '';
    
    gameState.vocabWords.forEach((word, index) => {
        const dot = document.createElement('div');
        dot.className = 'vocab-word-dot';
        dot.textContent = index + 1;
        dot.addEventListener('click', () => {
            gameState.vocabCurrentIndex = index;
            displayVocabWord(index);
        });
        elements.vocabWordsList.appendChild(dot);
    });
    
    updateVocabWordDots(0);
}

function updateVocabWordDots(activeIndex) {
    const dots = elements.vocabWordsList.querySelectorAll('.vocab-word-dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active', 'completed');
        if (i === activeIndex) {
            dot.classList.add('active');
        } else if (i < activeIndex) {
            dot.classList.add('completed');
        }
    });
}

function goBackFromVocab() {
    if (gameState.vocabCurrentIndex > 0) {
        gameState.vocabCurrentIndex--;
        displayVocabWord(gameState.vocabCurrentIndex);
    } else {
        // Go back to English welcome
        elements.vocabularyLearnScreen.classList.remove('active');
        elements.englishWelcomeScreen.classList.add('active');
    }
}

function goToNextVocabWord() {
    if (gameState.vocabCurrentIndex < gameState.vocabWords.length - 1) {
        gameState.vocabCurrentIndex++;
        displayVocabWord(gameState.vocabCurrentIndex);
    } else {
        // Start the quiz
        startVocabularyQuiz();
    }
}

function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    }
}

// ===========================================
// VOCABULARY QUIZ
// ===========================================
function startVocabularyQuiz() {
    gameState.vocabQuizIndex = 0;
    gameState.vocabCorrect = 0;
    gameState.vocabScore = 0;
    
    // Shuffle the words for quiz
    gameState.vocabWords = shuffleArray(gameState.vocabWords);
    
    // Update UI
    elements.quizTotal.textContent = gameState.vocabWords.length;
    elements.vocabScoreDisplay.textContent = '0';
    
    // Switch screens
    elements.vocabularyLearnScreen.classList.remove('active');
    elements.vocabularyQuizScreen.classList.add('active');
    
    // Display first quiz question
    displayQuizQuestion(0);
}

function displayQuizQuestion(index) {
    const word = gameState.vocabWords[index];
    
    elements.quizCurrent.textContent = index + 1;
    elements.quizMeaning.textContent = word.meaning;
    elements.vocabFeedback.innerHTML = '';
    elements.vocabFeedback.className = 'feedback';
    
    // Create options: correct word + 2 similar misspellings
    const options = shuffleArray([word.word, ...word.similar]);
    
    // Display spelling options
    elements.spellingOptions.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'spelling-option';
        button.textContent = option;
        button.addEventListener('click', () => checkVocabAnswer(option, button, word.word));
        elements.spellingOptions.appendChild(button);
    });
}

function checkVocabAnswer(selected, button, correct) {
    // Disable all buttons
    const buttons = elements.spellingOptions.querySelectorAll('.spelling-option');
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    if (selected === correct) {
        handleVocabCorrect(button);
    } else {
        handleVocabWrong(button, correct);
    }
}

function handleVocabCorrect(button) {
    gameState.vocabCorrect++;
    gameState.vocabScore += CONFIG.POINTS_PER_CORRECT;
    
    button.classList.add('correct');
    elements.vocabScoreDisplay.textContent = gameState.vocabScore;
    
    elements.vocabFeedback.innerHTML = '🎉 Correct! Great spelling!';
    elements.vocabFeedback.className = 'feedback correct';
    
    playSound('correct');
    showPartyPoppers();
    
    // Move to next question or results
    setTimeout(() => {
        if (gameState.vocabQuizIndex < gameState.vocabWords.length - 1) {
            gameState.vocabQuizIndex++;
            displayQuizQuestion(gameState.vocabQuizIndex);
        } else {
            showVocabResults();
        }
    }, 1500);
}

function handleVocabWrong(button, correct) {
    button.classList.add('incorrect');
    
    // Highlight correct answer
    const buttons = elements.spellingOptions.querySelectorAll('.spelling-option');
    buttons.forEach(btn => {
        if (btn.textContent === correct) {
            btn.classList.add('show-correct');
        }
    });
    
    elements.vocabFeedback.innerHTML = `😢 The correct spelling is <strong>"${correct}"</strong>`;
    elements.vocabFeedback.className = 'feedback wrong';
    
    playSound('wrong');
    showSadEmoji();
    
    // Move to next question or results after longer delay to learn
    setTimeout(() => {
        if (gameState.vocabQuizIndex < gameState.vocabWords.length - 1) {
            gameState.vocabQuizIndex++;
            displayQuizQuestion(gameState.vocabQuizIndex);
        } else {
            showVocabResults();
        }
    }, 3000);
}

function showVocabResults() {
    // Calculate results
    const totalWords = gameState.vocabWords.length;
    const correct = gameState.vocabCorrect;
    const score = gameState.vocabScore;
    
    // Set emoji and title based on performance
    let emoji, title;
    const percentage = (correct / totalWords) * 100;
    
    if (percentage === 100) {
        emoji = '🏆';
        title = 'Perfect Score!';
    } else if (percentage >= 80) {
        emoji = '🌟';
        title = 'Excellent!';
    } else if (percentage >= 60) {
        emoji = '😊';
        title = 'Good Job!';
    } else if (percentage >= 40) {
        emoji = '💪';
        title = 'Keep Practicing!';
    } else {
        emoji = '📚';
        title = 'Let\'s Learn More!';
    }
    
    elements.resultsEmoji.textContent = emoji;
    elements.resultsTitle.textContent = title;
    elements.resultsScore.textContent = score;
    elements.resultsCorrect.textContent = `${correct}/${totalWords}`;
    
    // Show words learned
    elements.resultsWords.innerHTML = '<h3 style="margin-bottom: 15px; text-align: center;">Words You Learned:</h3>';
    gameState.vocabWords.forEach(word => {
        const item = document.createElement('div');
        item.className = 'results-word-item';
        item.innerHTML = `
            <span class="word-status">📖</span>
            <span class="word-text">${word.word}</span>
        `;
        elements.resultsWords.appendChild(item);
    });
    
    // Switch screens
    elements.vocabularyQuizScreen.classList.remove('active');
    elements.vocabularyResultsScreen.classList.add('active');
    
    // Celebration for good performance
    if (percentage >= 60) {
        showPartyPoppers();
    }
}

// ===========================================
// GAME SUMMARY (Universal for Math & English)
// ===========================================
function showGameSummary() {
    clearInterval(gameState.timerInterval);
    gameState.isGameActive = false;
    stopSnowfall();
    
    const correct = gameState.questionsCorrect;
    const wrong = gameState.questionsWrong;
    const total = correct + wrong;
    const score = gameState.score;
    
    // Calculate star rating (1-5 stars based on percentage)
    const percentage = (correct / total) * 100;
    let stars = 0;
    if (percentage >= 90) stars = 5;
    else if (percentage >= 75) stars = 4;
    else if (percentage >= 60) stars = 3;
    else if (percentage >= 40) stars = 2;
    else if (percentage > 0) stars = 1;
    
    // Update summary display
    elements.summaryCorrect.textContent = correct;
    elements.summaryWrong.textContent = wrong;
    elements.summaryScore.textContent = score;
    elements.summarySubtitle.textContent = `You completed ${total} questions!`;
    
    // Enable clickable wrong stat for Math only (if there are wrong answers)
    if (gameState.category === 'math' && wrong > 0) {
        elements.wrongStatClickable.classList.add('has-wrong');
        elements.clickHint.style.display = 'block';
    } else {
        elements.wrongStatClickable.classList.remove('has-wrong');
        elements.clickHint.style.display = 'none';
    }
    
    // Set stars with golden glow
    const starElements = elements.starRating.querySelectorAll('.star');
    starElements.forEach((star, index) => {
        star.classList.remove('active');
        if (index < stars) {
            // Animate stars appearing one by one
            setTimeout(() => {
                star.classList.add('active');
            }, index * 200);
        }
    });
    
    // Set smiley and title based on performance
    if (stars >= 3) {
        // Happy smiley for 3+ stars
        elements.summarySmiley.textContent = '😊';
        elements.summarySmiley.classList.remove('sad');
        elements.summarySmiley.classList.add('happy');
        
        if (stars === 5) {
            elements.summaryTitle.textContent = '🏆 Perfect Score!';
            elements.summaryMessage.textContent = 'Absolutely amazing! You are a superstar!';
        } else if (stars === 4) {
            elements.summaryTitle.textContent = '🌟 Excellent Work!';
            elements.summaryMessage.textContent = 'Great job! You are doing wonderfully!';
        } else {
            elements.summaryTitle.textContent = '👏 Good Job!';
            elements.summaryMessage.textContent = 'Nice work! Keep practicing to get even better!';
        }
        
        // Show celebration for good performance
        setTimeout(() => showPartyPoppers(), 500);
    } else {
        // Sad smiley for below 3 stars
        elements.summarySmiley.textContent = '😢';
        elements.summarySmiley.classList.remove('happy');
        elements.summarySmiley.classList.add('sad');
        
        if (stars === 2) {
            elements.summaryTitle.textContent = '💪 Keep Trying!';
            elements.summaryMessage.textContent = 'You can do better! Practice makes perfect!';
        } else {
            elements.summaryTitle.textContent = '📚 Let\'s Practice More!';
            elements.summaryMessage.textContent = 'Don\'t give up! Every mistake helps you learn!';
        }
    }
    
    // Hide current game screen and show summary
    elements.gameScreen.classList.remove('active');
    elements.englishGameScreen.classList.remove('active');
    elements.gameSummaryScreen.classList.add('active');
}

function showWrongQuestionsModal() {
    // Only show for Math and if there are wrong questions
    if (gameState.category !== 'math' || gameState.wrongQuestions.length === 0) {
        return;
    }
    
    // Build the wrong questions list
    elements.wrongQuestionsList.innerHTML = '';
    
    gameState.wrongQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'wrong-question-item';
        item.innerHTML = `
            <div class="question-display">
                ${q.num1} ${q.operator} ${q.num2} = ?
            </div>
            <div class="answer-comparison">
                <div class="your-answer">
                    <span class="label">Your Answer</span>
                    <span class="value">${q.userAnswer}</span>
                </div>
                <div class="correct-answer">
                    <span class="label">Correct Answer</span>
                    <span class="value">${q.correctAnswer}</span>
                </div>
            </div>
        `;
        elements.wrongQuestionsList.appendChild(item);
    });
    
    elements.wrongQuestionsModal.classList.add('show');
}

function closeWrongQuestionsModal() {
    elements.wrongQuestionsModal.classList.remove('show');
}

function handlePlayAgain() {
    elements.gameSummaryScreen.classList.remove('active');
    
    // Restart the same game type
    if (gameState.category === 'math') {
        if (gameState.challengeType === 'multiplication') {
            elements.configScreen.classList.add('active');
        } else {
            startMathGame();
        }
    } else if (gameState.category === 'english') {
        if (gameState.challengeType === 'vocabulary') {
            startVocabularyLearning();
        } else {
            startEnglishGame();
        }
    }
}

// ===========================================
// START THE APP
// ===========================================
document.addEventListener('DOMContentLoaded', init);
