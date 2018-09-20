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

import { isArrayOfString, isArrayOfString_1, isNotArrayOfString } from '../../../../sources/cores/arrays/isArrayOfString'

const isArrayOfStringSuite = suite( 'isArrayOfString', () => {

    benchmark( 'isArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isArrayOfString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isArrayOfString_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotArrayOfStringSuite = suite( 'isNotArrayOfString', () => {

    benchmark( 'isNotArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isArrayOfStringSuite, isNotArrayOfStringSuite }

