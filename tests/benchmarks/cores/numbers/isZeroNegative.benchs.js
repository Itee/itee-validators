/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isZeroNegative } from '../../../../sources/cores/numbers/isZeroNegative'


export default suite( 'isZeroNegative', () => {

    benchmark( 'isZeroNegative()', Itee.TestsUtils.iterateOverDataMap( isZeroNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
