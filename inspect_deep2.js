const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// 1. Get full benefit section
const benefitSectionIdx = html.indexOf('class="benefit-section"');
console.log('=== BENEFIT SECTION FULL ===');
console.log(html.substring(benefitSectionIdx - 50, benefitSectionIdx + 2000));

// 2. Get the full sequence-section with the Renyah heading at idx ~43844
const renyahInSeq = 43844;
console.log('\n=== SEQUENCE SECTION WITH RENYAH ===');
console.log(html.substring(renyahInSeq - 800, renyahInSeq + 1500));

// 3. Look for the sequence cards inner image (the matcha drink background)
const seqInnerIdx = html.indexOf('sequence-inner');
console.log('\n=== SEQUENCE INNER FIRST ===');
console.log(html.substring(seqInnerIdx - 50, seqInnerIdx + 800));

// 4. Find 'sequence-media' or similar
const seqMediaIdx = html.indexOf('sequence-media');
console.log('\n=== SEQUENCE MEDIA ===');
console.log(html.substring(seqMediaIdx - 50, seqMediaIdx + 600));

// 5. List all lariso-package files  
const pkgFiles = fs.readdirSync('assets/lariso-package');
console.log('\n=== LARISO PACKAGE FILES ===');
console.log(pkgFiles);
