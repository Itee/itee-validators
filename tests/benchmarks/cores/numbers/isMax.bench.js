import * as isMaxNamespace from '../../../../sources/cores/numbers/isMax.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isMaxPositiveSuite = Benchmark.Suite( 'isMaxNamespace.isMaxPositive', Testing.createSuiteOptions() )
                                     .add( 'isMaxPositive()', Testing.iterateOverDataMap( isMaxNamespace.isMaxPositive ), Testing.createBenchmarkOptions() )

const isMaxNegativeSuite = Benchmark.Suite( 'isMaxNamespace.isMaxNegative', Testing.createSuiteOptions() )
                                     .add( 'isMaxNegative()', Testing.iterateOverDataMap( isMaxNamespace.isMaxNegative ), Testing.createBenchmarkOptions() )

export { isMaxPositiveSuite,isMaxNegativeSuite }

