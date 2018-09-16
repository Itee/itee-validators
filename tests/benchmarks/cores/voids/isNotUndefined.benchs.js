/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotUndefined } from '../../../../sources/cores/voids/isNotUndefined'


export default suite( 'isNotUndefined', () => {

    benchmark( 'isNotUndefined()', Itee.TestsUtils.iterateOverDataMap( isNotUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
