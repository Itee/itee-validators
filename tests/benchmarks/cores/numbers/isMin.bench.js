
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isMinNamespace from '../../../../sources/cores/numbers/isMin.js'

const isMinPositiveSuite = Benchmark.Suite( 'isMinNamespace.isMinPositive', Testing.createSuiteOptions() )
                                     .add( 'isMinPositive()', Testing.iterateOverDataMap( isMinNamespace.isMinPositive ), Testing.createBenchmarkOptions() )

const isMinNegativeSuite = Benchmark.Suite( 'isMinNamespace.isMinNegative', Testing.createSuiteOptions() )
                                     .add( 'isMinNegative()', Testing.iterateOverDataMap( isMinNamespace.isMinNegative ), Testing.createBenchmarkOptions() )

export { isMinPositiveSuite,isMinNegativeSuite }

