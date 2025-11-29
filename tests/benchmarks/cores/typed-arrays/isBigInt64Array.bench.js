import * as isBigInt64ArrayNamespace from '../../../../sources/cores/typed-arrays/isBigInt64Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isBigInt64ArraySuite = Benchmark.Suite( 'isBigInt64ArrayNamespace.isBigInt64Array', Testing.createSuiteOptions() )
                                     .add( 'isBigInt64Array()', Testing.iterateOverDataMap( isBigInt64ArrayNamespace.isBigInt64Array ), Testing.createBenchmarkOptions() )

const isNotBigInt64ArraySuite = Benchmark.Suite( 'isBigInt64ArrayNamespace.isNotBigInt64Array', Testing.createSuiteOptions() )
                                     .add( 'isNotBigInt64Array()', Testing.iterateOverDataMap( isBigInt64ArrayNamespace.isNotBigInt64Array ), Testing.createBenchmarkOptions() )

export { isBigInt64ArraySuite,isNotBigInt64ArraySuite }

