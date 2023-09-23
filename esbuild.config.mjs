import esbuild from 'esbuild';
import chalk from 'chalk';

let watchPlugin = {
    name: 'watchBuild',
    setup(build) {
        let startTime;
        build.onStart(() => {
            startTime = new Date();
            console.log(chalk.greenBright('Build started.'));
        })

        build.onEnd((res) => {
            console.log(`${chalk.greenBright('Build complete')} with ${chalk.redBright(res.errors.length)} errors in ${chalk.yellowBright((new Date() - startTime))} milliseconds.`);
        })
    },
}

await esbuild.build({
  entryPoints: [
    { out: 'app', in: './src/client/index.js' },
    { out: 'styles', in: './src/client/public/styles.css' },
    { out: 'index', in: './src/client/public/index.html' }
  ],
  loader: {
    '.js': 'jsx',
    '.css': 'css',
    '.html': 'copy'
  },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  bundle: true,
  treeShaking: true,
  minify: true,
  write: true,
  plugins: [watchPlugin],
  // metafile: true,
  outdir: 'dist/',
})
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });