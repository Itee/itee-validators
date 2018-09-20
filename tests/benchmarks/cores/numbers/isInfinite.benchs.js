/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isInfinite } from '../../../../sources/cores/numbers/isInfinite'

export default suite( 'isInfinite', () => {

    benchmark( 'isInfinite()', Itee.TestsUtils.iterateOverDataMap( isInfinite ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
