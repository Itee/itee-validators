/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module configs/Rollup-Test
 * @description The file manage the rollup configuration for build tests
 */

const packageInfos = require( '../package' )

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @return {Array.<json>} An array of rollup configuration
 */
function CreateTestsRollupConfigs ( /*options*/ ) {
    'use strict'

    return [
        {
            input:     `tests/units/${packageInfos.name}.units.js`,
            plugins:   [],
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
            plugins:   [],
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
            plugins:   [],
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

module.exports = CreateTestsRollupConfigs
