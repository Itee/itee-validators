/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isUndefined } from '../../../../sources/cores/voids/isUndefined'


export default suite( 'isUndefined', () => {

    benchmark( 'isUndefined()', Itee.TestsUtils.iterateOverDataMap( isUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
