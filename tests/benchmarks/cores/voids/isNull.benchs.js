/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNull } from '../../../../sources/cores/voids/isNull'

export default suite( 'isNull', () => {

    benchmark( 'isNull()', Itee.TestsUtils.iterateOverDataMap( isNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
