/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isZero } from '../../../../sources/cores/numbers/isZero'

export default suite( 'isZero', () => {

    benchmark( 'isZero()', Itee.TestsUtils.iterateOverDataMap( isZero ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
