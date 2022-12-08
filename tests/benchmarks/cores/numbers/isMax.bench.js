
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isMaxNamespace from '../../../../sources/cores/numbers/isMax.js'

const isMaxNegativeSuite = Benchmark.Suite( 'isMaxNamespace.isMaxNegative', Testing.createSuiteOptions() )
                                     .add( 'isMaxNegative()', Testing.iterateOverDataMap( isMaxNamespace.isMaxNegative ), Testing.createBenchmarkOptions() )
const isMaxPositiveSuite = Benchmark.Suite( 'isMaxNamespace.isMaxPositive', Testing.createSuiteOptions() )
                                     .add( 'isMaxPositive()', Testing.iterateOverDataMap( isMaxNamespace.isMaxPositive ), Testing.createBenchmarkOptions() )

export { isMaxNegativeSuite,isMaxPositiveSuite }

