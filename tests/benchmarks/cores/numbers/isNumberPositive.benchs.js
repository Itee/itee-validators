/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNumberPositive } from '../../../../sources/cores/numbers/isNumberPositive'

export default suite( 'isNumberPositive', () => {

    benchmark( 'isNumberPositive()', Itee.TestsUtils.iterateOverDataMap( isNumberPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
