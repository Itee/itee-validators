/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNumeric } from '../../../../sources/cores/numbers/isNumeric'


export default suite( 'isNumeric', () => {

    benchmark( 'isNumeric()', Itee.TestsUtils.iterateOverDataMap( isNumeric ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
