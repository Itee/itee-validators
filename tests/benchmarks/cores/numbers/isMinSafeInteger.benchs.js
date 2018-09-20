/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isMinSafeInteger } from '../../../../sources/cores/numbers/isMinSafeInteger'

export default suite( 'isMinSafeInteger', () => {

    benchmark( 'isMinSafeInteger()', Itee.TestsUtils.iterateOverDataMap( isMinSafeInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
