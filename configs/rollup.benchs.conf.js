/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module configs/Rollup-Test
 * @description The file manage the rollup configuration for build tests
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
function CreateBenchmarksRollupConfigs ( /*options*/ ) {
    'use strict'

    return [
        // For karma
        {
            input:    `tests/benchmarks/${ packageInfos.name }.benchs.js`,
            external: [
                'benchmark'
            ],
            plugins: [
                nodeResolve(),
                replace( {
                    replaces: {
                        '\tisBlockDevicePathSuite,':            '\t//isBlockDevicePathSuite,',
                        '\tisCharacterDevicePathSuite,':        '\t//isCharacterDevicePathSuite,',
                        '\tisDirectoryPathSuite,':              '\t//isDirectoryPathSuite,',
                        '\tisEmptyDirectorySuite,':             '\t//isEmptyDirectorySuite,',
                        '\tisEmptyFileSuite,':                  '\t//isEmptyFileSuite,',
                        '\tisFIFOPathSuite,':                   '\t//isFIFOPathSuite,',
                        '\tisFilePathSuite,':                   '\t//isFilePathSuite,',
                        '\tisInvalidBlockDevicePathSuite,':     '\t//isInvalidBlockDevicePathSuite,',
                        '\tisInvalidCharacterDevicePath,':      '\t//isInvalidCharacterDevicePath,',
                        '\tisInvalidCharacterDevicePathSuite,': '\t//isInvalidCharacterDevicePathSuite,',
                        '\tisInvalidDirectoryPathSuite,':       '\t//isInvalidDirectoryPathSuite,',
                        '\tisInvalidFIFOPathSuite,':            '\t//isInvalidFIFOPathSuite,',
                        '\tisInvalidFilePathSuite,':            '\t//isInvalidFilePathSuite,',
                        '\tisInvalidPathSuite,':                '\t//isInvalidPathSuite,',
                        '\tisInvalidSocketPathSuite,':          '\t//isInvalidSocketPathSuite,',
                        '\tisInvalidSymbolicLinkPathSuite,':    '\t//isInvalidSymbolicLinkPathSuite,',
                        '\tisNotBlockDevicePathSuite,':         '\t//isNotBlockDevicePathSuite,',
                        '\tisNotCharacterDevicePathSuite,':     '\t//isNotCharacterDevicePathSuite,',
                        '\tisNotDirectoryPathSuite,':           '\t//isNotDirectoryPathSuite,',
                        '\tisNotEmptyDirectorySuite,':          '\t//isNotEmptyDirectorySuite,',
                        '\tisNotEmptyFileSuite,':               '\t//isNotEmptyFileSuite,',
                        '\tisNotFIFOPathSuite,':                '\t//isNotFIFOPathSuite,',
                        '\tisNotFilePathSuite,':                '\t//isNotFilePathSuite,',
                        '\tisNotSocketPathSuite,':              '\t//isNotSocketPathSuite,',
                        '\tisNotSymbolicLinkPathSuite,':        '\t//isNotSymbolicLinkPathSuite,',
                        '\tisSocketPathSuite,':                 '\t//isSocketPathSuite,',
                        '\tisSymbolicLinkPathSuite,':           '\t//isSymbolicLinkPathSuite,',
                        '\tisValidBlockDevicePathSuite,':       '\t//isValidBlockDevicePathSuite,',
                        '\tisValidCharacterDevicePathSuite,':   '\t//isValidCharacterDevicePathSuite,',
                        '\tisValidDirectoryPathSuite,':         '\t//isValidDirectoryPathSuite,',
                        '\tisValidFIFOPathSuite,':              '\t//isValidFIFOPathSuite,',
                        '\tisValidFilePathSuite,':              '\t//isValidFilePathSuite,',
                        '\tisValidPathSuite,':                  '\t//isValidPathSuite,',
                        '\tisValidSocketPathSuite,':            '\t//isValidSocketPathSuite,',
                        '\tisValidSymbolicLinkPathSuite,':      '\t//isValidSymbolicLinkPathSuite,',

                        'suite.run()': '//suite.run()'
                    }
                } ),
                cleanup( {
                    comments: 'none'
                } )
            ],
            treeshake: {
                moduleSideEffects:                false,
                annotations:                      true,
                correctVarValueBeforeDeclaration: true,
                propertyReadSideEffects:          false,
                tryCatchDeoptimization:           true,
                unknownGlobalSideEffects:         false
            },
            output: {
                indent:  '\t',
                format:  'iife',
                name:    'Itee.Benchmarks',
                globals: {
                    'benchmark': 'Benchmark'
                },
                file: `tests/builds/${ packageInfos.name }.benchs.iife.js`
            }
        },
        // For Node
        {
            input:    `tests/benchmarks/${ packageInfos.name }.benchs.js`,
            external: [
                'benchmark',
                'itee-utils',
                'fs'
            ],
            plugins: [
                nodeResolve(),
                cleanup( {
                    comments: 'none'
                } )
            ],
            treeshake: false,
            output:    {
                indent: '\t',
                format: 'cjs',
                file:   `tests/builds/${ packageInfos.name }.benchs.cjs.js`
            }
        }
        // Utils for karma
        //        {
        //            input:     `tests/utils/${ packageInfos.name }.utils.js`,
        //            plugins:   [],
        //            treeshake: true,
        //            output:    {
        //                indent: '\t',
        //                format: 'iife',
        //                name:   'Itee',
        //                file:   `tests/builds/${ packageInfos.name }.utils.iife.js`,
        //                extend: true
        //            }
        //        }
    ]

}

module.exports = CreateBenchmarksRollupConfigs
