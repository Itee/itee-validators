/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isArrayOfNull,
    isNotArrayOfNull
}                     from '../../../../sources/cores/arrays/isArrayOfNull'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isArrayOfNullSuite = Benchmark.Suite( 'isArrayOfNull', TestsUtils.createSuiteOptions() )
                                    .add( 'isArrayOfNull', TestsUtils.iterateOverDataMap( isArrayOfNull ), TestsUtils.createBenchmarkOptions() )

const isNotArrayOfNullSuite = Benchmark.Suite( 'isNotArrayOfNull', TestsUtils.createSuiteOptions() )
                                       .add( 'isNotArrayOfNull', TestsUtils.iterateOverDataMap( isNotArrayOfNull ), TestsUtils.createBenchmarkOptions() )

export {
    isArrayOfNullSuite,
    isNotArrayOfNullSuite
}

