import * as iszeroNamespace from '../../../../sources/cores/numbers/isZero.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isZeroSuite = Benchmark.Suite( 'iszeroNamespace.isZero', Testing.createSuiteOptions() )
                                     .add( 'isZero()', Testing.iterateOverDataMap( iszeroNamespace.isZero ), Testing.createBenchmarkOptions() )

const isZeroPositiveSuite = Benchmark.Suite( 'iszeroNamespace.isZeroPositive', Testing.createSuiteOptions() )
                                     .add( 'isZeroPositive()', Testing.iterateOverDataMap( iszeroNamespace.isZeroPositive ), Testing.createBenchmarkOptions() )

const isZeroNegativeSuite = Benchmark.Suite( 'iszeroNamespace.isZeroNegative', Testing.createSuiteOptions() )
                                     .add( 'isZeroNegative()', Testing.iterateOverDataMap( iszeroNamespace.isZeroNegative ), Testing.createBenchmarkOptions() )

export { isZeroSuite,isZeroPositiveSuite,isZeroNegativeSuite }

