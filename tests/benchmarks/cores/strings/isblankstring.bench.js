import * as isblankstringNamespace from '../../../../sources/cores/strings/isBlankString.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isBlankStringSuite = Benchmark.Suite( 'isblankstringNamespace.isBlankString', Testing.createSuiteOptions() )
                                     .add( 'isBlankString()', Testing.iterateOverDataMap( isblankstringNamespace.isBlankString ), Testing.createBenchmarkOptions() )

const isNotBlankStringSuite = Benchmark.Suite( 'isblankstringNamespace.isNotBlankString', Testing.createSuiteOptions() )
                                     .add( 'isNotBlankString()', Testing.iterateOverDataMap( isblankstringNamespace.isNotBlankString ), Testing.createBenchmarkOptions() )

export { isBlankStringSuite,isNotBlankStringSuite }

