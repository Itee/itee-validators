/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotObject } from '../../../../sources/cores/objects/isNotObject'


export default suite( 'isNotObject', () => {

    benchmark( 'isNotObject()', Itee.TestsUtils.iterateOverDataMap( isNotObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
