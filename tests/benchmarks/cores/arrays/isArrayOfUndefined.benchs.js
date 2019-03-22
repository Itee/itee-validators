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
    isArrayOfUndefined,
    isNotArrayOfUndefined
} from '../../../../sources/cores/arrays/isArrayOfUndefined'

const isArrayOfUndefinedSuite = suite( 'isArrayOfUndefined', () => {

    benchmark( 'isArrayOfUndefined()', Itee.TestsUtils.iterateOverDataMap( isArrayOfUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotArrayOfUndefinedSuite = suite( 'isNotArrayOfUndefined', () => {

    benchmark( 'isNotArrayOfUndefined()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isArrayOfUndefinedSuite,
    isNotArrayOfUndefinedSuite
}

