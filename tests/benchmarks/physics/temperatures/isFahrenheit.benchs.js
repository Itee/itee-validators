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

import { isFahrenheit } from '../../../../sources/physics/temperatures/isFahrenheit'


export default suite( 'isFahrenheit', () => {

    benchmark( 'isFahrenheit()', Itee.TestsUtils.iterateOverDataMap( isFahrenheit ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
