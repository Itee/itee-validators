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
    isArrayOfObject,
    isNotArrayOfObject
}                     from '../../../../sources/cores/arrays/isArrayOfObject'
import { TestsUtils } from '../../../utils/itee-validators.utils'


const isArrayOfObjectSuite = Benchmark.Suite( 'isArrayOfObject', TestsUtils.createSuiteOptions() )
                                      .add( 'isArrayOfObject', TestsUtils.iterateOverDataMap( isArrayOfObject ), TestsUtils.createBenchmarkOptions() )

const isNotArrayOfObjectSuite = Benchmark.Suite( 'isNotArrayOfObject', TestsUtils.createSuiteOptions() )
                                         .add( 'isNotArrayOfObject', TestsUtils.iterateOverDataMap( isNotArrayOfObject ), TestsUtils.createBenchmarkOptions() )

export {
    isArrayOfObjectSuite,
    isNotArrayOfObjectSuite
}
