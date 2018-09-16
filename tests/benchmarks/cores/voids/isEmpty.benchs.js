/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isEmpty } from '../../../../sources/cores/voids/isEmpty'


export default suite( 'isEmpty', () => {

    benchmark( 'isEmpty()', Itee.TestsUtils.iterateOverDataMap( isEmpty ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
