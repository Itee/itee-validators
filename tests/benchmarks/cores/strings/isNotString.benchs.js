/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotString } from '../../../../sources/cores/strings/isNotString'


export default suite( 'isNotString', () => {

    benchmark( 'isNotString()', Itee.TestsUtils.iterateOverDataMap( isNotString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
