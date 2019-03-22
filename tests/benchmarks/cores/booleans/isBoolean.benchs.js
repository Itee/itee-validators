/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isBoolean,
    isBoolean_alt,
    isNotBoolean,
    isNotBoolean_negbase
} from '../../../../sources/cores/booleans/isBoolean'

const isBooleanSuite = suite( 'isBoolean', () => {

    benchmark( 'isBoolean()', Itee.TestsUtils.iterateOverDataMap( isBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isBoolean_alt()', Itee.TestsUtils.iterateOverDataMap( isBoolean_alt ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotBooleanSuite = suite( 'isNotBoolean', () => {

    benchmark( 'isNotBoolean()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNotBoolean_negbase()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean_negbase ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isBooleanSuite,
    isNotBooleanSuite
}
