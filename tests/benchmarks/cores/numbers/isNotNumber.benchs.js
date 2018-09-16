/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotNumber } from '../../../../sources/cores/numbers/isNotNumber'


export default suite( 'isNotNumber', () => {

    benchmark( 'isNotNumber()', Itee.TestsUtils.iterateOverDataMap( isNotNumber ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
