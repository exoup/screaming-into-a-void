import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: [
    { out: 'app', in: './src/client/index.js' },
    { out: 'styles', in: './src/client/public/styles.css' },
  ],
  loader: {
    '.js': 'jsx',
  },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  bundle: true,
  treeShaking: true,
  minify: true,
  write: true,
  // metafile: true,
  outdir: 'dist/',
})
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });