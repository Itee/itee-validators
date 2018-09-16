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
            input:   'tests/units/itee-validators.units.js',
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
                file:   'tests/builds/itee-validators.units.js'
            }
        },
        {
            input:   'tests/benchmarks/main.benchs.js',
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
                file:   'tests/itee-validators.benchs.js'
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
