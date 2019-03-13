/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isFunction,
    isNotFunction
} from '../../../../sources/cores/functions/isFunction'

const isFunctionSuite = suite( 'isFunction', () => {

    benchmark( 'isFunction()', Itee.TestsUtils.iterateOverDataMap( isFunction ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotFunctionSuite = suite( 'isNotFunction', () => {

    benchmark( 'isNotFunction()', Itee.TestsUtils.iterateOverDataMap( isNotFunction ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isFunctionSuite,
    isNotFunctionSuite
}

