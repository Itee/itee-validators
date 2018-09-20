/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isBoolean, isBoolean_alt } from '../../../../sources/cores/booleans/isBoolean'

export default suite( 'isBoolean', () => {

    benchmark( 'isBoolean()', Itee.TestsUtils.iterateOverDataMap( isBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isBoolean_alt()', Itee.TestsUtils.iterateOverDataMap( isBoolean_alt ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
