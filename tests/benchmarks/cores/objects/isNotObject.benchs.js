/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotObject } from '../../../../sources/cores/objects/isNotObject'

export default suite( 'isNotObject', () => {

    benchmark( 'isNotObject()', Itee.TestsUtils.iterateOverDataMap( isNotObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
