const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (_req, res) => res.json({ ok: true, app: 'bthlab-designs-sandbox' }));

app.listen(PORT, () => {
  console.log(`🎨 BthLab Designs Sandbox running on port ${PORT}`);
});
