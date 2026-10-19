require('esbuild').buildSync({entryPoints:['src/summary.jsx'],bundle:true,format:'esm',outfile:'summary.bundle.js',minify:true,jsx:'automatic',target:['es2020'],legalComments:'eof'});
