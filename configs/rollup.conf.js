/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module config/karmaBenchConfiguration
 *
 * @description The file manage the rollup configuration for build sources
 *
 * @requires {@link module: [rollup-plugin-uglify-es]{@link https://github.com/gulpjs/gulp}}
 * @requires {@link module: [gulp]{@link https://github.com/gulpjs/gulp}}
 *
 */

const replace = require( 'rollup-plugin-re' )
const uglify  = require( 'rollup-plugin-uglify-es' )

const replaceConfig = {
    defines: {
        IS_REMOVE: false
    }
}

module.exports = [
    {
        input:   'sources/main.js',
        plugins: [
            replace( replaceConfig )
        ],
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
            replace( replaceConfig ),
            uglify()
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
        plugins: [
            replace( replaceConfig )
        ],
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
            replace( replaceConfig ),
            uglify()
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
        plugins: [
            replace( replaceConfig )
        ],
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
            replace( replaceConfig ),
            uglify()
        ],
        output:  {
            indent: '\t',
            format: 'iife',
            name:   'Itee.Validators',
            file:   'builds/itee-validators.iife.min.js'
        }
    }
]
