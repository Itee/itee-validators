/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotEmptyString } from '../../../../sources/cores/strings/isNotEmptyString'

export default suite( 'isNotEmptyString', () => {

    benchmark( 'isNotEmptyString()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
