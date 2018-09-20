/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isString, isString_0, isString_1, isString_2, isString_3, isString_4 } from '../../../../sources/cores/strings/isString'

export default suite( 'isString', () => {

    benchmark( 'isString()', Itee.TestsUtils.iterateOverDataMap( isString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isString_0()', Itee.TestsUtils.iterateOverDataMap( isString_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isString_1()', Itee.TestsUtils.iterateOverDataMap( isString_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isString_2()', Itee.TestsUtils.iterateOverDataMap( isString_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isString_3()', Itee.TestsUtils.iterateOverDataMap( isString_3 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isString_4()', Itee.TestsUtils.iterateOverDataMap( isString_4 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
