/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isFunction } from '../../../../sources/cores/functions/isFunction'


export default suite( 'isFunction', () => {

    benchmark( 'isFunction()', Itee.TestsUtils.iterateOverDataMap( isFunction ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
