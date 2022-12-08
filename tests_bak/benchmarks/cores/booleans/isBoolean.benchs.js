/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import Benchmark      from 'benchmark'
import { isArray_0 }  from '../../../../sources/cores/arrays/isArray'
import {
    isBoolean,
    isBoolean_alt,
    isNotBoolean,
    isNotBoolean_negbase
}                     from '../../../../sources/cores/booleans/isBoolean'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isBooleanSuite = Benchmark.Suite( 'isBoolean', TestsUtils.createSuiteOptions() )
                                .add( 'isBoolean', TestsUtils.iterateOverDataMap( isBoolean ), TestsUtils.createBenchmarkOptions() )
                                .add( 'isBoolean_alt', TestsUtils.iterateOverDataMap( isBoolean_alt ), TestsUtils.createBenchmarkOptions() )

const isNotBooleanSuite = Benchmark.Suite( 'isNotBoolean', TestsUtils.createSuiteOptions() )
                                   .add( 'isNotBoolean', TestsUtils.iterateOverDataMap( isNotBoolean ), TestsUtils.createBenchmarkOptions() )
                                   .add( 'isNotBoolean_negbase', TestsUtils.iterateOverDataMap( isNotBoolean_negbase ), TestsUtils.createBenchmarkOptions() )

export {
    isBooleanSuite,
    isNotBooleanSuite
}
