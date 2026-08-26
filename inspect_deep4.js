const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// 1. Get full sequence section starting at 19015
console.log('=== FULL SEQUENCE SECTION ===');
console.log(html.substring(19015, 19015 + 3000));

// 2. Get more of the benefit section - the left image
const imgWrapIdx = html.indexOf('"img-wrapper"');
console.log('\n=== FULL IMG-WRAPPER (benefit section) ===');
console.log(html.substring(imgWrapIdx - 50, imgWrapIdx + 1200));

// 3. Get the footer product area 
const footerProdHeadIdx = html.indexOf('footer-product-heading');
console.log('\n=== FOOTER PRODUCT SECTION ===');
console.log(html.substring(footerProdHeadIdx - 600, footerProdHeadIdx + 200));
