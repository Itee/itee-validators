
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isTrueNamespace from '../../../../sources/cores/booleans/isTrue.js'

const isFalseSuite = Benchmark.Suite( 'isTrueNamespace.isFalse', Testing.createSuiteOptions() )
                                     .add( 'isFalse()', Testing.iterateOverDataMap( isTrueNamespace.isFalse ), Testing.createBenchmarkOptions() )
const isTrueSuite = Benchmark.Suite( 'isTrueNamespace.isTrue', Testing.createSuiteOptions() )
                                     .add( 'isTrue()', Testing.iterateOverDataMap( isTrueNamespace.isTrue ), Testing.createBenchmarkOptions() )

export { isFalseSuite,isTrueSuite }

