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

import Benchmark                  from 'benchmark'
import { isArrayOfSingleElement } from '../../../../sources/cores/arrays/isArrayOfSingleElement'
import { TestsUtils }             from '../../../utils/itee-validators.utils'

const isArrayOfSingleElementSuite = Benchmark.Suite( 'isArrayOfSingleElement', TestsUtils.createSuiteOptions() )
                                             .add( 'isArrayOfSingleElement', TestsUtils.iterateOverDataMap( isArrayOfSingleElement ), TestsUtils.createBenchmarkOptions() )

export { isArrayOfSingleElementSuite }
