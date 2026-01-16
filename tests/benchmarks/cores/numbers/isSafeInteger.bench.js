import * as isSafeIntegerNamespace from '../../../../sources/cores/numbers/isSafeInteger.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isMaxSafeIntegerSuite = Benchmark.Suite( 'isSafeIntegerNamespace.isMaxSafeInteger', Testing.createSuiteOptions() )
                                     .add( 'isMaxSafeInteger()', Testing.iterateOverDataMap( isSafeIntegerNamespace.isMaxSafeInteger ), Testing.createBenchmarkOptions() )

const isMinSafeIntegerSuite = Benchmark.Suite( 'isSafeIntegerNamespace.isMinSafeInteger', Testing.createSuiteOptions() )
                                     .add( 'isMinSafeInteger()', Testing.iterateOverDataMap( isSafeIntegerNamespace.isMinSafeInteger ), Testing.createBenchmarkOptions() )

export { isMaxSafeIntegerSuite,isMinSafeIntegerSuite }

