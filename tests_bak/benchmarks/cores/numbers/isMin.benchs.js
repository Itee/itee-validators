/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isMinNegative,
    isMinPositive
}                     from '../../../../sources/cores/numbers/isMin'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isMinPositiveSuite = Benchmark.Suite( 'isMinPositive', TestsUtils.createSuiteOptions() )
                                    .add( 'isMinPositive', TestsUtils.iterateOverDataMap( isMinPositive ), TestsUtils.createBenchmarkOptions() )

const isMinNegativeSuite = Benchmark.Suite( 'isMinNegative', TestsUtils.createSuiteOptions() )
                                    .add( 'isMinNegative', TestsUtils.iterateOverDataMap( isMinNegative ), TestsUtils.createBenchmarkOptions() )

export {
    isMinNegativeSuite,
    isMinPositiveSuite
}
