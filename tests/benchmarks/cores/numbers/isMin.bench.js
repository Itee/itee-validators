import * as isMinNamespace from '../../../../sources/cores/numbers/isMin.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isMinPositiveSuite = Benchmark.Suite( 'isMinNamespace.isMinPositive', Testing.createSuiteOptions() )
                                     .add( 'isMinPositive()', Testing.iterateOverDataMap( isMinNamespace.isMinPositive ), Testing.createBenchmarkOptions() )

const isMinNegativeSuite = Benchmark.Suite( 'isMinNamespace.isMinNegative', Testing.createSuiteOptions() )
                                     .add( 'isMinNegative()', Testing.iterateOverDataMap( isMinNamespace.isMinNegative ), Testing.createBenchmarkOptions() )

export { isMinPositiveSuite,isMinNegativeSuite }

