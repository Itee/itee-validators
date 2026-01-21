import * as isbiguint64arrayNamespace from '../../../../sources/cores/typed-arrays/isBigUint64Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isBigUint64ArraySuite = Benchmark.Suite( 'isbiguint64arrayNamespace.isBigUint64Array', Testing.createSuiteOptions() )
                                     .add( 'isBigUint64Array()', Testing.iterateOverDataMap( isbiguint64arrayNamespace.isBigUint64Array ), Testing.createBenchmarkOptions() )

const isNotBigUint64ArraySuite = Benchmark.Suite( 'isbiguint64arrayNamespace.isNotBigUint64Array', Testing.createSuiteOptions() )
                                     .add( 'isNotBigUint64Array()', Testing.iterateOverDataMap( isbiguint64arrayNamespace.isNotBigUint64Array ), Testing.createBenchmarkOptions() )

export { isBigUint64ArraySuite,isNotBigUint64ArraySuite }

