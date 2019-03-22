/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isNotUndefined,
    isUndefined
} from '../../../../sources/cores/voids/isUndefined'

const isUndefinedSuite = suite( 'isUndefined', () => {

    benchmark( 'isUndefined()', Itee.TestsUtils.iterateOverDataMap( isUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotUndefinedSuite = suite( 'isNotUndefined', () => {

    benchmark( 'isNotUndefined()', Itee.TestsUtils.iterateOverDataMap( isNotUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isUndefinedSuite,
    isNotUndefinedSuite
}

