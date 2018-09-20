/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isMinPositive } from '../../../../sources/cores/numbers/isMinPositive'

export default suite( 'isMinPositive', () => {

    benchmark( 'isMinPositive()', Itee.TestsUtils.iterateOverDataMap( isMinPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
