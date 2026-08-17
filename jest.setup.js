import '@testing-library/jest-dom';

// Polyfill TextEncoder and TextDecoder for jsdom environment if missing
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
