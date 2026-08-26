const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Check where the sequence background color is set (the beige/cream background)
// The sequence section shows images seq_0_0.webp through seq_0_199.webp from assets/img/
// Currently only jagung-bakar.png exists there

// The third screenshot shows the sequence section "Renyah. Gurih. Lezat." section
// User wants its BACKGROUND changed to "mock up 3 dengan background"
// This background is drawn on the canvas from the sequence image frames
// Since the sequence animation uses canvas frames (seq_0_0.webp to seq_0_199.webp)
// We need to set a CSS background on the sequence-sticky as a fallback

// Check what the sequence section looks like with CSS
const css = fs.readFileSync('assets/more-nutrition.shared.e35377ec8.min-9a32b3.css', 'utf8');

// Find sequence-section CSS
const seqSectionCssIdx = css.indexOf('.sequence-section');
console.log('=== SEQUENCE-SECTION CSS ===');
console.log(css.substring(seqSectionCssIdx, seqSectionCssIdx + 400));

// Find sequence-scroll-wrap CSS
const seqScrollIdx = css.indexOf('.sequence-scroll-wrap');
console.log('\n=== SEQUENCE-SCROLL-WRAP CSS ===');
console.log(css.substring(seqScrollIdx, seqScrollIdx + 400));

// Check what the third screenshot "Renyah. Gurih. Lezat." section actually is
// From screenshot 3: it shows a background of matcha iced drink photo and text "Renyah. Gurih. Lezat."
// This is likely the testimonial section with a big background image, not the sequence canvas

// Find testimonial section
const testimonialBg = [...html.matchAll(/class="testimonial[^"]*"/g)].map(m => ({ idx: m.index, cls: m[0] }));
console.log('\n=== ALL TESTIMONIAL CLASSES ===');
console.log(testimonialBg.slice(0, 10));

// Check the testimonial section background image
const testimonialBgIdx = html.indexOf('testimonial-wrapper');
console.log('\n=== TESTIMONIAL-WRAPPER ===');
console.log(html.substring(testimonialBgIdx - 200, testimonialBgIdx + 600));

// The screenshot 3 image (Renyah.Gurih.Lezat.) with matcha drink
// Let's find the section that has this background image
const seqFinalIdx = html.indexOf('sequence-final');
console.log('\n=== SEQUENCE FINAL ===');
console.log(html.substring(seqFinalIdx - 100, seqFinalIdx + 800));
