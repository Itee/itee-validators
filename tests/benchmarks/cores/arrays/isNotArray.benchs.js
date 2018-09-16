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

import { isNotArray, isNotArray_0 }       from '../../../../sources/cores/arrays/isNotArray'


export default suite( 'isNotArray', () => {

    benchmark( 'isNotArray()', Itee.TestsUtils.iterateOverDataMap( isNotArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNotArray()', Itee.TestsUtils.iterateOverDataMap( isNotArray_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
