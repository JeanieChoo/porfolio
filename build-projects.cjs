require('esbuild').buildSync({entryPoints:['src/projects.jsx'],bundle:true,format:'esm',outfile:'projects.bundle.js',minify:true,jsx:'automatic',target:['es2020'],legalComments:'eof'});
