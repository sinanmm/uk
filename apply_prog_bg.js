const fs = require('fs');

// 1. Update globals.css
const cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf8');

const newCSS = `

.bg-prog1-pattern {
  background-color: #ffffff;
  background-image: url('/prog1_bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
.bg-prog1-pattern::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 0;
  pointer-events: none;
}
.bg-prog1-pattern > * {
  position: relative;
  z-index: 1;
}

.bg-prog2-pattern {
  background-color: #ffffff;
  background-image: url('/prog2_bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
.bg-prog2-pattern::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 0;
  pointer-events: none;
}
.bg-prog2-pattern > * {
  position: relative;
  z-index: 1;
}

.bg-prog3-pattern {
  background-color: #ffffff;
  background-image: url('/prog3_bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
.bg-prog3-pattern::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 0;
  pointer-events: none;
}
.bg-prog3-pattern > * {
  position: relative;
  z-index: 1;
}
`;

if (!css.includes('.bg-prog1-pattern')) {
  css += newCSS;
  fs.writeFileSync(cssFile, css, 'utf8');
}

// 2. Update files
const files = [
  { file: 'app/programs/startup-foundations/page.tsx', p: 'bg-prog1-pattern' },
  { file: 'app/programs/startup-launch-growth/page.tsx', p: 'bg-prog2-pattern' },
  { file: 'app/programs/entrepreneur-development/page.tsx', p: 'bg-prog3-pattern' }
];

files.forEach(f => {
  let content = fs.readFileSync(f.file, 'utf8');
  // Just replace the FIRST occurrence of bg-white-pattern with the specific pattern (this targets the Hero section)
  content = content.replace('bg-white-pattern', f.p);
  fs.writeFileSync(f.file, content, 'utf8');
  console.log('Updated', f.file);
});
