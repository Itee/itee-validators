/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isInfiniteNegative } from '../../../../sources/cores/numbers/isInfiniteNegative'

export default suite( 'isInfiniteNegative', () => {

    benchmark( 'isInfiniteNegative()', Itee.TestsUtils.iterateOverDataMap( isInfiniteNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
