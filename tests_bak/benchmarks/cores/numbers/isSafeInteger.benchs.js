/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isMaxSafeInteger,
    isMinSafeInteger
}                     from '../../../../sources/cores/numbers/isSafeInteger'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isMaxSafeIntegerSuite = Benchmark.Suite( 'isMaxSafeInteger', TestsUtils.createSuiteOptions() )
                                       .add( 'isMaxSafeInteger', TestsUtils.iterateOverDataMap( isMaxSafeInteger ), TestsUtils.createBenchmarkOptions() )

const isMinSafeIntegerSuite = Benchmark.Suite( 'isMinSafeInteger', TestsUtils.createSuiteOptions() )
                                       .add( 'isMinSafeInteger', TestsUtils.iterateOverDataMap( isMinSafeInteger ), TestsUtils.createBenchmarkOptions() )

export {
    isMaxSafeIntegerSuite,
    isMinSafeIntegerSuite
}

