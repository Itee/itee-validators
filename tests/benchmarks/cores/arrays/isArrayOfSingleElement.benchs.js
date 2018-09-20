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

import { isArrayOfSingleElement } from '../../../../sources/cores/arrays/isArrayOfSingleElement'

export default suite( 'isArrayOfSingleElement', () => {

    benchmark( 'isArrayOfSingleElement()', Itee.TestsUtils.iterateOverDataMap( isArrayOfSingleElement ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
