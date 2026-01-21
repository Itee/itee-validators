import * as isemptyNamespace from '../../../../sources/cores/voids/isEmpty.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptySuite = Benchmark.Suite( 'isemptyNamespace.isEmpty', Testing.createSuiteOptions() )
                                     .add( 'isEmpty()', Testing.iterateOverDataMap( isemptyNamespace.isEmpty ), Testing.createBenchmarkOptions() )

const isNotEmptySuite = Benchmark.Suite( 'isemptyNamespace.isNotEmpty', Testing.createSuiteOptions() )
                                     .add( 'isNotEmpty()', Testing.iterateOverDataMap( isemptyNamespace.isNotEmpty ), Testing.createBenchmarkOptions() )

export { isEmptySuite,isNotEmptySuite }

