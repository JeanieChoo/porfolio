require('esbuild').buildSync({entryPoints:['src/skills.jsx'],bundle:true,format:'esm',outfile:'skills.bundle.js',minify:true,jsx:'automatic',target:['es2020'],legalComments:'eof'});
