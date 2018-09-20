/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isEmptyString } from '../../../../sources/cores/strings/isEmptyString'

export default suite( 'isEmptyString', () => {

    benchmark( 'isEmptyString()', Itee.TestsUtils.iterateOverDataMap( isEmptyString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
