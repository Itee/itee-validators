import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isTrueNamespace from '../../../../sources/cores/booleans/isTrue.js'

const isTrueSuite = Benchmark.Suite( 'isTrueNamespace.isTrue', Testing.createSuiteOptions() )
                                     .add( 'isTrue()', Testing.iterateOverDataMap( isTrueNamespace.isTrue ), Testing.createBenchmarkOptions() )

const isFalseSuite = Benchmark.Suite( 'isTrueNamespace.isFalse', Testing.createSuiteOptions() )
                                     .add( 'isFalse()', Testing.iterateOverDataMap( isTrueNamespace.isFalse ), Testing.createBenchmarkOptions() )

export { isTrueSuite,isFalseSuite }

