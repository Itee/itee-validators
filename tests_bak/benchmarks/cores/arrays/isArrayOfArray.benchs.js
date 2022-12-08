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
    isArrayOfArray,
    isNotArrayOfArray
}                     from '../../../../sources/cores/arrays/isArrayOfArray'
import { TestsUtils } from '../../../utils/itee-validators.utils'


const isArrayOfArraySuite = Benchmark.Suite( 'isArrayOfArray', TestsUtils.createSuiteOptions() )
                                     .add( 'isArrayOfArray', TestsUtils.iterateOverDataMap( isArrayOfArray ), TestsUtils.createBenchmarkOptions() )

const isNotArrayOfArraySuite = Benchmark.Suite( 'isNotArrayOfArray', TestsUtils.createSuiteOptions() )
                                        .add( 'isNotArrayOfArray', TestsUtils.iterateOverDataMap( isNotArrayOfArray ), TestsUtils.createBenchmarkOptions() )

export {
    isArrayOfArraySuite,
    isNotArrayOfArraySuite
}
