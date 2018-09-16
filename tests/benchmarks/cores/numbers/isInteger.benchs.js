/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isInteger, isInteger_1, isInteger_2, isInteger_3 } from '../../../../sources/cores/numbers/isInteger'


export default suite( 'isInteger', () => {

    benchmark( 'isInteger()', Itee.TestsUtils.iterateOverDataMap( isInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger()', Itee.TestsUtils.iterateOverDataMap( isInteger_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger()', Itee.TestsUtils.iterateOverDataMap( isInteger_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger()', Itee.TestsUtils.iterateOverDataMap( isInteger_3 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
