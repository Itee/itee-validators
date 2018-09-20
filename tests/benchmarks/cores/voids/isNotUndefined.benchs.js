/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotUndefined } from '../../../../sources/cores/voids/isNotUndefined'

export default suite( 'isNotUndefined', () => {

    benchmark( 'isNotUndefined()', Itee.TestsUtils.iterateOverDataMap( isNotUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
