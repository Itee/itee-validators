/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module config
 * @description The file manage the rollup configuration for build sources
 *
 * @requires {@link module: [path]{@link https://nodejs.org/api/path.html}}
 * @requires {@link module: [rollup-plugin-re]{@link https://github.com/jetiny/rollup-plugin-re}}
 * @requires {@link module: [rollup-plugin-uglify-es]{@link https://github.com/ezekielchentnik/rollup-plugin-uglify-es}}
 *
 */

const path    = require( 'path' )
const replace = require( 'rollup-plugin-re' )
const uglify  = require( 'rollup-plugin-uglify-es' )

const replaceConfig = {
    defines: {
        IS_REMOVE: false
    }
}

/**
 * @generator
 * @param options
 * @return {Array}
 */
function CreateBuildsConfigs ( options ) {
    'use strict'

    const name      = options.name
    const input     = options.input
    const output    = options.output
    const formats   = options.format.split( ',' )
    const env       = options.env.split( ',' )
    const dev       = (env.includes( 'dev' ))
    const prod      = (env.includes( 'prod' ))
    const sourcemap = options.sourcemap
    const treeshake = options.treeshake

    const fileName = path.basename( input, '.js' )

    const configs = []
    for ( let formatIndex = 0, numberOfFormats = formats.length ; formatIndex < numberOfFormats ; ++formatIndex ) {

        const format = formats[ formatIndex ]

        if ( dev ) {

            const outputPath = path.join( output, `${fileName}.${format}.js` )

            configs.push( {
                input:   input,
                plugins: [
                    replace( replaceConfig )
                ],
                treeshake: treeshake,
                output:    {
                    indent:    '\t',
                    format:    format,
                    name:      name,
                    file:      outputPath,
                    sourcemap: sourcemap
                }
            } )

        }

        if ( prod ) {

            const outputPath = path.join( output, `${fileName}.${format}.min.js` )

            configs.push( {
                input:   input,
                plugins: [
                    replace( replaceConfig ),
                    uglify()
                ],
                treeshake: treeshake,
                output:    {
                    indent:    '\t',
                    format:    format,
                    name:      name,
                    file:      outputPath,
                    sourcemap: sourcemap
                }
            } )

        }

    }

    return configs

}

module.exports = CreateBuildsConfigs

