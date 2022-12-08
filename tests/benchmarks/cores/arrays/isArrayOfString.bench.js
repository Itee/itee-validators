
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isArrayOfStringNamespace from '../../../../sources/cores/arrays/isArrayOfString.js'

const isArrayOfStringSuite = Benchmark.Suite( 'isArrayOfStringNamespace.isArrayOfString', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfString()', Testing.iterateOverDataMap( isArrayOfStringNamespace.isArrayOfString ), Testing.createBenchmarkOptions() )
                                     .add( 'isArrayOfString_1()', Testing.iterateOverDataMap( isArrayOfStringNamespace.isArrayOfString_1 ), Testing.createBenchmarkOptions() )
const isNotArrayOfStringSuite = Benchmark.Suite( 'isArrayOfStringNamespace.isNotArrayOfString', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfString()', Testing.iterateOverDataMap( isArrayOfStringNamespace.isNotArrayOfString ), Testing.createBenchmarkOptions() )

export { isArrayOfStringSuite,isNotArrayOfStringSuite }

