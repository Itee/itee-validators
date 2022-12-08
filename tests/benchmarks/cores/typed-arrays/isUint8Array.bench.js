
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isUint8ArrayNamespace from '../../../../sources/cores/typed-arrays/isUint8Array.js'

const isNotUint8ArraySuite = Benchmark.Suite( 'isUint8ArrayNamespace.isNotUint8Array', Testing.createSuiteOptions() )
                                     .add( 'isNotUint8Array()', Testing.iterateOverDataMap( isUint8ArrayNamespace.isNotUint8Array ), Testing.createBenchmarkOptions() )
const isUint8ArraySuite = Benchmark.Suite( 'isUint8ArrayNamespace.isUint8Array', Testing.createSuiteOptions() )
                                     .add( 'isUint8Array()', Testing.iterateOverDataMap( isUint8ArrayNamespace.isUint8Array ), Testing.createBenchmarkOptions() )

export { isNotUint8ArraySuite,isUint8ArraySuite }

