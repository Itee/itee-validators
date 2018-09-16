/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isZero } from '../../../../sources/cores/numbers/isZero'


export default suite( 'isZero', () => {

    benchmark( 'isZero()', Itee.TestsUtils.iterateOverDataMap( isZero ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
