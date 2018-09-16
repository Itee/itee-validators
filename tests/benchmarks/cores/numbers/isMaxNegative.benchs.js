/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isMaxNegative } from '../../../../sources/cores/numbers/isMaxNegative'


export default suite( 'isMaxNegative', () => {

    benchmark( 'isMaxNegative()', Itee.TestsUtils.iterateOverDataMap( isMaxNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
