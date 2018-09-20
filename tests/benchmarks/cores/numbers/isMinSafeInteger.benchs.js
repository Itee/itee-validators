/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isMinSafeInteger } from '../../../../sources/cores/numbers/isMinSafeInteger'

export default suite( 'isMinSafeInteger', () => {

    benchmark( 'isMinSafeInteger()', Itee.TestsUtils.iterateOverDataMap( isMinSafeInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
