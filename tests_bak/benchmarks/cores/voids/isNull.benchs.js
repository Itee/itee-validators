/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isNotNull,
    isNull,
    isNull_0
}                     from '../../../../sources/cores/voids/isNull'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isNullSuite = Benchmark.Suite( 'isNull', TestsUtils.createSuiteOptions() )
                             .add( 'isNull', TestsUtils.iterateOverDataMap( isNull ), TestsUtils.createBenchmarkOptions() )
                             .add( 'isNull_0', TestsUtils.iterateOverDataMap( isNull_0 ), TestsUtils.createBenchmarkOptions() )

const isNotNullSuite = Benchmark.Suite( 'isNotNull', TestsUtils.createSuiteOptions() )
                                .add( 'isNotNull', TestsUtils.iterateOverDataMap( isNotNull ), TestsUtils.createBenchmarkOptions() )

export {
    isNullSuite,
    isNotNullSuite
}

