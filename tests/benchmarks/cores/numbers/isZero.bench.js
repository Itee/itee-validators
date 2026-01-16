import * as isZeroNamespace from '../../../../sources/cores/numbers/isZero.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isZeroSuite = Benchmark.Suite( 'isZeroNamespace.isZero', Testing.createSuiteOptions() )
                                     .add( 'isZero()', Testing.iterateOverDataMap( isZeroNamespace.isZero ), Testing.createBenchmarkOptions() )

const isZeroPositiveSuite = Benchmark.Suite( 'isZeroNamespace.isZeroPositive', Testing.createSuiteOptions() )
                                     .add( 'isZeroPositive()', Testing.iterateOverDataMap( isZeroNamespace.isZeroPositive ), Testing.createBenchmarkOptions() )

const isZeroNegativeSuite = Benchmark.Suite( 'isZeroNamespace.isZeroNegative', Testing.createSuiteOptions() )
                                     .add( 'isZeroNegative()', Testing.iterateOverDataMap( isZeroNamespace.isZeroNegative ), Testing.createBenchmarkOptions() )

export { isZeroSuite,isZeroPositiveSuite,isZeroNegativeSuite }

