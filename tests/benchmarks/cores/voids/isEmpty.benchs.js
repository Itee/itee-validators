/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isEmpty } from '../../../../sources/cores/voids/isEmpty'

export default suite( 'isEmpty', () => {

    benchmark( 'isEmpty()', Itee.TestsUtils.iterateOverDataMap( isEmpty ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
