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

import { isArrayOfArray } from '../../../../sources/cores/arrays/isArrayOfArray'

export default suite( 'isArrayOfArray', () => {

    benchmark( 'isArrayOfArray()', Itee.TestsUtils.iterateOverDataMap( isArrayOfArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
