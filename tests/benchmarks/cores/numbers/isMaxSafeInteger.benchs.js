/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isMaxSafeInteger } from '../../../../sources/cores/numbers/isMaxSafeInteger'

export default suite( 'isMaxSafeInteger', () => {

    benchmark( 'isMaxSafeInteger()', Itee.TestsUtils.iterateOverDataMap( isMaxSafeInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
