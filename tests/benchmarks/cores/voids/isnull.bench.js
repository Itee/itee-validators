import * as isnullNamespace from '../../../../sources/cores/voids/isNull.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isNullSuite = Benchmark.Suite( 'isnullNamespace.isNull', Testing.createSuiteOptions() )
                                     .add( 'isNull()', Testing.iterateOverDataMap( isnullNamespace.isNull ), Testing.createBenchmarkOptions() )
                                     .add( 'isNull_0()', Testing.iterateOverDataMap( isnullNamespace.isNull_0 ), Testing.createBenchmarkOptions() )

const isNotNullSuite = Benchmark.Suite( 'isnullNamespace.isNotNull', Testing.createSuiteOptions() )
                                     .add( 'isNotNull()', Testing.iterateOverDataMap( isnullNamespace.isNotNull ), Testing.createBenchmarkOptions() )

export { isNullSuite,isNotNullSuite }

