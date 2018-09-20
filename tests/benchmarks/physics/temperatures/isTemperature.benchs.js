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

import { isTemperature } from '../../../../sources/physics/temperatures/isTemperature'

export default suite( 'isTemperature', () => {

    benchmark( 'isTemperature()', Itee.TestsUtils.iterateOverDataMap( isTemperature ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
