/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isFinite } from '../../../../sources/cores/numbers/isFinite'


export default suite( 'isFinite', () => {

    benchmark( 'isFinite()', Itee.TestsUtils.iterateOverDataMap( isFinite ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
