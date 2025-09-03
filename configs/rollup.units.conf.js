/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module configs/Rollup-Test
 * @description The file manage the rollup configuration for build unit tests for browser and node environments
 */

const packageInfos    = require( '../package' )
const { nodeResolve } = require( '@rollup/plugin-node-resolve' )
const replace         = require( 'rollup-plugin-re' )
const cleanup         = require( 'rollup-plugin-cleanup' )

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @return {Array.<json>} An array of rollup configuration
 */
function CreateUnitsRollupConfigs ( /*options*/ ) {
    'use strict'

    return [
        // For Karma
        {
            input:    `tests/units/${ packageInfos.name }.units.js`,
            external: [
                'mocha',
                'chai'
            ],
            plugins: [
                nodeResolve(), // required to bundle itee-utils that cannot be integrated as standalone file (why???)=> because circular ref with itee validator package -_-'
                replace( {
                    replaces: {
                        // 'coresUnits.call':          '//coresUnits.call',

                        'isBlockDevicePathUnits.call':          '//isBlockDevicePathUnits.call',
                        'isValidBlockDevicePathUnits.call':     '//isValidBlockDevicePathUnits.call',
                        'isCharacterDevicePathUnits.call':      '//isCharacterDevicePathUnits.call',
                        'isValidCharacterDevicePathUnits.call': '//isValidCharacterDevicePathUnits.call',
                        'isDirectoryPathUnits.call':            '//isDirectoryPathUnits.call',
                        'isValidDirectoryPathUnits.call':       '//isValidDirectoryPathUnits.call',
                        'isEmptyDirectoryUnits.call':           '//isEmptyDirectoryUnits.call',
                        'isFIFOPathUnits.call':                 '//isFIFOPathUnits.call',
                        'isValidFIFOPathUnits.call':            '//isValidFIFOPathUnits.call',
                        'isFilePathUnits.call':                 '//isFilePathUnits.call',
                        'isValidFilePathUnits.call':            '//isValidFilePathUnits.call',
                        'isEmptyFileUnits.call':                '//isEmptyFileUnits.call',
                        'isValidPathUnits.call':                '//isValidPathUnits.call',
                        'isSocketPathUnits.call':               '//isSocketPathUnits.call',
                        'isValidSocketPathUnits.call':          '//isValidSocketPathUnits.call',
                        'isSymbolicLinkPathUnits.call':         '//isSymbolicLinkPathUnits.call',
                        'isValidSymbolicLinkPathUnits.call':    '//isValidSymbolicLinkPathUnits.call'
                    }
                } ),
                cleanup( {
                    comments: 'none'
                } )
            ],
            treeshake: true,
            output:    {
                indent:  '\t',
                format:  'iife',
                name:    'Itee.Units',
                globals: {
                    'mocha': 'Mocha',
                    'chai':  'chai'
                },
                file: `tests/builds/${ packageInfos.name }.units.iife.js`
            }
        },
        // For node
        {
            input:    `tests/units/${ packageInfos.name }.units.js`,
            external: [ 'itee-utils', 'mocha', 'chai', 'fs' ],
            plugins:  [
                replace( {
                    replaces: {
                        'coresUnits.call':          '//coresUnits.call',

                        'isEventTargetUnits.call':          '//isEventTargetUnits.call',
                    }
                } ),
                cleanup( {
                    comments: 'none'
                } )
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'cjs',
                file:   `tests/builds/${ packageInfos.name }.units.cjs.js`
            }
        }
    ]

}

module.exports = CreateUnitsRollupConfigs
