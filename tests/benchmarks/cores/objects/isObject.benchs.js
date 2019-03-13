/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isNotObject,
    isObject
} from '../../../../sources/cores/objects/isObject'

const isObjectSuite = suite( 'isObject', () => {

    benchmark( 'isObject()', Itee.TestsUtils.iterateOverDataMap( isObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotObjectSuite = suite( 'isNotObject', () => {

    benchmark( 'isNotObject()', Itee.TestsUtils.iterateOverDataMap( isNotObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isObjectSuite,
    isNotObjectSuite
}
