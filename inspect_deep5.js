const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find the sequence section canvas that shows the scrolling background
// At pos ~19015. Let me get more of it.
console.log('=== SEQUENCE SECTION + CARDS (3000 more chars) ===');
console.log(html.substring(19015 + 3000, 19015 + 5000));

// Also check the full benefit table check/x alignment
const benefitItemWrapIdx = html.indexOf('benefit-item-wrapper');
console.log('\n=== BENEFIT ITEM WRAPPER ===');
console.log(html.substring(benefitItemWrapIdx - 50, benefitItemWrapIdx + 800));

// Check what's inside benefit-table from idx 35864
console.log('\n=== FULL BENEFIT TABLE ===');
console.log(html.substring(35864, 35864 + 3000));
