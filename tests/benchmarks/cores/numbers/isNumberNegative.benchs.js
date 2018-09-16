/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNumberNegative } from '../../../../sources/cores/numbers/isNumberNegative'


export default suite( 'isNumberNegative', () => {

    benchmark( 'isNumberNegative()', Itee.TestsUtils.iterateOverDataMap( isNumberNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
