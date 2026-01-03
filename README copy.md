# Advait's Math Adventure 🧮

A fun and engaging multiplication learning app designed for kids! Built with love for Advait.

## Features ✨

- 🎯 **Multiplication Tables**: Practice tables 1-6, 10, and 11 (configurable!)
- ⏱️ **10-Second Timer**: With visual progress ring
- ⚡ **Hurry Up Alerts**: Visual and voice hints after 7 seconds
- 🎉 **Party Poppers**: Celebrate correct answers!
- 😢 **Try Again**: Wrong answers get another chance
- ⏸️ **Pause/Resume**: Take breaks anytime
- ⭐ **Points System**: Earn points with streak bonuses
- 🎨 **Apple-Themed UI**: Beautiful glassmorphism design

## Configuration 🔧

Edit the `CONFIG` object in `public/app.js` to customize:

```javascript
const CONFIG = {
    // Tables to practice (add more as your child progresses!)
    TABLES: [1, 2, 3, 4, 5, 6, 10, 11],
    
    // Maximum multiplier (questions: TABLE × 1 to TABLE × MAX_MULTIPLIER)
    MAX_MULTIPLIER: 12,
    
    // Timer settings (in seconds)
    TIMER_DURATION: 10,
    HURRY_UP_TIME: 7,  // Start warning after this many seconds
    
    // Points
    POINTS_PER_CORRECT: 10,
    BONUS_STREAK_MULTIPLIER: 5,  // Extra points per streak after 3
};
```

### Adding More Tables
When Advait is ready for more tables, simply update the `TABLES` array:
```javascript
TABLES: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
```

## Local Development 🖥️

```bash
# Install dependencies
npm install

# Run locally
npm start

# Open browser
open http://localhost:8080
```

## Deploy to Google Cloud Run 🚀

### Option 1: Deploy from Source (Recommended)
```bash
# Deploy directly from source code
gcloud run deploy advait-math-adventure \
  --source . \
  --region us-central1 \
  --allow-unauthenticated
```

### Option 2: Build and Deploy via GAR
```bash
# Build the container
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/advait-math-adventure

# Deploy to Cloud Run
gcloud run deploy advait-math-adventure \
  --image gcr.io/YOUR_PROJECT_ID/advait-math-adventure \
  --region us-central1 \
  --allow-unauthenticated
```

## Project Structure 📁

```
cloud-run-service/
├── index.js           # Express server
├── package.json       # Dependencies
├── README.md          # This file
└── public/
    ├── index.html     # Main HTML
    ├── styles.css     # Apple-themed styles
    └── app.js         # Game logic
```

## How It Works 🎮

1. **Start Screen**: Select which multiplication tables to practice
2. **Game Screen**: Answer random multiplication questions
3. **Timer**: 10 seconds per question with warnings at 3 seconds remaining
4. **Feedback**: 
   - ✅ Correct → Party poppers + points + next question
   - ❌ Wrong → Sad emoji + try again (same question)
5. **Pause**: Press ⏸️ or ESC key anytime

## Made with ❤️ for Advait

Happy Learning! 🎓


## Deploying the App to GCP Cloud Run ## 

gcloud run deploy advait-math-adventure --source . --region europe-west2 --allow-unauthenticated