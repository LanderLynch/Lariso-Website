const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// 1. Find benefit table section - left image
const benefitIdx = html.indexOf('benefit-table');
console.log('=== BENEFIT TABLE AREA ===');
console.log(html.substring(benefitIdx - 500, benefitIdx + 200));

// 2. Find the left product image in benefit section
const benefitVisualIdx = html.indexOf('benefit-visual');
console.log('\n=== BENEFIT VISUAL ===');
console.log(html.substring(benefitVisualIdx - 100, benefitVisualIdx + 600));

// 3. Find the benefit table logo header (Lariso Logo broken image)
const benefitTitleIdx = html.indexOf('benefit-table-title');
console.log('\n=== BENEFIT TABLE TITLE ===');
console.log(html.substring(benefitTitleIdx - 50, benefitTitleIdx + 800));

// 4. Find footer-product-heading (LARISO KERIPIK TEMPE SAGU large text)
const fpHeadingIdx = html.indexOf('footer-product-heading');
console.log('\n=== FOOTER PRODUCT HEADING ===');
console.log(html.substring(fpHeadingIdx - 100, fpHeadingIdx + 300));

// 5. Find the sequence/scroll section with "Renyah. Gurih. Lezat."
const renyahIdx = html.indexOf('Renyah');
console.log('\n=== RENYAH SECTION ===');
console.log(html.substring(renyahIdx - 300, renyahIdx + 800));
