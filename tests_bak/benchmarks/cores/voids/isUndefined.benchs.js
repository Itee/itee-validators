/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isNotUndefined,
    isUndefined
}                     from '../../../../sources/cores/voids/isUndefined'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isUndefinedSuite = Benchmark.Suite( 'isUndefined', TestsUtils.createSuiteOptions() )
                                  .add( 'isUndefined', TestsUtils.iterateOverDataMap( isUndefined ), TestsUtils.createBenchmarkOptions() )

const isNotUndefinedSuite = Benchmark.Suite( 'isNotUndefined', TestsUtils.createSuiteOptions() )
                                     .add( 'isNotUndefined', TestsUtils.iterateOverDataMap( isNotUndefined ), TestsUtils.createBenchmarkOptions() )

export {
    isUndefinedSuite,
    isNotUndefinedSuite
}

