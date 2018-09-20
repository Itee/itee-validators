/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isMaxPositive } from '../../../../sources/cores/numbers/isMaxPositive'

export default suite( 'isMaxPositive', () => {

    benchmark( 'isMaxPositive()', Itee.TestsUtils.iterateOverDataMap( isMaxPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
