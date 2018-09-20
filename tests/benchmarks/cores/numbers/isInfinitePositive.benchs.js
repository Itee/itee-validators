/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isInfinitePositive } from '../../../../sources/cores/numbers/isInfinitePositive'

export default suite( 'isInfinitePositive', () => {

    benchmark( 'isInfinitePositive()', Itee.TestsUtils.iterateOverDataMap( isInfinitePositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
