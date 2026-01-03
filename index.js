import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for configuration (can be extended later)
app.get('/api/config', (req, res) => {
  res.json({
    appName: "Advait's Math Adventure",
    version: "1.0.0",
    defaultTables: [1, 2, 3, 4, 5, 6, 10, 11],
    timerDuration: 10,
    hurryUpTime: 7
  });
});

// Main route - serve the app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`🎓 Advait's Math Adventure is running on port ${port}`);
});