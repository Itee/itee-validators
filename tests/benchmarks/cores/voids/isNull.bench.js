import * as isNullNamespace from '../../../../sources/cores/voids/isNull.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isNullSuite = Benchmark.Suite( 'isNullNamespace.isNull', Testing.createSuiteOptions() )
                                     .add( 'isNull()', Testing.iterateOverDataMap( isNullNamespace.isNull ), Testing.createBenchmarkOptions() )
                                     .add( 'isNull_0()', Testing.iterateOverDataMap( isNullNamespace.isNull_0 ), Testing.createBenchmarkOptions() )

const isNotNullSuite = Benchmark.Suite( 'isNullNamespace.isNotNull', Testing.createSuiteOptions() )
                                     .add( 'isNotNull()', Testing.iterateOverDataMap( isNullNamespace.isNotNull ), Testing.createBenchmarkOptions() )

export { isNullSuite,isNotNullSuite }

