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

import {
    isArray,
    isArray_0,
    isNotArray,
    isNotArray_0
} from '../../../../sources/cores/arrays/isArray'

const isArraySuite = suite( 'isArray', () => {

    benchmark( 'isArray()', Itee.TestsUtils.iterateOverDataMap( isArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isArray_0()', Itee.TestsUtils.iterateOverDataMap( isArray_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotArraySuite = suite( 'isNotArray', () => {

    benchmark( 'isNotArray()', Itee.TestsUtils.iterateOverDataMap( isNotArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNotArray()', Itee.TestsUtils.iterateOverDataMap( isNotArray_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isArraySuite,
    isNotArraySuite
}
