/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isMaxPositive } from '../../../../sources/cores/numbers/isMaxPositive'

export default suite( 'isMaxPositive', () => {

    benchmark( 'isMaxPositive()', Itee.TestsUtils.iterateOverDataMap( isMaxPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
