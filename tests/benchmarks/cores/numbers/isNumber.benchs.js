/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import {
    isFloat,
    isFloat_1,
    isFloat_2,
    isInteger,
    isInteger_0,
    isInteger_1,
    isInteger_2,
    isInteger_3,
    isNaN,
    isNotNumber,
    isNumber,
    isNumber_0,
    isNumber_1,
    isNumberNegative,
    isNumberPositive
} from '../../../../sources/cores/numbers/isNumber'

const isNumberSuite = suite( 'isNumber', () => {

    benchmark( 'isNumber()', Itee.TestsUtils.iterateOverDataMap( isNumber ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNumber_0()', Itee.TestsUtils.iterateOverDataMap( isNumber_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isNumber_1()', Itee.TestsUtils.iterateOverDataMap( isNumber_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotNumberSuite = suite( 'isNotNumber', () => {

    benchmark( 'isNotNumber()', Itee.TestsUtils.iterateOverDataMap( isNotNumber ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNumberPositiveSuite = suite( 'isNumberPositive', () => {

    benchmark( 'isNumberPositive()', Itee.TestsUtils.iterateOverDataMap( isNumberPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNumberNegativeSuite = suite( 'isNumberNegative', () => {

    benchmark( 'isNumberNegative()', Itee.TestsUtils.iterateOverDataMap( isNumberNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isIntegerSuite = suite( 'isInteger', () => {

    benchmark( 'isInteger()', Itee.TestsUtils.iterateOverDataMap( isInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger_0()', Itee.TestsUtils.iterateOverDataMap( isInteger_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger_1()', Itee.TestsUtils.iterateOverDataMap( isInteger_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger_2()', Itee.TestsUtils.iterateOverDataMap( isInteger_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isInteger_3()', Itee.TestsUtils.iterateOverDataMap( isInteger_3 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isFloatSuite = suite( 'isFloat', () => {

    benchmark( 'isFloat()', Itee.TestsUtils.iterateOverDataMap( isFloat ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isFloat_1()', Itee.TestsUtils.iterateOverDataMap( isFloat_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
    benchmark( 'isFloat_2()', Itee.TestsUtils.iterateOverDataMap( isFloat_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNaNSuite = suite( 'isNaN', () => {

    benchmark( 'isNaN()', Itee.TestsUtils.iterateOverDataMap( isNaN ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

export {
    isFloatSuite,
    isIntegerSuite,
    isNumberSuite,
    isNaNSuite,
    isNotNumberSuite,
    isNumberNegativeSuite,
    isNumberPositiveSuite
}

