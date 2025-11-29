import * as isArrayOfStringNamespace from '../../../../sources/cores/arrays/isArrayOfString.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfStringSuite = Benchmark.Suite( 'isArrayOfStringNamespace.isArrayOfString', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfString()', Testing.iterateOverDataMap( isArrayOfStringNamespace.isArrayOfString ), Testing.createBenchmarkOptions() )
                                     .add( 'isArrayOfString_1()', Testing.iterateOverDataMap( isArrayOfStringNamespace.isArrayOfString_1 ), Testing.createBenchmarkOptions() )

const isNotArrayOfStringSuite = Benchmark.Suite( 'isArrayOfStringNamespace.isNotArrayOfString', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfString()', Testing.iterateOverDataMap( isArrayOfStringNamespace.isNotArrayOfString ), Testing.createBenchmarkOptions() )

export { isArrayOfStringSuite,isNotArrayOfStringSuite }

