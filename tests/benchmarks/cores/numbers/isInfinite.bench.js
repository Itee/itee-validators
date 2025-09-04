
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isInfiniteNamespace from '../../../../sources/cores/numbers/isInfinite.js'

const isInfiniteSuite = Benchmark.Suite( 'isInfiniteNamespace.isInfinite', Testing.createSuiteOptions() )
                                     .add( 'isInfinite()', Testing.iterateOverDataMap( isInfiniteNamespace.isInfinite ), Testing.createBenchmarkOptions() )

const isInfiniteNegativeSuite = Benchmark.Suite( 'isInfiniteNamespace.isInfiniteNegative', Testing.createSuiteOptions() )
                                     .add( 'isInfiniteNegative()', Testing.iterateOverDataMap( isInfiniteNamespace.isInfiniteNegative ), Testing.createBenchmarkOptions() )

const isInfinitePositiveSuite = Benchmark.Suite( 'isInfiniteNamespace.isInfinitePositive', Testing.createSuiteOptions() )
                                     .add( 'isInfinitePositive()', Testing.iterateOverDataMap( isInfiniteNamespace.isInfinitePositive ), Testing.createBenchmarkOptions() )

const isFiniteSuite = Benchmark.Suite( 'isInfiniteNamespace.isFinite', Testing.createSuiteOptions() )
                                     .add( 'isFinite()', Testing.iterateOverDataMap( isInfiniteNamespace.isFinite ), Testing.createBenchmarkOptions() )

export { isInfiniteSuite,isInfiniteNegativeSuite,isInfinitePositiveSuite,isFiniteSuite }

