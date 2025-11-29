import * as isUint8ArrayNamespace from '../../../../sources/cores/typed-arrays/isUint8Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isUint8ArraySuite = Benchmark.Suite( 'isUint8ArrayNamespace.isUint8Array', Testing.createSuiteOptions() )
                                     .add( 'isUint8Array()', Testing.iterateOverDataMap( isUint8ArrayNamespace.isUint8Array ), Testing.createBenchmarkOptions() )

const isNotUint8ArraySuite = Benchmark.Suite( 'isUint8ArrayNamespace.isNotUint8Array', Testing.createSuiteOptions() )
                                     .add( 'isNotUint8Array()', Testing.iterateOverDataMap( isUint8ArrayNamespace.isNotUint8Array ), Testing.createBenchmarkOptions() )

export { isUint8ArraySuite,isNotUint8ArraySuite }

