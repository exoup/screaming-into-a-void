import esbuild from 'esbuild';
import chalk from 'chalk';

/**
* Exit
* @param {NodeJS.SignalsListener} signal
*/
function signalHandler(signal) {
    console.debug(`\n${chalk.redBright(signal)} : Signal received : done watching.`);
    context.dispose();
    process.exit(0)
}

let watchPlugin = {
    name: 'watchBuild',
    setup(build) {
        let startTime;
        build.onStart(() => {
            startTime = new Date();
            console.log(chalk.greenBright('Build started.'));
        })

        build.onEnd((res) => {
            console.log(`${chalk.greenBright('Build ended')} with ${chalk.redBright(res.errors.length)} errors in ${chalk.yellowBright((new Date() - startTime))} milliseconds.`);
        })
    },
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
    write: true,
    plugins: [watchPlugin],
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