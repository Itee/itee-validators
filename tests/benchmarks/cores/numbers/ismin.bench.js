import * as isminNamespace from '../../../../sources/cores/numbers/isMin.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isMinPositiveSuite = Benchmark.Suite( 'isminNamespace.isMinPositive', Testing.createSuiteOptions() )
                                     .add( 'isMinPositive()', Testing.iterateOverDataMap( isminNamespace.isMinPositive ), Testing.createBenchmarkOptions() )

const isMinNegativeSuite = Benchmark.Suite( 'isminNamespace.isMinNegative', Testing.createSuiteOptions() )
                                     .add( 'isMinNegative()', Testing.iterateOverDataMap( isminNamespace.isMinNegative ), Testing.createBenchmarkOptions() )

export { isMinPositiveSuite,isMinNegativeSuite }

