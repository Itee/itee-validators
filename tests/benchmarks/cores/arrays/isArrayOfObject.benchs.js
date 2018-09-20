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

import { isArrayOfObject, isNotArrayOfObject } from '../../../../sources/cores/arrays/isArrayOfObject'

const isArrayOfObjectSuite = suite( 'isArrayOfObject', () => {

    benchmark( 'isArrayOfObject()', Itee.TestsUtils.iterateOverDataMap( isArrayOfObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotArrayOfObjectSuite = suite( 'isNotArrayOfObject', () => {

    benchmark( 'isNotArrayOfObject()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export { isArrayOfObjectSuite, isNotArrayOfObjectSuite }
