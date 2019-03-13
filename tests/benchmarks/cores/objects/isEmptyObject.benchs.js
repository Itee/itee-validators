/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isEmptyObject,
    isNotEmptyObject
} from '../../../../sources/cores/objects/isEmptyObject'

const isEmptyObjectSuite = suite( 'isEmptyObject', () => {

    benchmark( 'isEmptyObject()', Itee.TestsUtils.iterateOverDataMap( isEmptyObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotEmptyObjectSuite = suite( 'isNotEmptyObject', () => {

    benchmark( 'isNotEmptyObject()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isEmptyObjectSuite,
    isNotEmptyObjectSuite
}

