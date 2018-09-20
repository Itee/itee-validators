/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNaN } from '../../../../sources/cores/numbers/isNaN'

export default suite( 'isNaN', () => {

    benchmark( 'isNaN()', Itee.TestsUtils.iterateOverDataMap( isNaN ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
