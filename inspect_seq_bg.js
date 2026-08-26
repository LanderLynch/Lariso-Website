const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Look for sequence section background - the canvas img folder
const canvasPathIdx = html.indexOf('data-sequence-canvas-img-path');
console.log('=== CANVAS PATH ===');
console.log(html.substring(canvasPathIdx - 50, canvasPathIdx + 300));

// Look for a background image in the sequence section
// It uses a canvas element - the background images are likely loaded via JS from app file
// Let's look for sequence-bg or similar
const seqBgIdx = html.indexOf('sequence-bg');
console.log('\nsequence-bg found at:', seqBgIdx);

// Check the sequence-sticky area 
const seqStickyIdx = html.indexOf('sequence-sticky');
console.log('\n=== SEQUENCE STICKY ===');
console.log(html.substring(seqStickyIdx - 50, seqStickyIdx + 600));

// Check CSS for sequence-sticky
const css = fs.readFileSync('assets/more-nutrition.shared.e35377ec8.min-9a32b3.css', 'utf8');
const seqCssIdx = css.indexOf('.sequence-sticky');
console.log('\n=== SEQUENCE-STICKY CSS ===');
console.log(css.substring(seqCssIdx, seqCssIdx + 400));

const seqCanvasCss = css.indexOf('.sequence-canvas');
console.log('\n=== SEQUENCE-CANVAS CSS ===');
console.log(css.substring(seqCanvasCss, seqCanvasCss + 300));

// Check the app JS for sequence background
const appJs = fs.readFileSync('assets/app-607aaf.js', 'utf8');
const seqBgJsIdx = appJs.indexOf('sequence-bg');
console.log('\nsequence-bg in JS at:', seqBgJsIdx);
if (seqBgJsIdx !== -1) {
  console.log(appJs.substring(seqBgJsIdx - 100, seqBgJsIdx + 400));
}

// Look for where the background image is set in JS
const bgImgIdx = appJs.indexOf('background');
console.log('\nFirst background in JS at:', bgImgIdx);

// Check what sequence images are being loaded
const seqImgPath = [...appJs.matchAll(/sequence[^"'\s]*(jpg|png|webp)/gi)].slice(0, 10).map(m => m[0]);
console.log('\nSequence image paths in JS:', seqImgPath);
