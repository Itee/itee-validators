/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isEmpty, isNotEmpty } from '../../../../sources/cores/voids/isEmpty'

const isEmptySuite = suite( 'isEmpty', () => {

    benchmark( 'isEmpty()', Itee.TestsUtils.iterateOverDataMap( isEmpty ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotEmptySuite = suite( 'isNotEmpty', () => {

    benchmark( 'isNotEmpty()', Itee.TestsUtils.iterateOverDataMap( isNotEmpty ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isEmptySuite, isNotEmptySuite }

