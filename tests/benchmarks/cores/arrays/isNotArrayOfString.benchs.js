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

import { isNotArrayOfString }       from '../../../../sources/cores/arrays/isNotArrayOfString'


export default suite( 'isNotArrayOfString', () => {

    benchmark( 'isNotArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfString ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )
