const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find the testimonial section with "Renyah. Gurih. Lezat." big heading
const testimonialBigHeading = html.indexOf('testimonial-big-heading');
console.log('=== TESTIMONIAL BIG HEADING SECTION ===');
console.log(html.substring(testimonialBigHeading - 600, testimonialBigHeading + 400));

// Find the testimonial container background
const testimonialContainerIdx = html.indexOf('testimonial-container');
console.log('\n=== TESTIMONIAL CONTAINER ===');
console.log(html.substring(testimonialContainerIdx - 200, testimonialContainerIdx + 500));

// Find the background image in that section - look at the full section from testimonial-slider-section or similar
const allSectionBackgrounds = [...html.matchAll(/class="[^"]*section[^"]*"/g)].filter(m => {
  const snippet = html.substring(m.index - 20, m.index + 200);
  return snippet.includes('img') || snippet.includes('background');
}).map(m => ({ idx: m.index, cls: m[0] }));
console.log('\n=== SECTIONS WITH IMAGES ===');
console.log(allSectionBackgrounds.slice(0, 10));

// Check what's at index 43844 region ("Renyah" found here)
// From earlier we found Renyah at multiple locations - let's check 43844
console.log('\n=== AREA AT 43844 ===');
console.log(html.substring(43300, 45000));
