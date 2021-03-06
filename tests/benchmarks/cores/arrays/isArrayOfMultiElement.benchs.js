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

import { isArrayOfMultiElement } from '../../../../sources/cores/arrays/isArrayOfMultiElement'

const isArrayOfMultiElementSuite = suite( 'isArrayOfMultiElement', () => {

    benchmark( 'isArrayOfMultiElement()', Itee.TestsUtils.iterateOverDataMap( isArrayOfMultiElement ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isArrayOfMultiElementSuite }
