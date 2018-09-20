/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNullOrUndefined, isDefined } from '../../../../sources/cores/voids/isNullOrUndefined'

const isNullOrUndefinedSuite = suite( 'isNullOrUndefined', () => {

    benchmark( 'isNullOrUndefined()', Itee.TestsUtils.iterateOverDataMap( isNullOrUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isDefinedSuite = suite( 'isDefined', () => {

    benchmark( 'isDefined()', Itee.TestsUtils.iterateOverDataMap( isDefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isNullOrUndefinedSuite, isDefinedSuite }

