const fs = require('fs');
const appJs = fs.readFileSync('assets/app-607aaf.js', 'utf8');

// Look for the sequence canvas image array in JS
const canvasIdx = appJs.indexOf('sequence-canvas');
console.log('Canvas in JS at:', canvasIdx);
if (canvasIdx !== -1) {
  console.log(appJs.substring(canvasIdx - 100, canvasIdx + 500));
}

// Search for img/ folder references (the canvas loads images from assets/img/)
const imgFolderIdx = appJs.indexOf('assets/img/');
console.log('\nassets/img/ in JS at:', imgFolderIdx);
if (imgFolderIdx !== -1) {
  console.log(appJs.substring(imgFolderIdx - 200, imgFolderIdx + 600));
}

// Check if there's any matcha or coffee background
const matchaBgIdx = appJs.indexOf('matcha');
console.log('\nmatcha in JS at:', matchaBgIdx);

// Check what the canvas data-sequence-canvas-img-path attribute is used for
// It's 'assets/img/' - let's check if that folder exists
const imgDir = 'assets/img';
try {
  const imgFiles = fs.readdirSync(imgDir);
  console.log('\nFiles in assets/img:', imgFiles.slice(0, 20));
} catch (e) {
  console.log('\nassets/img does NOT exist:', e.message);
}

// Look for background image loading in JS
const seqBgSearch = [...appJs.matchAll(/["']([^"']*\.(jpg|png|webp|jpeg))["']/g)]
  .filter(m => !m[1].includes('http'))
  .slice(0, 20)
  .map(m => m[1]);
console.log('\nFirst 20 relative image paths in JS:', seqBgSearch);
