/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNull } from '../../../../sources/cores/voids/isNull'

export default suite( 'isNull', () => {

    benchmark( 'isNull()', Itee.TestsUtils.iterateOverDataMap( isNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
