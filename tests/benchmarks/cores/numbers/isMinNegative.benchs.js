/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isMinNegative } from '../../../../sources/cores/numbers/isMinNegative'

export default suite( 'isMinNegative', () => {

    benchmark( 'isMinNegative()', Itee.TestsUtils.iterateOverDataMap( isMinNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
