/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isDefined } from '../../../../sources/cores/voids/isDefined'


export default suite( 'isDefined', () => {

    benchmark( 'isDefined()', Itee.TestsUtils.iterateOverDataMap( isDefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
