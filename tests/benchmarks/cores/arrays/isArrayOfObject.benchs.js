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

import { isArrayOfObject } from '../../../../sources/cores/arrays/isArrayOfObject'

export default suite( 'isArrayOfObject', () => {

    benchmark( 'isArrayOfObject()', Itee.TestsUtils.iterateOverDataMap( isArrayOfObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
