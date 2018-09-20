/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNumberPositive } from '../../../../sources/cores/numbers/isNumberPositive'

export default suite( 'isNumberPositive', () => {

    benchmark( 'isNumberPositive()', Itee.TestsUtils.iterateOverDataMap( isNumberPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
