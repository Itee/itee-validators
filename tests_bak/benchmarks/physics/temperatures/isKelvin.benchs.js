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
    isKelvin,
    isNotKelvin
}                     from '../../../../sources/physics/temperatures/isKelvin'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isKelvinSuite = Benchmark.Suite( 'isKelvin', TestsUtils.createSuiteOptions() )
                               .add( 'isKelvin', TestsUtils.iterateOverDataMap( isKelvin ), TestsUtils.createBenchmarkOptions() )

const isNotKelvinSuite = Benchmark.Suite( 'isNotKelvin', TestsUtils.createSuiteOptions() )
                                  .add( 'isNotKelvin', TestsUtils.iterateOverDataMap( isNotKelvin ), TestsUtils.createBenchmarkOptions() )

export {
    isKelvinSuite,
    isNotKelvinSuite
}
