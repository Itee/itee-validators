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

import { isNotTemperature } from '../../../../sources/physics/temperatures/isNotTemperature'


export default suite( 'isNotTemperature', () => {

    benchmark( 'isNotTemperature()', Itee.TestsUtils.iterateOverDataMap( isNotTemperature ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
