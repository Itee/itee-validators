
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isZeroNamespace from '../../../../sources/cores/numbers/isZero.js'

const isZeroSuite = Benchmark.Suite( 'isZeroNamespace.isZero', Testing.createSuiteOptions() )
                                     .add( 'isZero()', Testing.iterateOverDataMap( isZeroNamespace.isZero ), Testing.createBenchmarkOptions() )
const isZeroNegativeSuite = Benchmark.Suite( 'isZeroNamespace.isZeroNegative', Testing.createSuiteOptions() )
                                     .add( 'isZeroNegative()', Testing.iterateOverDataMap( isZeroNamespace.isZeroNegative ), Testing.createBenchmarkOptions() )
const isZeroPositiveSuite = Benchmark.Suite( 'isZeroNamespace.isZeroPositive', Testing.createSuiteOptions() )
                                     .add( 'isZeroPositive()', Testing.iterateOverDataMap( isZeroNamespace.isZeroPositive ), Testing.createBenchmarkOptions() )

export { isZeroSuite,isZeroNegativeSuite,isZeroPositiveSuite }

