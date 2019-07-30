/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module config
 * @description The file manage the rollup configuration for build tests
 *
 * @requires {@link module: [rollup-plugin-commonjs]{@link https://github.com/rollup/rollup-plugin-commonjs}}
 * @requires {@link module: [rollup-plugin-node-resolve]{@link https://github.com/rollup/rollup-plugin-node-resolve}}
 *
 */

const packageInfos = require( '../package' )
const commonJs     = require( 'rollup-plugin-commonjs' )
const nodeResolve  = require( 'rollup-plugin-node-resolve' )

/**
 *
 * @generator
 * @param options
 * @return {Array.<json>}
 */
function CreateTestsBuildsConfigs ( /*options*/ ) {
    'use strict'

    return [
        {
            input:     `tests/units/${packageInfos.name}.units.js`,
            plugins:   [
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
                file:   `tests/builds/${packageInfos.name}.units.js`
            }
        },
        {
            input:     `tests/benchmarks/${packageInfos.name}.benchs.js`,
            plugins:   [
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
                file:   `tests/builds/${packageInfos.name}.benchs.js`
            }
        },
        {
            input:     `tests/utils/${packageInfos.name}.tests-utils.js`,
            plugins:   [
                commonJs( {
                    include: 'node_modules/**'
                } ),
                nodeResolve()
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee',
                file:   `tests/builds/${packageInfos.name}.tests-utils.js`,
                extend: true
            }
        }
    ]

}

module.exports = CreateTestsBuildsConfigs
