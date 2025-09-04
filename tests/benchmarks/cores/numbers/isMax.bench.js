
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isMaxNamespace from '../../../../sources/cores/numbers/isMax.js'

const isMaxPositiveSuite = Benchmark.Suite( 'isMaxNamespace.isMaxPositive', Testing.createSuiteOptions() )
                                     .add( 'isMaxPositive()', Testing.iterateOverDataMap( isMaxNamespace.isMaxPositive ), Testing.createBenchmarkOptions() )

const isMaxNegativeSuite = Benchmark.Suite( 'isMaxNamespace.isMaxNegative', Testing.createSuiteOptions() )
                                     .add( 'isMaxNegative()', Testing.iterateOverDataMap( isMaxNamespace.isMaxNegative ), Testing.createBenchmarkOptions() )

export { isMaxPositiveSuite,isMaxNegativeSuite }

