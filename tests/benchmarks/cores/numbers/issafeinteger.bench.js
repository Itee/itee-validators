import * as issafeintegerNamespace from '../../../../sources/cores/numbers/isSafeInteger.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isMaxSafeIntegerSuite = Benchmark.Suite( 'issafeintegerNamespace.isMaxSafeInteger', Testing.createSuiteOptions() )
                                     .add( 'isMaxSafeInteger()', Testing.iterateOverDataMap( issafeintegerNamespace.isMaxSafeInteger ), Testing.createBenchmarkOptions() )

const isMinSafeIntegerSuite = Benchmark.Suite( 'issafeintegerNamespace.isMinSafeInteger', Testing.createSuiteOptions() )
                                     .add( 'isMinSafeInteger()', Testing.iterateOverDataMap( issafeintegerNamespace.isMinSafeInteger ), Testing.createBenchmarkOptions() )

export { isMaxSafeIntegerSuite,isMinSafeIntegerSuite }

