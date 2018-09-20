/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isInteger, isInteger_0, isInteger_1, isInteger_2, isInteger_3 } from '../../../../sources/cores/numbers/isInteger'

export default suite( 'isInteger', () => {

    benchmark( 'isInteger()', Itee.TestsUtils.iterateOverDataMap( isInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger_0()', Itee.TestsUtils.iterateOverDataMap( isInteger_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger_1()', Itee.TestsUtils.iterateOverDataMap( isInteger_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger_2()', Itee.TestsUtils.iterateOverDataMap( isInteger_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger_3()', Itee.TestsUtils.iterateOverDataMap( isInteger_3 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
