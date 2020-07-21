/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isNotNull,
    isNull,
    isNull_0
} from '../../../../sources/cores/voids/isNull'

const isNullSuite = suite( 'isNull', () => {

    benchmark( 'isNull()', Itee.TestsUtils.iterateOverDataMap( isNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNull_0()', Itee.TestsUtils.iterateOverDataMap( isNull_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotNullSuite = suite( 'isNotNull', () => {

    benchmark( 'isNotNull()', Itee.TestsUtils.iterateOverDataMap( isNotNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isNullSuite,
    isNotNullSuite
}

