/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNullOrUndefined } from '../../../../sources/cores/voids/isNullOrUndefined'

export default suite( 'isNullOrUndefined', () => {

    benchmark( 'isNullOrUndefined()', Itee.TestsUtils.iterateOverDataMap( isNullOrUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
