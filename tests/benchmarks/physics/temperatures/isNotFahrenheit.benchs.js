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

import { isNotFahrenheit }       from '../../../../sources/physics/temperatures/isNotFahrenheit'


export default suite( 'isNotFahrenheit', () => {

    benchmark( 'isNotFahrenheit()', Itee.TestsUtils.iterateOverDataMap( isNotFahrenheit ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
