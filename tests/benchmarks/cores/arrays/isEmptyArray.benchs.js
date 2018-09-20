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

import { isEmptyArray } from '../../../../sources/cores/arrays/isEmptyArray'


export default suite( 'isEmptyArray', () => {

    benchmark( 'isEmptyArray()', Itee.TestsUtils.iterateOverDataMap( isEmptyArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
