import * as isArrayBufferNamespace from '../../../../sources/cores/typed-arrays/isArrayBuffer.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayBufferSuite = Benchmark.Suite( 'isArrayBufferNamespace.isArrayBuffer', Testing.createSuiteOptions() )
                                     .add( 'isArrayBuffer()', Testing.iterateOverDataMap( isArrayBufferNamespace.isArrayBuffer ), Testing.createBenchmarkOptions() )

const isNotArrayBufferSuite = Benchmark.Suite( 'isArrayBufferNamespace.isNotArrayBuffer', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayBuffer()', Testing.iterateOverDataMap( isArrayBufferNamespace.isNotArrayBuffer ), Testing.createBenchmarkOptions() )

export { isArrayBufferSuite,isNotArrayBufferSuite }

