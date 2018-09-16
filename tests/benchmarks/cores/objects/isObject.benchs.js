/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isObject } from '../../../../sources/cores/objects/isObject'


export default suite( 'isObject', () => {

    benchmark( 'isObject()', Itee.TestsUtils.iterateOverDataMap( isObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
