/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNumberNegative } from '../../../../sources/cores/numbers/isNumberNegative'

export default suite( 'isNumberNegative', () => {

    benchmark( 'isNumberNegative()', Itee.TestsUtils.iterateOverDataMap( isNumberNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
