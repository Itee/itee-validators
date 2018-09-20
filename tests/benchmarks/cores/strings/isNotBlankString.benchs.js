/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotBlankString } from '../../../../sources/cores/strings/isNotBlankString'

export default suite( 'isNotBlankString', () => {

    benchmark( 'isNotBlankString()', Itee.TestsUtils.iterateOverDataMap( isNotBlankString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
