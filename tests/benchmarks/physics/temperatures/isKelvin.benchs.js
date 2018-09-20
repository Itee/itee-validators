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

import { isKelvin, isNotKelvin } from '../../../../sources/physics/temperatures/isKelvin'

const isKelvinSuite = suite( 'isKelvin', () => {

    benchmark( 'isKelvin()', Itee.TestsUtils.iterateOverDataMap( isKelvin ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotKelvinSuite = suite( 'isNotKelvin', () => {

    benchmark( 'isNotKelvin()', Itee.TestsUtils.iterateOverDataMap( isNotKelvin ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isKelvinSuite, isNotKelvinSuite }
