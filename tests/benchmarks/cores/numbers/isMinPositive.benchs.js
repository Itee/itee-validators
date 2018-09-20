/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isMinPositive } from '../../../../sources/cores/numbers/isMinPositive'

export default suite( 'isMinPositive', () => {

    benchmark( 'isMinPositive()', Itee.TestsUtils.iterateOverDataMap( isMinPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
