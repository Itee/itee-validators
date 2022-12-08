
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isInfiniteNamespace from '../../../../sources/cores/numbers/isInfinite.js'

const isFiniteSuite = Benchmark.Suite( 'isInfiniteNamespace.isFinite', Testing.createSuiteOptions() )
                                     .add( 'isFinite()', Testing.iterateOverDataMap( isInfiniteNamespace.isFinite ), Testing.createBenchmarkOptions() )
const isInfiniteSuite = Benchmark.Suite( 'isInfiniteNamespace.isInfinite', Testing.createSuiteOptions() )
                                     .add( 'isInfinite()', Testing.iterateOverDataMap( isInfiniteNamespace.isInfinite ), Testing.createBenchmarkOptions() )
const isInfiniteNegativeSuite = Benchmark.Suite( 'isInfiniteNamespace.isInfiniteNegative', Testing.createSuiteOptions() )
                                     .add( 'isInfiniteNegative()', Testing.iterateOverDataMap( isInfiniteNamespace.isInfiniteNegative ), Testing.createBenchmarkOptions() )
const isInfinitePositiveSuite = Benchmark.Suite( 'isInfiniteNamespace.isInfinitePositive', Testing.createSuiteOptions() )
                                     .add( 'isInfinitePositive()', Testing.iterateOverDataMap( isInfiniteNamespace.isInfinitePositive ), Testing.createBenchmarkOptions() )

export { isFiniteSuite,isInfiniteSuite,isInfiniteNegativeSuite,isInfinitePositiveSuite }

