const fs = require('fs');

// 1. Update globals.css
const cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf8');
if (!css.includes('.bg-white-pattern')) {
  css += `

.bg-white-pattern {
  background-color: #ffffff;
  background-image: url('/bg_abstract_waves.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
.bg-white-pattern::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.94);
  z-index: 0;
  pointer-events: none;
}
.bg-white-pattern > * {
  position: relative;
  z-index: 1;
}

.bg-grid-pattern {
  background-color: #f8fafc;
  background-image: url('/bg_grid_gradient.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
.bg-grid-pattern::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.93);
  z-index: 0;
  pointer-events: none;
}
.bg-grid-pattern > * {
  position: relative;
  z-index: 1;
}
`;
  fs.writeFileSync(cssFile, css, 'utf8');
}

// 2. Update files
const files = [
  'app/page.tsx',
  'app/programs/startup-foundations/page.tsx',
  'app/programs/startup-launch-growth/page.tsx',
  'app/programs/entrepreneur-development/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<section([^>]*className="[^"]*)\bbg-white\b([^"]*")[^>]*>/g, '<section$1bg-white-pattern$2>');
  content = content.replace(/<section([^>]*className="[^"]*)\bbg-gray-50\b([^"]*")[^>]*>/g, '<section$1bg-grid-pattern$2>');
  content = content.replace(/<section([^>]*className="[^"]*)\bbg-gray-50\/[0-9]+\b([^"]*")[^>]*>/g, '<section$1bg-grid-pattern$2>');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated', file);
});
