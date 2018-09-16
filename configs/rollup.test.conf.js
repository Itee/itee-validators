/**

 *
 * @author Itee <valcketristan@gmail.com>
 * @license MIT
 */

const commonJs    = require( 'rollup-plugin-commonjs' )
const nodeResolve = require( 'rollup-plugin-node-resolve' )

/**
 *
 * @param options
 * @return {*[]}
 */
function createBuildsConfigs ( /*options*/ ) {
    'use strict'

    return [
        {
            input:   'tests/units/main.units.js',
            plugins: [
                commonJs( {
                    include: 'node_modules/**'
                } ),
                nodeResolve()
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee.Units',
                file:   'tests/itee-validators.units.js'
            }
        },
        {
            input:   'tests/benchmarks/itee-validators.benchs.js',
            plugins: [
                commonJs( {
                    include: 'node_modules/**'
                } ),
                nodeResolve()
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee.Benchs',
                file:   'tests/builds/itee-validators.benchs.js'
            }
        },
        {
            input:   'tests/tests.utils.js',
            plugins: [
                commonJs( {
                    include: 'node_modules/**'
                } ),
                nodeResolve()
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee.TestsUtils',
                file:   'tests/third_party/tests.utils.js'
            }
        }
    ]

}

module.exports = createBuildsConfigs
