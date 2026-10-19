require('esbuild').buildSync({entryPoints:['src/photos.jsx'],bundle:true,format:'esm',outfile:'photos.bundle.js',minify:true,jsx:'automatic',target:['es2020'],legalComments:'eof'});
