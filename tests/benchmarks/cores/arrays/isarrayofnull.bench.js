import * as isarrayofnullNamespace from '../../../../sources/cores/arrays/isArrayOfNull.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfNullSuite = Benchmark.Suite( 'isarrayofnullNamespace.isArrayOfNull', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfNull()', Testing.iterateOverDataMap( isarrayofnullNamespace.isArrayOfNull ), Testing.createBenchmarkOptions() )

const isNotArrayOfNullSuite = Benchmark.Suite( 'isarrayofnullNamespace.isNotArrayOfNull', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfNull()', Testing.iterateOverDataMap( isarrayofnullNamespace.isNotArrayOfNull ), Testing.createBenchmarkOptions() )

export { isArrayOfNullSuite,isNotArrayOfNullSuite }

