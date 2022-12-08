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
    isNotTemperature,
    isTemperature
}                     from '../../../../sources/physics/temperatures/isTemperature'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isTemperatureSuite = Benchmark.Suite( 'isTemperature', TestsUtils.createSuiteOptions() )
                                    .add( 'isTemperature', TestsUtils.iterateOverDataMap( isTemperature ), TestsUtils.createBenchmarkOptions() )

const isNotTemperatureSuite = Benchmark.Suite( 'isNotTemperature', TestsUtils.createSuiteOptions() )
                                       .add( 'isNotTemperature', TestsUtils.iterateOverDataMap( isNotTemperature ), TestsUtils.createBenchmarkOptions() )

export {
    isTemperatureSuite,
    isNotTemperatureSuite
}
