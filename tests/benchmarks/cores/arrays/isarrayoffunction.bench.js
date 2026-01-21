import * as isarrayoffunctionNamespace from '../../../../sources/cores/arrays/isArrayOfFunction.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfFunctionSuite = Benchmark.Suite( 'isarrayoffunctionNamespace.isArrayOfFunction', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfFunction()', Testing.iterateOverDataMap( isarrayoffunctionNamespace.isArrayOfFunction ), Testing.createBenchmarkOptions() )

const isNotArrayOfFunctionSuite = Benchmark.Suite( 'isarrayoffunctionNamespace.isNotArrayOfFunction', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfFunction()', Testing.iterateOverDataMap( isarrayoffunctionNamespace.isNotArrayOfFunction ), Testing.createBenchmarkOptions() )

export { isArrayOfFunctionSuite,isNotArrayOfFunctionSuite }

