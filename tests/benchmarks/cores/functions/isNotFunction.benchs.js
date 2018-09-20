/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotFunction } from '../../../../sources/cores/functions/isNotFunction'

export default suite( 'isNotFunction', () => {

    benchmark( 'isNotFunction()', Itee.TestsUtils.iterateOverDataMap( isNotFunction ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
