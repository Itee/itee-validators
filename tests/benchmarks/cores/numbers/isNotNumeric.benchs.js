/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotNumeric } from '../../../../sources/cores/numbers/isNotNumeric'


export default suite( 'isNotNumeric', () => {

    benchmark( 'isNotNumeric()', Itee.TestsUtils.iterateOverDataMap( isNotNumeric ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
