/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isEmptyString, isNotEmptyString } from '../../../../sources/cores/strings/isEmptyString'

const isEmptyStringSuite = suite( 'isEmptyString', () => {

    benchmark( 'isEmptyString()', Itee.TestsUtils.iterateOverDataMap( isEmptyString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotEmptyStringSuite = suite( 'isNotEmptyString', () => {

    benchmark( 'isNotEmptyString()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isEmptyStringSuite, isNotEmptyStringSuite }
