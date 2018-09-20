/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotNull } from '../../../../sources/cores/voids/isNotNull'

export default suite( 'isNotNull', () => {

    benchmark( 'isNotNull()', Itee.TestsUtils.iterateOverDataMap( isNotNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
