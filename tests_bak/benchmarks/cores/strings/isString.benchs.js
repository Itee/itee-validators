/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isNotString,
    isString,
    isString_0,
    isString_1,
    isString_2,
    isString_3,
    isString_4
}                     from '../../../../sources/cores/strings/isString'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isStringSuite = Benchmark.Suite( 'isString', TestsUtils.createSuiteOptions() )
                               .add( 'isString', TestsUtils.iterateOverDataMap( isString ), TestsUtils.createBenchmarkOptions() )
                               .add( 'isString_0', TestsUtils.iterateOverDataMap( isString_0 ), TestsUtils.createBenchmarkOptions() )
                               .add( 'isString_1', TestsUtils.iterateOverDataMap( isString_1 ), TestsUtils.createBenchmarkOptions() )
                               .add( 'isString_2', TestsUtils.iterateOverDataMap( isString_2 ), TestsUtils.createBenchmarkOptions() )
                               .add( 'isString_3', TestsUtils.iterateOverDataMap( isString_3 ), TestsUtils.createBenchmarkOptions() )
                               .add( 'isString_4', TestsUtils.iterateOverDataMap( isString_4 ), TestsUtils.createBenchmarkOptions() )

const isNotStringSuite = Benchmark.Suite( 'isNotString', TestsUtils.createSuiteOptions() )
                                  .add( 'isNotString', TestsUtils.iterateOverDataMap( isNotString ), TestsUtils.createBenchmarkOptions() )

export {
    isStringSuite,
    isNotStringSuite
}

