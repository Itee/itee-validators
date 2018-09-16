/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isNotSymbol } from '../../../../sources/cores/symbols/isNotSymbol'


export default suite( 'isNotSymbol', () => {

    benchmark( 'isNotSymbol()', Itee.TestsUtils.iterateOverDataMap( isNotSymbol ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
