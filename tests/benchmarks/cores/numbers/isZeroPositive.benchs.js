/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isZeroPositive } from '../../../../sources/cores/numbers/isZeroPositive'

export default suite( 'isZeroPositive', () => {

    benchmark( 'isZeroPositive()', Itee.TestsUtils.iterateOverDataMap( isZeroPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
