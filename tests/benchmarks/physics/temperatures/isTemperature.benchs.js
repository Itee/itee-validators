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
    isNotTemperature,
    isTemperature
} from '../../../../sources/physics/temperatures/isTemperature'

const isTemperatureSuite = suite( 'isTemperature', () => {

    benchmark( 'isTemperature()', Itee.TestsUtils.iterateOverDataMap( isTemperature ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotTemperatureSuite = suite( 'isNotTemperature', () => {

    benchmark( 'isNotTemperature()', Itee.TestsUtils.iterateOverDataMap( isNotTemperature ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isTemperatureSuite,
    isNotTemperatureSuite
}
