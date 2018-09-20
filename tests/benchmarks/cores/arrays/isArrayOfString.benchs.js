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

import { isArrayOfString, isArrayOfString_1 } from '../../../../sources/cores/arrays/isArrayOfString'

export default suite( 'isArrayOfString', () => {

    benchmark( 'isArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isArrayOfString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isArrayOfString_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
