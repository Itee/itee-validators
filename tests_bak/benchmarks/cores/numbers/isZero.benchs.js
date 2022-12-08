/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isZero,
    isZeroNegative,
    isZeroPositive
}                     from '../../../../sources/cores/numbers/isZero'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isZeroSuite = Benchmark.Suite( 'isZero', TestsUtils.createSuiteOptions() )
                             .add( 'isZero', TestsUtils.iterateOverDataMap( isZero ), TestsUtils.createBenchmarkOptions() )

const isZeroPositiveSuite = Benchmark.Suite( 'isZeroPositive', TestsUtils.createSuiteOptions() )
                                     .add( 'isZeroPositive', TestsUtils.iterateOverDataMap( isZeroPositive ), TestsUtils.createBenchmarkOptions() )

const isZeroNegativeSuite = Benchmark.Suite( 'isZeroNegative', TestsUtils.createSuiteOptions() )
                                     .add( 'isZeroNegative', TestsUtils.iterateOverDataMap( isZeroNegative ), TestsUtils.createBenchmarkOptions() )

export {
    isZeroSuite,
    isZeroNegativeSuite,
    isZeroPositiveSuite
}

