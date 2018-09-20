/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isNotSymbol } from '../../../../sources/cores/symbols/isNotSymbol'

export default suite( 'isNotSymbol', () => {

    benchmark( 'isNotSymbol()', Itee.TestsUtils.iterateOverDataMap( isNotSymbol ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
