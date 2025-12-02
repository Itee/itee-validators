import * as isArrayOfFunctionNamespace from '../../../../sources/cores/arrays/isArrayOfFunction.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfFunctionSuite = Benchmark.Suite( 'isArrayOfFunctionNamespace.isArrayOfFunction', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfFunction()', Testing.iterateOverDataMap( isArrayOfFunctionNamespace.isArrayOfFunction ), Testing.createBenchmarkOptions() )

const isNotArrayOfFunctionSuite = Benchmark.Suite( 'isArrayOfFunctionNamespace.isNotArrayOfFunction', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfFunction()', Testing.iterateOverDataMap( isArrayOfFunctionNamespace.isNotArrayOfFunction ), Testing.createBenchmarkOptions() )

export { isArrayOfFunctionSuite,isNotArrayOfFunctionSuite }

