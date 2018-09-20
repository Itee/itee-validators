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

import { isNotArrayOfNull } from '../../../../sources/cores/arrays/isNotArrayOfNull'


export default suite( 'isNotArrayOfNull', () => {

    benchmark( 'isNotArrayOfNull()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
