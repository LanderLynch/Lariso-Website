const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// 1. Get the full benefit section with benefit-table-title-wrapper
const btTitleWrapIdx = html.indexOf('benefit-table-title-wrapper');
console.log('=== BENEFIT TABLE TITLE WRAPPER ===');
console.log(html.substring(btTitleWrapIdx - 100, btTitleWrapIdx + 800));

// 2. Get benefit section left image details (img-wrapper)
const imgWrapperIdx = html.indexOf('"img-wrapper"');
console.log('\n=== IMG WRAPPER IN BENEFIT ===');
console.log(html.substring(imgWrapperIdx - 50, imgWrapperIdx + 700));

// 3. Find the sequence section that has "Renyah" - look for sequence-section-inner
const allSeqSection = [...html.matchAll(/class="sequence-section"/g)].map(m => m.index);
console.log('\nAll sequence-section positions:', allSeqSection);

// check the one after 40000
const targetSeq = allSeqSection.find(i => i > 40000);
if (targetSeq) {
  console.log('\n=== TARGET SEQUENCE SECTION ===');
  console.log(html.substring(targetSeq - 100, targetSeq + 1200));
}

// 4. Look for sequence-inner or background images in the sequence
const seqInnerAll = [...html.matchAll(/class="sequence-inner"/g)].map(m => m.index);
console.log('\nAll sequence-inner positions:', seqInnerAll);
if (seqInnerAll.length > 0) {
  seqInnerAll.forEach(idx => {
    console.log('\nAt idx', idx, ':');
    console.log(html.substring(idx - 50, idx + 500));
  });
}
