/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isMaxNegative } from '../../../../sources/cores/numbers/isMaxNegative'

export default suite( 'isMaxNegative', () => {

    benchmark( 'isMaxNegative()', Itee.TestsUtils.iterateOverDataMap( isMaxNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
