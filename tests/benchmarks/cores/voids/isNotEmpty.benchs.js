/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotEmpty } from '../../../../sources/cores/voids/isNotEmpty'

export default suite( 'isNotEmpty', () => {

    benchmark( 'isNotEmpty()', Itee.TestsUtils.iterateOverDataMap( isNotEmpty ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
