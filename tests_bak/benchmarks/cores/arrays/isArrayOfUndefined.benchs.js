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
    isArrayOfUndefined,
    isNotArrayOfUndefined
}                     from '../../../../sources/cores/arrays/isArrayOfUndefined'
import { TestsUtils } from '../../../utils/itee-validators.utils'


const isArrayOfUndefinedSuite = Benchmark.Suite( 'isArrayOfUndefined', TestsUtils.createSuiteOptions() )
                                         .add( 'isArrayOfUndefined', TestsUtils.iterateOverDataMap( isArrayOfUndefined ), TestsUtils.createBenchmarkOptions() )

const isNotArrayOfUndefinedSuite = Benchmark.Suite( 'isNotArrayOfUndefined', TestsUtils.createSuiteOptions() )
                                            .add( 'isNotArrayOfUndefined', TestsUtils.iterateOverDataMap( isNotArrayOfUndefined ), TestsUtils.createBenchmarkOptions() )

export {
    isArrayOfUndefinedSuite,
    isNotArrayOfUndefinedSuite
}

