/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isMaxSafeInteger, isMinSafeInteger } from '../../../../sources/cores/numbers/isSafeInteger'

const isMaxSafeIntegerSuite = suite( 'isMaxSafeInteger', () => {

    benchmark( 'isMaxSafeInteger()', Itee.TestsUtils.iterateOverDataMap( isMaxSafeInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isMinSafeIntegerSuite = suite( 'isMinSafeInteger', () => {

    benchmark( 'isMinSafeInteger()', Itee.TestsUtils.iterateOverDataMap( isMinSafeInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isMaxSafeIntegerSuite, isMinSafeIntegerSuite }

