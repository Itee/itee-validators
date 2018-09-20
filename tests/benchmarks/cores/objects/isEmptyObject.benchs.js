/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isEmptyObject } from '../../../../sources/cores/objects/isEmptyObject'

export default suite( 'isEmptyObject', () => {

    benchmark( 'isEmptyObject()', Itee.TestsUtils.iterateOverDataMap( isEmptyObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
