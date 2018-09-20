/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNullOrUndefined } from '../../../../sources/cores/voids/isNullOrUndefined'

export default suite( 'isNullOrUndefined', () => {

    benchmark( 'isNullOrUndefined()', Itee.TestsUtils.iterateOverDataMap( isNullOrUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
