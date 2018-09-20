/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNumber, isNumber_0, isNumber_1 } from '../../../../sources/cores/numbers/isNumber'

export default suite( 'isNumber', () => {

    benchmark( 'isNumber()', Itee.TestsUtils.iterateOverDataMap( isNumber ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNumber_0()', Itee.TestsUtils.iterateOverDataMap( isNumber_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNumber_1()', Itee.TestsUtils.iterateOverDataMap( isNumber_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
