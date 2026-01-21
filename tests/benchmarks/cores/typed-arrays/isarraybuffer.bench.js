import * as isarraybufferNamespace from '../../../../sources/cores/typed-arrays/isArrayBuffer.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayBufferSuite = Benchmark.Suite( 'isarraybufferNamespace.isArrayBuffer', Testing.createSuiteOptions() )
                                     .add( 'isArrayBuffer()', Testing.iterateOverDataMap( isarraybufferNamespace.isArrayBuffer ), Testing.createBenchmarkOptions() )

const isNotArrayBufferSuite = Benchmark.Suite( 'isarraybufferNamespace.isNotArrayBuffer', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayBuffer()', Testing.iterateOverDataMap( isarraybufferNamespace.isNotArrayBuffer ), Testing.createBenchmarkOptions() )

export { isArrayBufferSuite,isNotArrayBufferSuite }

