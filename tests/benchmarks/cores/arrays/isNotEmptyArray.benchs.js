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

import { isNotEmptyArray }       from '../../../../sources/cores/arrays/isNotEmptyArray'


export default suite( 'isNotEmptyArray', () => {

    benchmark( 'isNotEmptyArray()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
