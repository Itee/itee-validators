/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isInfinite } from '../../../../sources/cores/numbers/isInfinite'

export default suite( 'isInfinite', () => {

    benchmark( 'isInfinite()', Itee.TestsUtils.iterateOverDataMap( isInfinite ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
