require('esbuild').buildSync({entryPoints:['src/lab-widgets.jsx'],bundle:true,format:'esm',outfile:'lab-widgets.bundle.js',minify:true,jsx:'automatic',target:['es2020'],legalComments:'eof'});
