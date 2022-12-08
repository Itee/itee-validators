/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isFinite,
    isInfinite,
    isInfiniteNegative,
    isInfinitePositive
}                     from '../../../../sources/cores/numbers/isInfinite'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isInfiniteSuite = Benchmark.Suite( 'isInfinite', TestsUtils.createSuiteOptions() )
                                 .add( 'isInfinite', TestsUtils.iterateOverDataMap( isInfinite ), TestsUtils.createBenchmarkOptions() )

const isInfinitePositiveSuite = Benchmark.Suite( 'isInfinitePositive', TestsUtils.createSuiteOptions() )
                                         .add( 'isInfinitePositive', TestsUtils.iterateOverDataMap( isInfinitePositive ), TestsUtils.createBenchmarkOptions() )

const isInfiniteNegativeSuite = Benchmark.Suite( 'isInfiniteNegative', TestsUtils.createSuiteOptions() )
                                         .add( 'isInfiniteNegative', TestsUtils.iterateOverDataMap( isInfiniteNegative ), TestsUtils.createBenchmarkOptions() )

const isFiniteSuite = Benchmark.Suite( 'isFinite', TestsUtils.createSuiteOptions() )
                               .add( 'isFinite', TestsUtils.iterateOverDataMap( isFinite ), TestsUtils.createBenchmarkOptions() )

export {
    isFiniteSuite,
    isInfiniteSuite,
    isInfiniteNegativeSuite,
    isInfinitePositiveSuite
}

