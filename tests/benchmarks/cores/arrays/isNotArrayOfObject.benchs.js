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

import { isNotArrayOfObject } from '../../../../sources/cores/arrays/isNotArrayOfObject'


export default suite( 'isNotArrayOfObject', () => {

    benchmark( 'isNotArrayOfObject()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
