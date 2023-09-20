import esbuild from 'esbuild'

/**
* Exit
* @param {NodeJS.SignalsListener} signal
*/
function signalHandler(signal) {
    console.debug(`\n${signal} : Signal received : done watching.`);
    context.dispose();
    process.exit(0)
}


let context = await esbuild.context({
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
    // metafile: true,
    outdir: 'dist/',
})
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });

await context.watch()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
console.log('Watching...');

process.on('SIGINT', signalHandler);
process.on('SIGTERM', signalHandler);
process.on('SIGKILL', signalHandler);