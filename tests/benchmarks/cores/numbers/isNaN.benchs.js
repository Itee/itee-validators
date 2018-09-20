/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNaN } from '../../../../sources/cores/numbers/isNaN'

export default suite( 'isNaN', () => {

    benchmark( 'isNaN()', Itee.TestsUtils.iterateOverDataMap( isNaN ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
