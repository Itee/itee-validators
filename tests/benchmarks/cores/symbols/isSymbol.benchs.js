/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isSymbol } from '../../../../sources/cores/symbols/isSymbol'

export default suite( 'isSymbol', () => {

    benchmark( 'isSymbol()', Itee.TestsUtils.iterateOverDataMap( isSymbol ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
