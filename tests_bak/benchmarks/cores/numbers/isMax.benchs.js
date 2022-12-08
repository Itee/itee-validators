/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isMaxNegative,
    isMaxPositive
}                     from '../../../../sources/cores/numbers/isMax'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isMaxPositiveSuite = Benchmark.Suite( 'isMaxPositive', TestsUtils.createSuiteOptions() )
                                    .add( 'isMaxPositive', TestsUtils.iterateOverDataMap( isMaxPositive ), TestsUtils.createBenchmarkOptions() )

const isMaxNegativeSuite = Benchmark.Suite( 'isMaxNegative', TestsUtils.createSuiteOptions() )
                                    .add( 'isMaxNegative', TestsUtils.iterateOverDataMap( isMaxNegative ), TestsUtils.createBenchmarkOptions() )

export {
    isMaxNegativeSuite,
    isMaxPositiveSuite
}

