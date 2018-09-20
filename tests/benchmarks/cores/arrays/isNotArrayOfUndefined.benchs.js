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

import { isNotArrayOfUndefined } from '../../../../sources/cores/arrays/isNotArrayOfUndefined'

export default suite( 'isNotArrayOfUndefined', () => {

    benchmark( 'isNotArrayOfUndefined()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
