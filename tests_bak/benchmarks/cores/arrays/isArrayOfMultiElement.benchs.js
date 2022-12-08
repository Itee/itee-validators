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

import Benchmark                 from 'benchmark'
import { isArrayOfMultiElement } from '../../../../sources/cores/arrays/isArrayOfMultiElement'
import { TestsUtils }            from '../../../utils/itee-validators.utils'


const isArrayOfMultiElementSuite = Benchmark.Suite( 'isArrayOfMultiElement', TestsUtils.createSuiteOptions() )
                                            .add( 'isArrayOfMultiElement', TestsUtils.iterateOverDataMap( isArrayOfMultiElement ), TestsUtils.createBenchmarkOptions() )

export { isArrayOfMultiElementSuite }
