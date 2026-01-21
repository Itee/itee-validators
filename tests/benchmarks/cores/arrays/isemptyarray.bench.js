import * as isemptyarrayNamespace from '../../../../sources/cores/arrays/isEmptyArray.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyArraySuite = Benchmark.Suite( 'isemptyarrayNamespace.isEmptyArray', Testing.createSuiteOptions() )
                                     .add( 'isEmptyArray()', Testing.iterateOverDataMap( isemptyarrayNamespace.isEmptyArray ), Testing.createBenchmarkOptions() )

const isNotEmptyArraySuite = Benchmark.Suite( 'isemptyarrayNamespace.isNotEmptyArray', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyArray()', Testing.iterateOverDataMap( isemptyarrayNamespace.isNotEmptyArray ), Testing.createBenchmarkOptions() )

export { isEmptyArraySuite,isNotEmptyArraySuite }

