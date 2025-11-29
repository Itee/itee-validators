import * as isTrueNamespace from '../../../../sources/cores/booleans/isTrue.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isTrueSuite = Benchmark.Suite( 'isTrueNamespace.isTrue', Testing.createSuiteOptions() )
                                     .add( 'isTrue()', Testing.iterateOverDataMap( isTrueNamespace.isTrue ), Testing.createBenchmarkOptions() )

const isFalseSuite = Benchmark.Suite( 'isTrueNamespace.isFalse', Testing.createSuiteOptions() )
                                     .add( 'isFalse()', Testing.iterateOverDataMap( isTrueNamespace.isFalse ), Testing.createBenchmarkOptions() )

export { isTrueSuite,isFalseSuite }

