/**
Sets security-related response headers.
**/

"use strict";

module.exports = (req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff');
  if (new URL(req.url, `http://${req.headers.host}`).pathname.startsWith('/davedoesdev/streamana/')) {
    res.set('Cross-Origin-Opener-Policy', 'same-origin');
    res.set('Cross-Origin-Embedder-Policy', 'credentialless');
  }
  next();
};
