/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isMinNegative } from '../../../../sources/cores/numbers/isMinNegative'

export default suite( 'isMinNegative', () => {

    benchmark( 'isMinNegative()', Itee.TestsUtils.iterateOverDataMap( isMinNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
