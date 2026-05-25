const { readFileSync } = require('fs');
const { join } = require('path');

const html = readFileSync(join(__dirname, '..', 'index.html'), 'utf8');

module.exports = (req, res) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(html);
};
