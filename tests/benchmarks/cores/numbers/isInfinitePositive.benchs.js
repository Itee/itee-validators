/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isInfinitePositive } from '../../../../sources/cores/numbers/isInfinitePositive'

export default suite( 'isInfinitePositive', () => {

    benchmark( 'isInfinitePositive()', Itee.TestsUtils.iterateOverDataMap( isInfinitePositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
