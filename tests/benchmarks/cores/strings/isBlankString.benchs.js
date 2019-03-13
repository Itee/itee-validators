/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isBlankString,
    isNotBlankString
} from '../../../../sources/cores/strings/isBlankString'

const isBlankStringSuite = suite( 'isBlankString', () => {

    benchmark( 'isBlankString()', Itee.TestsUtils.iterateOverDataMap( isBlankString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotBlankStringSuite = suite( 'isNotBlankString', () => {

    benchmark( 'isNotBlankString()', Itee.TestsUtils.iterateOverDataMap( isNotBlankString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isBlankStringSuite,
    isNotBlankStringSuite
}

