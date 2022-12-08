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

import Benchmark                 from 'benchmark'
import { isNotArrayOfUndefined } from '../../../../sources/cores/arrays/isArrayOfUndefined'
import {
    isEmptyArray,
    isNotEmptyArray
}                                from '../../../../sources/cores/arrays/isEmptyArray'
import { TestsUtils }            from '../../../utils/itee-validators.utils'

const isEmptyArraySuite = Benchmark.Suite( 'isEmptyArray', TestsUtils.createSuiteOptions() )
                                            .add( 'isEmptyArray', TestsUtils.iterateOverDataMap( isEmptyArray ), TestsUtils.createBenchmarkOptions() )

const isNotEmptyArraySuite = Benchmark.Suite( 'isNotEmptyArray', TestsUtils.createSuiteOptions() )
                                            .add( 'isNotEmptyArray', TestsUtils.iterateOverDataMap( isNotEmptyArray ), TestsUtils.createBenchmarkOptions() )

export {
    isEmptyArraySuite,
    isNotEmptyArraySuite
}

