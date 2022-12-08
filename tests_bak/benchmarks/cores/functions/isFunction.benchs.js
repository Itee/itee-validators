/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isFunction,
    isNotFunction
}                     from '../../../../sources/cores/functions/isFunction'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isFunctionSuite = Benchmark.Suite( 'isFunction', TestsUtils.createSuiteOptions() )
                                 .add( 'isFunction', TestsUtils.iterateOverDataMap( isFunction ), TestsUtils.createBenchmarkOptions() )

const isNotFunctionSuite = Benchmark.Suite( 'isNotFunction', TestsUtils.createSuiteOptions() )
                                    .add( 'isNotFunction', TestsUtils.iterateOverDataMap( isNotFunction ), TestsUtils.createBenchmarkOptions() )

export {
    isFunctionSuite,
    isNotFunctionSuite
}

