require('esbuild').buildSync({entryPoints:['src/work.jsx'],bundle:true,format:'esm',outfile:'work.bundle.js',minify:true,jsx:'automatic',target:['es2020'],legalComments:'eof'});
