import * as isarrayofstringNamespace from '../../../../sources/cores/arrays/isArrayOfString.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfStringSuite = Benchmark.Suite( 'isarrayofstringNamespace.isArrayOfString', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfString()', Testing.iterateOverDataMap( isarrayofstringNamespace.isArrayOfString ), Testing.createBenchmarkOptions() )
                                     .add( 'isArrayOfString_1()', Testing.iterateOverDataMap( isarrayofstringNamespace.isArrayOfString_1 ), Testing.createBenchmarkOptions() )

const isNotArrayOfStringSuite = Benchmark.Suite( 'isarrayofstringNamespace.isNotArrayOfString', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfString()', Testing.iterateOverDataMap( isarrayofstringNamespace.isNotArrayOfString ), Testing.createBenchmarkOptions() )

export { isArrayOfStringSuite,isNotArrayOfStringSuite }

