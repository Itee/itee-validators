/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isMaxSafeInteger } from '../../../../sources/cores/numbers/isMaxSafeInteger'

export default suite( 'isMaxSafeInteger', () => {

    benchmark( 'isMaxSafeInteger()', Itee.TestsUtils.iterateOverDataMap( isMaxSafeInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
