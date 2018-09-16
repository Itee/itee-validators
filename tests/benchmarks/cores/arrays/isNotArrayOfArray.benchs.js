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

import { isNotArrayOfArray }       from '../../../../sources/cores/arrays/isNotArrayOfArray'


export default suite( 'isNotArrayOfArray', () => {

    benchmark( 'isNotArrayOfArray()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
