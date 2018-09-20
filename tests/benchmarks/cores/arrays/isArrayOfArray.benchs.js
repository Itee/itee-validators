/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/* global Itee, suite, benchmark */

import { isArrayOfArray, isNotArrayOfArray } from '../../../../sources/cores/arrays/isArrayOfArray'

const isArrayOfArraySuite = suite( 'isArrayOfArray', () => {

    benchmark( 'isArrayOfArray()', Itee.TestsUtils.iterateOverDataMap( isArrayOfArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotArrayOfArraySuite = suite( 'isNotArrayOfArray', () => {

    benchmark( 'isNotArrayOfArray()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isArrayOfArraySuite, isNotArrayOfArraySuite }
