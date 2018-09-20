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

import { isEmptyArray, isNotEmptyArray } from '../../../../sources/cores/arrays/isEmptyArray'

const isEmptyArraySuite = suite( 'isEmptyArray', () => {

    benchmark( 'isEmptyArray()', Itee.TestsUtils.iterateOverDataMap( isEmptyArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotEmptyArraySuite = suite( 'isNotEmptyArray', () => {

    benchmark( 'isNotEmptyArray()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isEmptyArraySuite, isNotEmptyArraySuite }

