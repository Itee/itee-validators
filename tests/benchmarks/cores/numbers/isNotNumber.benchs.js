/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotNumber } from '../../../../sources/cores/numbers/isNotNumber'

export default suite( 'isNotNumber', () => {

    benchmark( 'isNotNumber()', Itee.TestsUtils.iterateOverDataMap( isNotNumber ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
