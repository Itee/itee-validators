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

import { isArrayOfUndefined }       from '../../../../sources/cores/arrays/isArrayOfUndefined'


export default suite( 'isArrayOfUndefined', () => {

    benchmark( 'isArrayOfUndefined()', Itee.TestsUtils.iterateOverDataMap( isArrayOfUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
