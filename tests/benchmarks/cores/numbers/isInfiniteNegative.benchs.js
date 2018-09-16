/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isInfiniteNegative } from '../../../../sources/cores/numbers/isInfiniteNegative'


export default suite( 'isInfiniteNegative', () => {

    benchmark( 'isInfiniteNegative()', Itee.TestsUtils.iterateOverDataMap( isInfiniteNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
