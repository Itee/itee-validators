/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isZeroPositive } from '../../../../sources/cores/numbers/isZeroPositive'

export default suite( 'isZeroPositive', () => {

    benchmark( 'isZeroPositive()', Itee.TestsUtils.iterateOverDataMap( isZeroPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
