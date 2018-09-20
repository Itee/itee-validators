/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isEmptyObject } from '../../../../sources/cores/objects/isEmptyObject'

export default suite( 'isEmptyObject', () => {

    benchmark( 'isEmptyObject()', Itee.TestsUtils.iterateOverDataMap( isEmptyObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
