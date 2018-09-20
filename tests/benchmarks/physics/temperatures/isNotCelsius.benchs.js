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

import { isNotCelsius } from '../../../../sources/physics/temperatures/isNotCelsius'

export default suite( 'isNotCelsius', () => {

    benchmark( 'isNotCelsius()', Itee.TestsUtils.iterateOverDataMap( isNotCelsius ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
