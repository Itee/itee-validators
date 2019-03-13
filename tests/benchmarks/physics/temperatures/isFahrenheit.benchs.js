/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/* global Itee, suite, benchmark */

import {
    isFahrenheit,
    isNotFahrenheit
} from '../../../../sources/physics/temperatures/isFahrenheit'

const isFahrenheitSuite = suite( 'isFahrenheit', () => {

    benchmark( 'isFahrenheit()', Itee.TestsUtils.iterateOverDataMap( isFahrenheit ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotFahrenheitSuite = suite( 'isNotFahrenheit', () => {

    benchmark( 'isNotFahrenheit()', Itee.TestsUtils.iterateOverDataMap( isNotFahrenheit ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isFahrenheitSuite,
    isNotFahrenheitSuite
}
