/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isFinite } from '../../../../sources/cores/numbers/isFinite'

export default suite( 'isFinite', () => {

    benchmark( 'isFinite()', Itee.TestsUtils.iterateOverDataMap( isFinite ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
