/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isDefined,
    isNotDefined
}                     from '../../../../sources/cores/voids/isDefined'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isDefinedSuite = Benchmark.Suite( 'isDefined', TestsUtils.createSuiteOptions() )
                                .add( 'isDefined', TestsUtils.iterateOverDataMap( isDefined ), TestsUtils.createBenchmarkOptions() )

const isNotDefinedSuite = Benchmark.Suite( 'isNotDefined', TestsUtils.createSuiteOptions() )
                                   .add( 'isNotDefined', TestsUtils.iterateOverDataMap( isNotDefined ), TestsUtils.createBenchmarkOptions() )

export {
    isDefinedSuite,
    isNotDefinedSuite
}

