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

import { isArrayOfNull } from '../../../../sources/cores/arrays/isArrayOfNull'

export default suite( 'isArrayOfNull', () => {

    benchmark( 'isArrayOfNull()', Itee.TestsUtils.iterateOverDataMap( isArrayOfNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
