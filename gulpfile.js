/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 * @module gulpfile
 *
 * @description The gulp tasks file. It allow to run some tasks from command line interface.<br>
 * The available tasks are:
 * <ul>
 * <li>help</li>
 * <li>clean</li>
 * <li>lint</li>
 * <li>doc</li>
 * <li>test</li>
 * <li>build</li>
 * <li>release</li>
 * </ul>
 * You could find a complet explanation about these tasks using: <b>npm run help</b>.
 *
 * @requires {@link module: [gulp]{@link https://github.com/gulpjs/gulp}}
 * @requires {@link module: [gulp-jsdoc3]{@link https://github.com/mlucool/gulp-jsdoc3}}
 * @requires {@link module: [gulp-eslint]{@link https://github.com/adametry/gulp-eslint}}
 * @requires {@link module: [del]{@link https://github.com/sindresorhus/del}}
 * @requires {@link module: [minimist]{@link https://github.com/substack/minimist}}
 * @requires {@link module: [rollup]{@link https://github.com/rollup/rollup}}
 * @requires {@link module: [path]{@link https://nodejs.org/api/path.html}}
 * @requires {@link module: [karma]{@link https://github.com/karma-runner/karma}}
 * @requires {@link module: [fancy-log]{@link https://github.com/js-cli/fancy-log}}
 * @requires {@link module: [ansi-colors]{@link https://github.com/doowb/ansi-colors}}
 *
 *
 */

/* eslint-env node */

const gulp      = require( 'gulp' )
const jsdoc     = require( 'gulp-jsdoc3' )
const eslint    = require( 'gulp-eslint' )
const del       = require( 'del' )
const parseArgs = require( 'minimist' )
const rollup    = require( 'rollup' )
const path      = require( 'path' )
const karma     = require( 'karma' )
const log       = require( 'fancy-log' )
const colors    = require( 'ansi-colors' )
const red       = colors.red
const green     = colors.green
const blue      = colors.blue
const cyan      = colors.cyan
const yellow    = colors.yellow
const magenta   = colors.magenta

const packageVersion = require( './package.json' ).version

/**
 * @method npm run help ( default )
 * @description Will display the help in console
 */
gulp.task( 'help', ( done ) => {

    log( '' )
    log( '' )
    log( '====================================================' )
    log( '|                      HELP                        |' )
    log( '|                 Itee Validators                  |' )
    log( `|                      v${packageVersion}                      |` )
    log( '====================================================' )
    log( '' )
    log( 'Available commands are:' )
    log( '' )
    log( '\t', blue( 'npm run' ), cyan( 'help' ), ' - Display this help.' )
    log( '\t', blue( 'npm run' ), cyan( 'clean' ), ' - Will delete builds and temporary folders.' )
    log( '\t', blue( 'npm run' ), cyan( 'lint' ), ' - Will run the eslint in pedantic mode with auto fix when possible.' )
    log( '\t', blue( 'npm run' ), cyan( 'doc' ), ' - Will run jsdoc, and create documentation under `documentation` folder, using the docdash theme' )
    log( '\t', blue( 'npm run' ), cyan( 'test' ), ' - Will run the test framworks (unit and bench), and create reports under `test/report` folder, using the mochawesome theme' )
    log( '\t', blue( 'npm run' ), cyan( 'unit' ), ' - Will run the karma server for unit tests.' )
    log( '\t', blue( 'npm run' ), cyan( 'bench' ), ' - Will run the karma server for benchmarks.' )
    log( '\t', blue( 'npm run' ), cyan( 'build-test' ), ' - Will build the unit and bench tests files.' )
    log( '\t', blue( 'npm run' ), cyan( 'build' ), yellow( '--' ), green( '<options>' ), ' - Will build the application for development and/or production environments.', yellow( 'Note: The two dash are only required if you provide options !' ) )
    log( '' )
    log( '\t The available', green( '<options>' ), 'are:' )
    log( '' )
    log( '\t\t', green( '-n' ), 'or', green( '--name' ), ' - The export name of the builded application', red( '(required for UMD module)' ), cyan( '[Default: ""]' ), '.' )
    log( '' )
    log( '\t\t', green( '-i' ), 'or', green( '--input' ), ' - The main file path to build', cyan( '[Default: "sources/main.js"]' ), '.' )
    log( '' )
    log( '\t\t', green( '-o' ), 'or', green( '--output' ), ' - The folder where output the build', cyan( '[Default: "builds"]' ), '.' )
    log( '' )
    log( '\t\t', green( '-f:' ), magenta( '<format>' ), 'or', green( '--format:' ), magenta( '<format>' ), ' - to specify the output build type', cyan( '[Default: "amd,cjs,es,iife,umd"]' ), '.' )
    log( '\t\t', 'where format could be any of:', magenta( 'amd' ), magenta( 'cjs' ), magenta( 'es' ), magenta( 'iife' ), magenta( 'umd' ) )
    log( '' )
    log( '\t\t', green( '-e:' ), magenta( '<env>' ), 'or', green( '--env:' ), magenta( '<env>' ), ' - to specify the build environment', cyan( '[Default: "dev"]' ), '.' )
    log( '\t\t', 'where env could be any of:', magenta( 'dev' ), magenta( 'prod' ) )
    log( '' )
    log( '\t\t', green( '-s' ), 'or', green( '--sourcemap' ), ' - to build with related source map', cyan( '[Default: true]' ), '.' )
    log( '' )
    log( '\t\t', green( '-t' ), 'or', green( '--treeshake' ), ' - allow to perform treeshaking when building', cyan( '[Default: true]' ), '.' )
    log( '' )
    log( '\t', blue( 'npm run' ), cyan( 'release' ), ' - Will run all the lint, test stuff, and if succeed will build the application.' )
    log( '' )
    log( 'In case you have', blue( 'gulp' ), 'installed globally, you could use also:' )
    log( '\t', blue( 'gulp' ), cyan( 'command' ), ' - It will perform the command like using "npm run" but with less characters to type... Because you\'re a developer, right ?' )
    log( '' )
    log( '' )

    done()

} )

/**
 * @method npm run clean
 * @description Will delete builds and temporary folders
 */
gulp.task( 'clean', () => {

    return del( [
        './builds',
        './documentation'
    ] )

} )

/**
 * @method npm run lint
 * @description Will lint the sources files and try to fix the style when possible
 */
gulp.task( 'lint', () => {

    const filesToLint = [
        'gulpfile.js',
        'configs/**/*.js',
        'sources/**/*.js',
        'tests/**/*.js',
        '!tests/builds/*.js',
        '!tests/third_party/*.js',
        '!tests/itee-validators.benchs.js',
        '!tests/itee-validators.units.js'
    ]

    return gulp.src( filesToLint, { base: './' } )
               .pipe( eslint( {
                   allowInlineConfig: true,
                   globals:           [],
                   fix:               true,
                   quiet:             false,
                   envs:              [],
                   configFile:        './configs/eslint.conf.js',
                   parserOptions:     {},
                   plugins:           [],
                   rules:             {},
                   useEslintrc:       false
               } ) )
               .pipe( eslint.format( 'stylish' ) )
               .pipe( gulp.dest( '.' ) )
               .pipe( eslint.failAfterError() )

} )

/**
 * @method npm run doc
 * @description Will generate this documentation
 */
gulp.task( 'doc', ( done ) => {

    const config = require( './configs/jsdoc.conf' )
    const files  = [
        'README.md',
        'gulpfile.js',
        './configs/*.js',
        './sources/**/*.js',
        './tests/**/*.js'
    ]

    gulp.src( files, { read: false } )
        .pipe( jsdoc( config, done ) )

} )

/**
 * @method npm run unit
 * @description Will run unit tests using karma
 */
gulp.task( 'unit', ( done ) => {

    const karmaServer = new karma.Server( {
        configFile: `${__dirname}/configs/karma.units.conf.js`,
        singleRun:  true
    }, ( exitCode ) => {

        if ( exitCode !== 0 ) {
            done( `Karma server exit with code ${exitCode}` )
        } else {
            log( `Karma server exit with code ${exitCode}` )
            done()
        }

    } )

    karmaServer.on( 'browser_error', ( browser, error ) => {
        log( red( error.message ) )
    } )

    karmaServer.start()

} )

/**
 * @method npm run bench
 * @description Will run benchmarks using karma
 */
gulp.task( 'bench', ( done ) => {

    const karmaServer = new karma.Server( {
        configFile: `${__dirname}/configs/karma.benchs.conf.js`,
        singleRun:  true
    }, ( exitCode ) => {

        if ( exitCode !== 0 ) {
            done( `Karma server exit with code ${exitCode}` )
        } else {
            log( `Karma server exit with code ${exitCode}` )
            done()
        }

    } )

    karmaServer.on( 'browser_error', ( browser, error ) => {
        log( red( error.message ) )
    } )

    karmaServer.start()

} )

/**
 * @method npm run test
 * @description Will run unit tests and benchmarks using karma
 */
gulp.task( 'test', gulp.series( 'unit', 'bench' ) )

///
/// BUILDS
///

gulp.task( 'build-test', ( done ) => {

    const options = parseArgs( process.argv, {
        string:  [ 'n', 'i', 'f', 'e' ],
        boolean: [ 's', 't' ],
        default: {
            n: 'itee-validators',
            i: path.join( __dirname, 'sources' ),
            o: path.join( __dirname, 'builds' ),
            f: 'esm,cjs,iife,umd',
            e: 'dev',
            s: true,
            t: true
        },
        alias: {
            n: 'name',
            i: 'input',
            o: 'output',
            f: 'format',
            e: 'env',
            s: 'sourcemap',
            t: 'treeshake'
        }
    } )

    const configs = require( './configs/rollup.test.conf' )( options )

    nextBuild()

    function nextBuild ( error ) {
        'use strict'

        if ( error ) {

            done( error )

        } else if ( configs.length === 0 ) {

            done()

        } else {

            const config = configs.pop()
            log( `Building ${config.output.file}` )

            rollup.rollup( config )
                  .then( ( bundle ) => { return bundle.write( config.output ) } )
                  .then( () => { nextBuild() } )
                  .catch( nextBuild )

        }

    }

} )

/**
 * @method npm run build
 * @description Will build itee client module using optional arguments, running clean and _extendThree tasks before. See help to further informations.
 */
gulp.task( 'build', ( done ) => {

    const options = parseArgs( process.argv, {
        string:  [ 'n', 'i', 'f', 'e' ],
        boolean: [ 's', 't' ],
        default: {
            n: 'Itee.Validators',
            i: path.join( __dirname, 'sources/itee-validators.js' ),
            o: path.join( __dirname, 'builds' ),
            f: 'esm,cjs,iife,umd',
            e: 'dev,prod',
            s: true,
            t: true
        },
        alias: {
            n: 'name',
            i: 'input',
            o: 'output',
            f: 'format',
            e: 'env',
            s: 'sourcemap',
            t: 'treeshake'
        }
    } )

    const configs = require( './configs/rollup.conf' )( options )

    nextBuild()

    function nextBuild ( error ) {
        'use strict'

        if ( error ) {

            done( error )

        } else if ( configs.length === 0 ) {

            done()

        } else {

            const config = configs.pop()
            log( `Building ${config.output.file}` )

            rollup.rollup( config )
                  .then( ( bundle ) => { return bundle.write( config.output ) } )
                  .then( () => { nextBuild() } )
                  .catch( nextBuild )

        }

    }

} )

/**
 * Add watcher to assets javascript files and run build-js on file change
 */
gulp.task( 'build-auto', gulp.series( 'build', ( done ) => {

    log( 'Add watcher to javascript files !' )

    gulp.watch( './sources/**/*.js', [ 'build' ] )
    done()

} ) )

/**
 * @method npm run release
 * @description Will perform a complet release of the library.
 */
gulp.task( 'release', gulp.series( 'clean', 'lint', 'doc', 'build-test', 'test', 'build' ) )

//---------

gulp.task( 'default', gulp.series( 'help' ) )
