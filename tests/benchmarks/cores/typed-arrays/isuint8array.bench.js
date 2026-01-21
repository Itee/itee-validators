import * as isuint8arrayNamespace from '../../../../sources/cores/typed-arrays/isUint8Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isUint8ArraySuite = Benchmark.Suite( 'isuint8arrayNamespace.isUint8Array', Testing.createSuiteOptions() )
                                     .add( 'isUint8Array()', Testing.iterateOverDataMap( isuint8arrayNamespace.isUint8Array ), Testing.createBenchmarkOptions() )

const isNotUint8ArraySuite = Benchmark.Suite( 'isuint8arrayNamespace.isNotUint8Array', Testing.createSuiteOptions() )
                                     .add( 'isNotUint8Array()', Testing.iterateOverDataMap( isuint8arrayNamespace.isNotUint8Array ), Testing.createBenchmarkOptions() )

export { isUint8ArraySuite,isNotUint8ArraySuite }

