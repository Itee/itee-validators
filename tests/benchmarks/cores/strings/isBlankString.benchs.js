/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isBlankString } from '../../../../sources/cores/strings/isBlankString'

export default suite( 'isBlankString', () => {

    benchmark( 'isBlankString()', Itee.TestsUtils.iterateOverDataMap( isBlankString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
