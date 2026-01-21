import * as isinfiniteNamespace from '../../../../sources/cores/numbers/isInfinite.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isInfiniteNegativeSuite = Benchmark.Suite( 'isinfiniteNamespace.isInfiniteNegative', Testing.createSuiteOptions() )
                                     .add( 'isInfiniteNegative()', Testing.iterateOverDataMap( isinfiniteNamespace.isInfiniteNegative ), Testing.createBenchmarkOptions() )

const isInfinitePositiveSuite = Benchmark.Suite( 'isinfiniteNamespace.isInfinitePositive', Testing.createSuiteOptions() )
                                     .add( 'isInfinitePositive()', Testing.iterateOverDataMap( isinfiniteNamespace.isInfinitePositive ), Testing.createBenchmarkOptions() )

const isInfiniteSuite = Benchmark.Suite( 'isinfiniteNamespace.isInfinite', Testing.createSuiteOptions() )
                                     .add( 'isInfinite()', Testing.iterateOverDataMap( isinfiniteNamespace.isInfinite ), Testing.createBenchmarkOptions() )

const isFiniteSuite = Benchmark.Suite( 'isinfiniteNamespace.isFinite', Testing.createSuiteOptions() )
                                     .add( 'isFinite()', Testing.iterateOverDataMap( isinfiniteNamespace.isFinite ), Testing.createBenchmarkOptions() )

export { isInfiniteNegativeSuite,isInfinitePositiveSuite,isInfiniteSuite,isFiniteSuite }

