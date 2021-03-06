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
    isArrayOfNull,
    isNotArrayOfNull
} from '../../../../sources/cores/arrays/isArrayOfNull'

const isArrayOfNullSuite = suite( 'isArrayOfNull', () => {

    benchmark( 'isArrayOfNull()', Itee.TestsUtils.iterateOverDataMap( isArrayOfNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotArrayOfNullSuite = suite( 'isNotArrayOfNull', () => {

    benchmark( 'isNotArrayOfNull()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isArrayOfNullSuite,
    isNotArrayOfNullSuite
}

