/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isMaxPositive, isMaxNegative } from '../../../../sources/cores/numbers/isMax'

const isMaxPositiveSuite = suite( 'isMaxPositive', () => {

    benchmark( 'isMaxPositive()', Itee.TestsUtils.iterateOverDataMap( isMaxPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isMaxNegativeSuite = suite( 'isMaxNegative', () => {

    benchmark( 'isMaxNegative()', Itee.TestsUtils.iterateOverDataMap( isMaxNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isMaxNegativeSuite, isMaxPositiveSuite }

