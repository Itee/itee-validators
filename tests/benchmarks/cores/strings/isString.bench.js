
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isStringNamespace from '../../../../sources/cores/strings/isString.js'

const isNotStringSuite = Benchmark.Suite( 'isStringNamespace.isNotString', Testing.createSuiteOptions() )
                                     .add( 'isNotString()', Testing.iterateOverDataMap( isStringNamespace.isNotString ), Testing.createBenchmarkOptions() )
const isStringSuite = Benchmark.Suite( 'isStringNamespace.isString', Testing.createSuiteOptions() )
                                     .add( 'isString()', Testing.iterateOverDataMap( isStringNamespace.isString ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_0()', Testing.iterateOverDataMap( isStringNamespace.isString_0 ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_1()', Testing.iterateOverDataMap( isStringNamespace.isString_1 ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_2()', Testing.iterateOverDataMap( isStringNamespace.isString_2 ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_3()', Testing.iterateOverDataMap( isStringNamespace.isString_3 ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_4()', Testing.iterateOverDataMap( isStringNamespace.isString_4 ), Testing.createBenchmarkOptions() )

export { isNotStringSuite,isStringSuite }

