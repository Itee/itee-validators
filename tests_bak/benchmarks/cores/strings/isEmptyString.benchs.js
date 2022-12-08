/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isEmptyString,
    isNotEmptyString
}                     from '../../../../sources/cores/strings/isEmptyString'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isEmptyStringSuite = Benchmark.Suite( 'isEmptyString', TestsUtils.createSuiteOptions() )
                                    .add( 'isEmptyString', TestsUtils.iterateOverDataMap( isEmptyString ), TestsUtils.createBenchmarkOptions() )

const isNotEmptyStringSuite = Benchmark.Suite( 'isNotEmptyString', TestsUtils.createSuiteOptions() )
                                       .add( 'isNotEmptyString', TestsUtils.iterateOverDataMap( isNotEmptyString ), TestsUtils.createBenchmarkOptions() )

export {
    isEmptyStringSuite,
    isNotEmptyStringSuite
}
