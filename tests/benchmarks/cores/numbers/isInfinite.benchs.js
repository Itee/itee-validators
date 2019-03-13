/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isFinite,
    isInfinite,
    isInfiniteNegative,
    isInfinitePositive
} from '../../../../sources/cores/numbers/isInfinite'

const isInfiniteSuite = suite( 'isInfinite', () => {

    benchmark( 'isInfinite()', Itee.TestsUtils.iterateOverDataMap( isInfinite ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isInfinitePositiveSuite = suite( 'isInfinitePositive', () => {

    benchmark( 'isInfinitePositive()', Itee.TestsUtils.iterateOverDataMap( isInfinitePositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isInfiniteNegativeSuite = suite( 'isInfiniteNegative', () => {

    benchmark( 'isInfiniteNegative()', Itee.TestsUtils.iterateOverDataMap( isInfiniteNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isFiniteSuite = suite( 'isFinite', () => {

    benchmark( 'isFinite()', Itee.TestsUtils.iterateOverDataMap( isFinite ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isFiniteSuite,
    isInfiniteSuite,
    isInfiniteNegativeSuite,
    isInfinitePositiveSuite
}

