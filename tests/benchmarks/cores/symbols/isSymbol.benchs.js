/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isNotSymbol,
    isSymbol
} from '../../../../sources/cores/symbols/isSymbol'

const isSymbolSuite = suite( 'isSymbol', () => {

    benchmark( 'isSymbol()', Itee.TestsUtils.iterateOverDataMap( isSymbol ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotSymbolSuite = suite( 'isNotSymbol', () => {

    benchmark( 'isNotSymbol()', Itee.TestsUtils.iterateOverDataMap( isNotSymbol ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isSymbolSuite,
    isNotSymbolSuite
}

