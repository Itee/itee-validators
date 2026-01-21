import * as isarrayofarrayNamespace from '../../../../sources/cores/arrays/isArrayOfArray.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfArraySuite = Benchmark.Suite( 'isarrayofarrayNamespace.isArrayOfArray', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfArray()', Testing.iterateOverDataMap( isarrayofarrayNamespace.isArrayOfArray ), Testing.createBenchmarkOptions() )

const isNotArrayOfArraySuite = Benchmark.Suite( 'isarrayofarrayNamespace.isNotArrayOfArray', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfArray()', Testing.iterateOverDataMap( isarrayofarrayNamespace.isNotArrayOfArray ), Testing.createBenchmarkOptions() )

export { isArrayOfArraySuite,isNotArrayOfArraySuite }

