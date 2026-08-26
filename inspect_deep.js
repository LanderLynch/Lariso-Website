const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Search more precisely
// 1. Benefit table left image
const sequences = [...html.matchAll(/class="[^"]*benefit[^"]*"/g)].map(m => ({ idx: m.index, cls: m[0] }));
console.log('=== ALL BENEFIT CLASSES ===');
console.log(sequences.slice(0, 20));

// 2. Search for the matcha scoop image
const matchaScoopIdx = html.indexOf('sequence-why-people');
console.log('\n=== SEQUENCE WHY PEOPLE ===');
console.log(html.substring(matchaScoopIdx - 200, matchaScoopIdx + 600));

// 3. Find 'why-people' or 'benefit' section image
const whyIdx = html.indexOf('why-people');
console.log('\n=== WHY PEOPLE SECTION ===');
console.log(html.substring(whyIdx - 200, whyIdx + 500));

// 4. Find "Renyah" in full context
const allRenyah = [...html.matchAll(/Renyah/g)].map(m => m.index);
console.log('\n=== RENYAH POSITIONS ===', allRenyah);
if (allRenyah.length > 0) {
  console.log(html.substring(allRenyah[0] - 400, allRenyah[0] + 600));
}

// 5. Find 'sequence-section' or 'sequence-inner'
const seqSectionIdx = html.indexOf('sequence-section');
console.log('\n=== SEQUENCE SECTION ===');
console.log(html.substring(seqSectionIdx - 100, seqSectionIdx + 600));
