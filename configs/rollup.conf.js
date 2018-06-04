/**
 * @file Todo
 *
 * @author Itee <valcketristan@gmail.com>
 * @license MIT
 */

const uglify = require( 'rollup-plugin-uglify-es' )
const strip  = require( 'rollup-plugin-strip' )

const stripConfig = {
    // set this to `false` if you don't want to
    // remove debugger statements
    debugger: true,

    // defaults to `[ 'console.*', 'assert.*' ]`
    functions: [ 'console.*' ],
//    functions: [ 'throw\snew\sTypeError' ],
//    functions: [ /if\s*\(\s*[\w\(\s\)]*{[\w\s\('!\)]*}/g ],
//    functions: [ 'console.*', 'assert.*', 'debug', 'alert', 'throw new TypeError' ],

    // set this to `false` if you're not using sourcemaps –
    // defaults to `true`
    sourceMap: false
}

//plugins: [
//    strip(),
//    uglify()
//],
//
export default [
    {
        input:   'sources/main.js',
        plugins: [],
        output:  {
            indent: '\t',
            format: 'es',
            name:   'Itee.Validators',
            file:   'builds/itee-validators.esm.js'
        }
    },
    {
        input:   'sources/main.js',
        plugins: [
            strip(stripConfig)
        ],
        output:  {
            indent: '\t',
            format: 'es',
            name:   'Itee.Validators',
            file:   'builds/itee-validators.esm.min.js'
        }
    },
    {
        input:   'sources/main.js',
        plugins: [],
        output:  {
            indent: '\t',
            format: 'cjs',
            name:   'Itee.Validators',
            file:   'builds/itee-validators.cjs.js'
        }
    },
    {
        input:   'sources/main.js',
        plugins: [
            strip(stripConfig)
        ],
        output:  {
            indent: '\t',
            format: 'cjs',
            name:   'Itee.Validators',
            file:   'builds/itee-validators.cjs.min.js'
        }
    },
    {
        input:   'sources/main.js',
        plugins: [],
        output:  {
            indent: '\t',
            format: 'iife',
            name:   'Itee.Validators',
            file:   'builds/itee-validators.iife.js'
        }
    },
    {
        input:   'sources/main.js',
        plugins: [
            strip(stripConfig)
        ],
        output:  {
            indent: '\t',
            format: 'iife',
            name:   'Itee.Validators',
            file:   'builds/itee-validators.iife.min.js'
        }
    }
]