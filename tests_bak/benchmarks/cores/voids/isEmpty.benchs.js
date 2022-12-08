/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark        from 'benchmark'
import { isNotDefined } from '../../../../sources/cores/voids/isDefined'
import {
    isEmpty,
    isNotEmpty
}                       from '../../../../sources/cores/voids/isEmpty'
import { TestsUtils }   from '../../../utils/itee-validators.utils'

const isEmptySuite = Benchmark.Suite( 'isEmpty', TestsUtils.createSuiteOptions() )
                                   .add( 'isEmpty', TestsUtils.iterateOverDataMap( isEmpty ), TestsUtils.createBenchmarkOptions() )

const isNotEmptySuite = Benchmark.Suite( 'isNotEmpty', TestsUtils.createSuiteOptions() )
                                   .add( 'isNotEmpty', TestsUtils.iterateOverDataMap( isNotEmpty ), TestsUtils.createBenchmarkOptions() )

export {
    isEmptySuite,
    isNotEmptySuite
}

