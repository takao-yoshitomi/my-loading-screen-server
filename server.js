const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// my-loading-screen フォルダの静的ファイルを返す
app.use(express.static(path.join(__dirname, 'my-loading-screen')));

// すべてのリクエストで index.html を返す
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-loading-screen', 'index.html'));
});

// IPアドレス '0.0.0.0' を指定してリッスン
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});