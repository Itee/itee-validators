import * as ismaxNamespace from '../../../../sources/cores/numbers/isMax.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isMaxPositiveSuite = Benchmark.Suite( 'ismaxNamespace.isMaxPositive', Testing.createSuiteOptions() )
                                     .add( 'isMaxPositive()', Testing.iterateOverDataMap( ismaxNamespace.isMaxPositive ), Testing.createBenchmarkOptions() )

const isMaxNegativeSuite = Benchmark.Suite( 'ismaxNamespace.isMaxNegative', Testing.createSuiteOptions() )
                                     .add( 'isMaxNegative()', Testing.iterateOverDataMap( ismaxNamespace.isMaxNegative ), Testing.createBenchmarkOptions() )

export { isMaxPositiveSuite,isMaxNegativeSuite }

