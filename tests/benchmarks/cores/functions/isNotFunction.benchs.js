/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotFunction } from '../../../../sources/cores/functions/isNotFunction'


export default suite( 'isNotFunction', () => {

    benchmark( 'isNotFunction()', Itee.TestsUtils.iterateOverDataMap( isNotFunction ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
