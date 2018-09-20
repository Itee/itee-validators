/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isFloat, isFloat_1, isFloat_2 } from '../../../../sources/cores/numbers/isFloat'

export default suite( 'isFloat', () => {

    benchmark( 'isFloat()', Itee.TestsUtils.iterateOverDataMap( isFloat ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isFloat()', Itee.TestsUtils.iterateOverDataMap( isFloat_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isFloat()', Itee.TestsUtils.iterateOverDataMap( isFloat_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
