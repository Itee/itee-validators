import * as istrueNamespace from '../../../../sources/cores/booleans/isTrue.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isTrueSuite = Benchmark.Suite( 'istrueNamespace.isTrue', Testing.createSuiteOptions() )
                                     .add( 'isTrue()', Testing.iterateOverDataMap( istrueNamespace.isTrue ), Testing.createBenchmarkOptions() )

const isFalseSuite = Benchmark.Suite( 'istrueNamespace.isFalse', Testing.createSuiteOptions() )
                                     .add( 'isFalse()', Testing.iterateOverDataMap( istrueNamespace.isFalse ), Testing.createBenchmarkOptions() )

export { isTrueSuite,isFalseSuite }

