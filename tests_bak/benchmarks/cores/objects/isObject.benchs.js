/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark       from 'benchmark'
import { isNotObject } from '../../../../sources/cores/objects/isObject'
import { TestsUtils }  from '../../../utils/itee-validators.utils'

const isObjectSuite = Benchmark.Suite( 'isObject', TestsUtils.createSuiteOptions() )
                               .add( 'isObject', TestsUtils.iterateOverDataMap( isObject ), TestsUtils.createBenchmarkOptions() )

const isNotObjectSuite = Benchmark.Suite( 'isNotObject', TestsUtils.createSuiteOptions() )
                                  .add( 'isNotObject', TestsUtils.iterateOverDataMap( isNotObject ), TestsUtils.createBenchmarkOptions() )

export {
    isObjectSuite,
    isNotObjectSuite
}
