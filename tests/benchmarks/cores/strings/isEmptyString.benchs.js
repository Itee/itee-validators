/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isEmptyString } from '../../../../sources/cores/strings/isEmptyString'

export default suite( 'isEmptyString', () => {

    benchmark( 'isEmptyString()', Itee.TestsUtils.iterateOverDataMap( isEmptyString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
