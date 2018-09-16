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

import { isKelvin }       from '../../../../sources/physics/temperatures/isKelvin'


export default suite( 'isKelvin', () => {

    benchmark( 'isKelvin()', Itee.TestsUtils.iterateOverDataMap( isKelvin ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
