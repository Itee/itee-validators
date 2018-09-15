/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isBoolean, isBoolean_alt, isNotBoolean, isNotBoolean_negbase } from '../../../../sources/cores/booleans.js'


export default suite( 'isBoolean', () => {

    benchmark( 'isBoolean()', Itee.TestsUtils.iterateOverDataMap( isBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isBoolean_alt()', Itee.TestsUtils.iterateOverDataMap( isBoolean_alt ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNotBoolean()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNotBoolean_negbase()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean_negbase ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
