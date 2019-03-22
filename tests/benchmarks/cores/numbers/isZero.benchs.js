/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isZero,
    isZeroNegative,
    isZeroPositive
} from '../../../../sources/cores/numbers/isZero'

const isZeroSuite = suite( 'isZero', () => {

    benchmark( 'isZero()', Itee.TestsUtils.iterateOverDataMap( isZero ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isZeroPositiveSuite = suite( 'isZeroPositive', () => {

    benchmark( 'isZeroPositive()', Itee.TestsUtils.iterateOverDataMap( isZeroPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isZeroNegativeSuite = suite( 'isZeroNegative', () => {

    benchmark( 'isZeroNegative()', Itee.TestsUtils.iterateOverDataMap( isZeroNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isZeroSuite,
    isZeroNegativeSuite,
    isZeroPositiveSuite
}

