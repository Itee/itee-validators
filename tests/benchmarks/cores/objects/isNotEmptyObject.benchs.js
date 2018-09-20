/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotEmptyObject } from '../../../../sources/cores/objects/isNotEmptyObject'

export default suite( 'isNotEmptyObject', () => {

    benchmark( 'isNotEmptyObject()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
