/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotEmptyObject } from '../../../../sources/cores/objects/isNotEmptyObject'


export default suite( 'isNotEmptyObject', () => {

    benchmark( 'isNotEmptyObject()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
