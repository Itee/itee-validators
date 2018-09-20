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

import { isArray, isArray_0 } from '../../../../sources/cores/arrays/isArray'

export default suite( 'isArray', () => {

    benchmark( 'isArray()', Itee.TestsUtils.iterateOverDataMap( isArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isArray_0()', Itee.TestsUtils.iterateOverDataMap( isArray_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
