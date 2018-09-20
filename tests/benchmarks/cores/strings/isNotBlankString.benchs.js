/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotBlankString } from '../../../../sources/cores/strings/isNotBlankString'

export default suite( 'isNotBlankString', () => {

    benchmark( 'isNotBlankString()', Itee.TestsUtils.iterateOverDataMap( isNotBlankString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
