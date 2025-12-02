import * as isArrayOfNullNamespace from '../../../../sources/cores/arrays/isArrayOfNull.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfNullSuite = Benchmark.Suite( 'isArrayOfNullNamespace.isArrayOfNull', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfNull()', Testing.iterateOverDataMap( isArrayOfNullNamespace.isArrayOfNull ), Testing.createBenchmarkOptions() )

const isNotArrayOfNullSuite = Benchmark.Suite( 'isArrayOfNullNamespace.isNotArrayOfNull', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfNull()', Testing.iterateOverDataMap( isArrayOfNullNamespace.isNotArrayOfNull ), Testing.createBenchmarkOptions() )

export { isArrayOfNullSuite,isNotArrayOfNullSuite }

