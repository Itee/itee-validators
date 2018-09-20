/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotEmpty } from '../../../../sources/cores/voids/isNotEmpty'

export default suite( 'isNotEmpty', () => {

    benchmark( 'isNotEmpty()', Itee.TestsUtils.iterateOverDataMap( isNotEmpty ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
