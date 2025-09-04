
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isArrayBufferNamespace from '../../../../sources/cores/typed-arrays/isArrayBuffer.js'

const isArrayBufferSuite = Benchmark.Suite( 'isArrayBufferNamespace.isArrayBuffer', Testing.createSuiteOptions() )
                                     .add( 'isArrayBuffer()', Testing.iterateOverDataMap( isArrayBufferNamespace.isArrayBuffer ), Testing.createBenchmarkOptions() )

const isNotArrayBufferSuite = Benchmark.Suite( 'isArrayBufferNamespace.isNotArrayBuffer', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayBuffer()', Testing.iterateOverDataMap( isArrayBufferNamespace.isNotArrayBuffer ), Testing.createBenchmarkOptions() )

export { isArrayBufferSuite,isNotArrayBufferSuite }

