/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotBoolean, isNotBoolean_negbase } from '../../../../sources/cores/booleans/isNotBoolean'

export default suite( 'isNotBoolean', () => {

    benchmark( 'isNotBoolean()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNotBoolean_negbase()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean_negbase ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
