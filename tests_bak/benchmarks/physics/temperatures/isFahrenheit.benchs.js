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
    isFahrenheit,
    isNotFahrenheit
}                     from '../../../../sources/physics/temperatures/isFahrenheit'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isFahrenheitSuite = Benchmark.Suite( 'isFahrenheit', TestsUtils.createSuiteOptions() )
                                   .add( 'isFahrenheit', TestsUtils.iterateOverDataMap( isFahrenheit ), TestsUtils.createBenchmarkOptions() )

const isNotFahrenheitSuite = Benchmark.Suite( 'isNotFahrenheit', TestsUtils.createSuiteOptions() )
                                      .add( 'isNotFahrenheit', TestsUtils.iterateOverDataMap( isNotFahrenheit ), TestsUtils.createBenchmarkOptions() )

export {
    isFahrenheitSuite,
    isNotFahrenheitSuite
}
