/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isFloat,
    isFloat_1,
    isFloat_2,
    isInteger,
    isInteger_0,
    isInteger_1,
    isInteger_2,
    isInteger_3,
    isNaN,
    isNotNumber,
    isNumber,
    isNumber_0,
    isNumber_1,
    isNumberNegative,
    isNumberPositive
}                     from '../../../../sources/cores/numbers/isNumber'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isNumberSuite = Benchmark.Suite( 'isNumber', TestsUtils.createSuiteOptions() )
                               .add( 'isNumber', TestsUtils.iterateOverDataMap( isNumber ), TestsUtils.createBenchmarkOptions() )
                               .add( 'isNumber_0', TestsUtils.iterateOverDataMap( isNumber_0 ), TestsUtils.createBenchmarkOptions() )
                               .add( 'isNumber_1', TestsUtils.iterateOverDataMap( isNumber_1 ), TestsUtils.createBenchmarkOptions() )

const isNotNumberSuite = Benchmark.Suite( 'isNotNumber', TestsUtils.createSuiteOptions() )
                                  .add( 'isNotNumber', TestsUtils.iterateOverDataMap( isNotNumber ), TestsUtils.createBenchmarkOptions() )

const isNumberPositiveSuite = Benchmark.Suite( 'isNumberPositive', TestsUtils.createSuiteOptions() )
                                       .add( 'isNumberPositive', TestsUtils.iterateOverDataMap( isNumberPositive ), TestsUtils.createBenchmarkOptions() )

const isNumberNegativeSuite = Benchmark.Suite( 'isNumberNegative', TestsUtils.createSuiteOptions() )
                                       .add( 'isNumberNegative', TestsUtils.iterateOverDataMap( isNumberNegative ), TestsUtils.createBenchmarkOptions() )

const isIntegerSuite = Benchmark.Suite( 'isInteger', TestsUtils.createSuiteOptions() )
                                .add( 'isInteger', TestsUtils.iterateOverDataMap( isInteger ), TestsUtils.createBenchmarkOptions() )
                                .add( 'isInteger_0', TestsUtils.iterateOverDataMap( isInteger_0 ), TestsUtils.createBenchmarkOptions() )
                                .add( 'isInteger_1', TestsUtils.iterateOverDataMap( isInteger_1 ), TestsUtils.createBenchmarkOptions() )
                                .add( 'isInteger_2', TestsUtils.iterateOverDataMap( isInteger_2 ), TestsUtils.createBenchmarkOptions() )
                                .add( 'isInteger_3', TestsUtils.iterateOverDataMap( isInteger_3 ), TestsUtils.createBenchmarkOptions() )

const isFloatSuite = Benchmark.Suite( 'isFloat', TestsUtils.createSuiteOptions() )
                              .add( 'isFloat', TestsUtils.iterateOverDataMap( isFloat ), TestsUtils.createBenchmarkOptions() )
                              .add( 'isFloat_1', TestsUtils.iterateOverDataMap( isFloat_1 ), TestsUtils.createBenchmarkOptions() )
                              .add( 'isFloat_2', TestsUtils.iterateOverDataMap( isFloat_2 ), TestsUtils.createBenchmarkOptions() )

const isNaNSuite = Benchmark.Suite( 'isNaN', TestsUtils.createSuiteOptions() )
                            .add( 'isNaN', TestsUtils.iterateOverDataMap( isNaN ), TestsUtils.createBenchmarkOptions() )

export {
    isFloatSuite,
    isIntegerSuite,
    isNumberSuite,
    isNaNSuite,
    isNotNumberSuite,
    isNumberNegativeSuite,
    isNumberPositiveSuite
}

