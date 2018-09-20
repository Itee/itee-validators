/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isUndefined } from '../../../../sources/cores/voids/isUndefined'

export default suite( 'isUndefined', () => {

    benchmark( 'isUndefined()', Itee.TestsUtils.iterateOverDataMap( isUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
