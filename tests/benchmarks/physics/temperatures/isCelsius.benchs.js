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

import { isCelsius }       from '../../../../sources/physics/temperatures/isCelsius'


export default suite( 'isCelsius', () => {

    benchmark( 'isCelsius()', Itee.TestsUtils.iterateOverDataMap( isCelsius ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
