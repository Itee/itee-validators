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
    isArrayOfString,
    isNotArrayOfString
}                     from '../../../../sources/cores/arrays/isArrayOfString'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isArrayOfStringSuite = Benchmark.Suite( 'isArrayOfString', TestsUtils.createSuiteOptions() )
                                      .add( 'isArrayOfString', TestsUtils.iterateOverDataMap( isArrayOfString ), TestsUtils.createBenchmarkOptions() )

const isNotArrayOfStringSuite = Benchmark.Suite( 'isNotArrayOfString', TestsUtils.createSuiteOptions() )
                                         .add( 'isNotArrayOfString', TestsUtils.iterateOverDataMap( isNotArrayOfString ), TestsUtils.createBenchmarkOptions() )


export {
    isArrayOfStringSuite,
    isNotArrayOfStringSuite
}

