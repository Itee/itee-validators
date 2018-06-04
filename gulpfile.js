
const gulp     = require( 'gulp' )
const jsdoc    = require( 'gulp-jsdoc3' )


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

