/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isZeroNegative } from '../../../../sources/cores/numbers/isZeroNegative'

export default suite( 'isZeroNegative', () => {

    benchmark( 'isZeroNegative()', Itee.TestsUtils.iterateOverDataMap( isZeroNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
