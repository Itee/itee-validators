
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isNumberNamespace from '../../../../sources/cores/numbers/isNumber.js'

const isNumberSuite = Benchmark.Suite( 'isNumberNamespace.isNumber', Testing.createSuiteOptions() )
                                     .add( 'isNumber()', Testing.iterateOverDataMap( isNumberNamespace.isNumber ), Testing.createBenchmarkOptions() )
                                     .add( 'isNumber_0()', Testing.iterateOverDataMap( isNumberNamespace.isNumber_0 ), Testing.createBenchmarkOptions() )
                                     .add( 'isNumber_1()', Testing.iterateOverDataMap( isNumberNamespace.isNumber_1 ), Testing.createBenchmarkOptions() )

const isNumberPositiveSuite = Benchmark.Suite( 'isNumberNamespace.isNumberPositive', Testing.createSuiteOptions() )
                                     .add( 'isNumberPositive()', Testing.iterateOverDataMap( isNumberNamespace.isNumberPositive ), Testing.createBenchmarkOptions() )

const isNumberNegativeSuite = Benchmark.Suite( 'isNumberNamespace.isNumberNegative', Testing.createSuiteOptions() )
                                     .add( 'isNumberNegative()', Testing.iterateOverDataMap( isNumberNamespace.isNumberNegative ), Testing.createBenchmarkOptions() )

const isNotNumberSuite = Benchmark.Suite( 'isNumberNamespace.isNotNumber', Testing.createSuiteOptions() )
                                     .add( 'isNotNumber()', Testing.iterateOverDataMap( isNumberNamespace.isNotNumber ), Testing.createBenchmarkOptions() )

const isIntegerSuite = Benchmark.Suite( 'isNumberNamespace.isInteger', Testing.createSuiteOptions() )
                                     .add( 'isInteger()', Testing.iterateOverDataMap( isNumberNamespace.isInteger ), Testing.createBenchmarkOptions() )
                                     .add( 'isInteger_0()', Testing.iterateOverDataMap( isNumberNamespace.isInteger_0 ), Testing.createBenchmarkOptions() )
                                     .add( 'isInteger_1()', Testing.iterateOverDataMap( isNumberNamespace.isInteger_1 ), Testing.createBenchmarkOptions() )
                                     .add( 'isInteger_2()', Testing.iterateOverDataMap( isNumberNamespace.isInteger_2 ), Testing.createBenchmarkOptions() )
                                     .add( 'isInteger_3()', Testing.iterateOverDataMap( isNumberNamespace.isInteger_3 ), Testing.createBenchmarkOptions() )

const isFloatSuite = Benchmark.Suite( 'isNumberNamespace.isFloat', Testing.createSuiteOptions() )
                                     .add( 'isFloat()', Testing.iterateOverDataMap( isNumberNamespace.isFloat ), Testing.createBenchmarkOptions() )
                                     .add( 'isFloat_1()', Testing.iterateOverDataMap( isNumberNamespace.isFloat_1 ), Testing.createBenchmarkOptions() )
                                     .add( 'isFloat_2()', Testing.iterateOverDataMap( isNumberNamespace.isFloat_2 ), Testing.createBenchmarkOptions() )

const isNaNSuite = Benchmark.Suite( 'isNumberNamespace.isNaN', Testing.createSuiteOptions() )
                                     .add( 'isNaN()', Testing.iterateOverDataMap( isNumberNamespace.isNaN ), Testing.createBenchmarkOptions() )

export { isNumberSuite,isNumberPositiveSuite,isNumberNegativeSuite,isNotNumberSuite,isIntegerSuite,isFloatSuite,isNaNSuite }

