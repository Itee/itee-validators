/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isBlankString,
    isNotBlankString
}                     from '../../../../sources/cores/strings/isBlankString'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isBlankStringSuite = Benchmark.Suite( 'isBlankString', TestsUtils.createSuiteOptions() )
                                    .add( 'isBlankString', TestsUtils.iterateOverDataMap( isBlankString ), TestsUtils.createBenchmarkOptions() )

const isNotBlankStringSuite = Benchmark.Suite( 'isNotBlankString', TestsUtils.createSuiteOptions() )
                                       .add( 'isNotBlankString', TestsUtils.iterateOverDataMap( isNotBlankString ), TestsUtils.createBenchmarkOptions() )

export {
    isBlankStringSuite,
    isNotBlankStringSuite
}

