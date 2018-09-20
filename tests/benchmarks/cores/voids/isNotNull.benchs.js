/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotNull } from '../../../../sources/cores/voids/isNotNull'

export default suite( 'isNotNull', () => {

    benchmark( 'isNotNull()', Itee.TestsUtils.iterateOverDataMap( isNotNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
