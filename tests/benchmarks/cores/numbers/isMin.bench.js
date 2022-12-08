
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isMinNamespace from '../../../../sources/cores/numbers/isMin.js'

const isMinNegativeSuite = Benchmark.Suite( 'isMinNamespace.isMinNegative', Testing.createSuiteOptions() )
                                     .add( 'isMinNegative()', Testing.iterateOverDataMap( isMinNamespace.isMinNegative ), Testing.createBenchmarkOptions() )
const isMinPositiveSuite = Benchmark.Suite( 'isMinNamespace.isMinPositive', Testing.createSuiteOptions() )
                                     .add( 'isMinPositive()', Testing.iterateOverDataMap( isMinNamespace.isMinPositive ), Testing.createBenchmarkOptions() )

export { isMinNegativeSuite,isMinPositiveSuite }

