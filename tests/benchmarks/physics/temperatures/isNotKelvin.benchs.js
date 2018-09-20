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

import { isNotKelvin } from '../../../../sources/physics/temperatures/isNotKelvin'


export default suite( 'isNotKelvin', () => {

    benchmark( 'isNotKelvin()', Itee.TestsUtils.iterateOverDataMap( isNotKelvin ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
