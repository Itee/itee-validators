/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotEmptyString } from '../../../../sources/cores/strings/isNotEmptyString'


export default suite( 'isNotEmptyString', () => {

    benchmark( 'isNotEmptyString()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
