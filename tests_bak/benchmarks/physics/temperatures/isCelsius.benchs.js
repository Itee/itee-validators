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
    isCelsius,
    isNotCelsius
}                     from '../../../../sources/physics/temperatures/isCelsius'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isCelsiusSuite = Benchmark.Suite( 'isCelsius', TestsUtils.createSuiteOptions() )
                                .add( 'isCelsius', TestsUtils.iterateOverDataMap( isCelsius ), TestsUtils.createBenchmarkOptions() )

const isNotCelsiusSuite = Benchmark.Suite( 'isNotCelsius', TestsUtils.createSuiteOptions() )
                                   .add( 'isNotCelsius', TestsUtils.iterateOverDataMap( isNotCelsius ), TestsUtils.createBenchmarkOptions() )

export {
    isCelsiusSuite,
    isNotCelsiusSuite
}
