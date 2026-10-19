// Publish only browser assets. Large video stays on the existing GitHub Pages host.
require('./build-site.cjs');
const fs = require('fs');
const path = require('path');
const output = path.join(__dirname, 'dist');
const video = 'assets/lab-under-two-wings.mp4';
const lab = path.join(output, 'lab.js');
fs.writeFileSync(lab, fs.readFileSync(lab, 'utf8').replaceAll(video,
  'https://jeaniechoo.github.io/porfolio/' + video));
fs.unlinkSync(path.join(output, video));
function validate(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes:true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) validate(file);
    else if (fs.statSync(file).size > 25 * 1024 * 1024)
      throw new Error('Cloudflare asset exceeds 25 MiB: ' + file);
  }
}
validate(output);
console.log('Cloudflare assets validated: every file is below 25 MiB.');
