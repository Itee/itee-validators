/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isNotSymbol,
    isSymbol
}                     from '../../../../sources/cores/symbols/isSymbol'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isSymbolSuite = Benchmark.Suite( 'isSymbol', TestsUtils.createSuiteOptions() )
                               .add( 'isSymbol', TestsUtils.iterateOverDataMap( isSymbol ), TestsUtils.createBenchmarkOptions() )

const isNotSymbolSuite = Benchmark.Suite( 'isNotSymbol', TestsUtils.createSuiteOptions() )
                                  .add( 'isNotSymbol', TestsUtils.iterateOverDataMap( isNotSymbol ), TestsUtils.createBenchmarkOptions() )

export {
    isSymbolSuite,
    isNotSymbolSuite
}

