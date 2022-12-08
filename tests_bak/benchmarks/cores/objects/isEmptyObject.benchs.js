/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import {
    isEmptyObject,
    isNotEmptyObject
}                     from '../../../../sources/cores/objects/isEmptyObject'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isEmptyObjectSuite = Benchmark.Suite( 'isEmptyObject', TestsUtils.createSuiteOptions() )
                                    .add( 'isEmptyObject', TestsUtils.iterateOverDataMap( isEmptyObject ), TestsUtils.createBenchmarkOptions() )

const isNotEmptyObjectSuite = Benchmark.Suite( 'isNotEmptyObject', TestsUtils.createSuiteOptions() )
                                       .add( 'isNotEmptyObject', TestsUtils.iterateOverDataMap( isNotEmptyObject ), TestsUtils.createBenchmarkOptions() )

export {
    isEmptyObjectSuite,
    isNotEmptyObjectSuite
}

