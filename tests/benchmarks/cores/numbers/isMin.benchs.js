/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isMinNegative,
    isMinPositive
} from '../../../../sources/cores/numbers/isMin'

const isMinPositiveSuite = suite( 'isMinPositive', () => {

    benchmark( 'isMinPositive()', Itee.TestsUtils.iterateOverDataMap( isMinPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isMinNegativeSuite = suite( 'isMinNegative', () => {

    benchmark( 'isMinNegative()', Itee.TestsUtils.iterateOverDataMap( isMinNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isMinNegativeSuite,
    isMinPositiveSuite
}
