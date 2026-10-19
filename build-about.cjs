require('esbuild').buildSync({entryPoints:['src/about.jsx'],bundle:true,format:'esm',outfile:'about.bundle.js',minify:true,jsx:'automatic',target:['es2020'],legalComments:'eof'});
console.log('About card bundle built.');
