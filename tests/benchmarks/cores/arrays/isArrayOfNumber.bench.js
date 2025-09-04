
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isArrayOfNumberNamespace from '../../../../sources/cores/arrays/isArrayOfNumber.js'

const isArrayOfNumberSuite = Benchmark.Suite( 'isArrayOfNumberNamespace.isArrayOfNumber', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfNumber()', Testing.iterateOverDataMap( isArrayOfNumberNamespace.isArrayOfNumber ), Testing.createBenchmarkOptions() )

const isNotArrayOfNumberSuite = Benchmark.Suite( 'isArrayOfNumberNamespace.isNotArrayOfNumber', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfNumber()', Testing.iterateOverDataMap( isArrayOfNumberNamespace.isNotArrayOfNumber ), Testing.createBenchmarkOptions() )

export { isArrayOfNumberSuite,isNotArrayOfNumberSuite }

