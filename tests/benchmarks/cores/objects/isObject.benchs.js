/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isObject } from '../../../../sources/cores/objects/isObject'

export default suite( 'isObject', () => {

    benchmark( 'isObject()', Itee.TestsUtils.iterateOverDataMap( isObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
