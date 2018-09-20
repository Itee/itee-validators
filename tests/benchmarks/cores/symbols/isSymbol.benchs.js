/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee, suite, benchmark */

import { isSymbol } from '../../../../sources/cores/symbols/isSymbol'

export default suite( 'isSymbol', () => {

    benchmark( 'isSymbol()', Itee.TestsUtils.iterateOverDataMap( isSymbol ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
