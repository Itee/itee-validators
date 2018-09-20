/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isFunction } from '../../../../sources/cores/functions/isFunction'

export default suite( 'isFunction', () => {

    benchmark( 'isFunction()', Itee.TestsUtils.iterateOverDataMap( isFunction ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
