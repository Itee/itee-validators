/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isDefined } from '../../../../sources/cores/voids/isDefined'

export default suite( 'isDefined', () => {

    benchmark( 'isDefined()', Itee.TestsUtils.iterateOverDataMap( isDefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
