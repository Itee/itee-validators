/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module gulpfile
 *
 * @description The gulp tasks file. It allow to run some tasks from command line interface.<br>
 * The available tasks are:
 * <ul>
 * <li>doc</li>
 * </ul>
 * You could find a complet explanation about these tasks using: <b>npm run help</b>.
 *
 * @requires {@link module: [gulp]{@link https://github.com/gulpjs/gulp}}
 * @requires {@link module: [gulp-jsdoc3]{@link https://github.com/mlucool/gulp-jsdoc3}}
 */


const gulp     = require( 'gulp' )
const jsdoc    = require( 'gulp-jsdoc3' )


/**
 * @method npm run help ( default )
 * @description Will display the help in console
 */
gulp.task( 'help', ( done ) => {

    log( '====================================================' )
    log( '|                                                  |' )
    log( '|                Itee Client - HELP                |' )
    log( '|                                                  |' )
    log( '====================================================' )
    log( '' )
    log( 'Available commands are:' )
    log( blue( 'npm run' ), cyan( 'help' ), ' - Display this help.' )
    log( blue( 'npm run' ), cyan( 'doc' ), ' - Will run jsdoc, and create documentation under `documentation` folder, using the docdash theme' )

    done()

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

//---------

gulp.task( 'default', gulp.series( 'help' ) )
