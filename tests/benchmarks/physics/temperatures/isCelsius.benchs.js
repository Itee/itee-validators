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

import { isCelsius, isNotCelsius } from '../../../../sources/physics/temperatures/isCelsius'

const isCelsiusSuite = suite( 'isCelsius', () => {

    benchmark( 'isCelsius()', Itee.TestsUtils.iterateOverDataMap( isCelsius ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotCelsiusSuite = suite( 'isNotCelsius', () => {

    benchmark( 'isNotCelsius()', Itee.TestsUtils.iterateOverDataMap( isNotCelsius ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isCelsiusSuite, isNotCelsiusSuite }
