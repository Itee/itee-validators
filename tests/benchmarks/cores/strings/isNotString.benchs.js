/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotString } from '../../../../sources/cores/strings/isNotString'

export default suite( 'isNotString', () => {

    benchmark( 'isNotString()', Itee.TestsUtils.iterateOverDataMap( isNotString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
