
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isUint32ArrayNamespace from '../../../../sources/cores/typed-arrays/isUint32Array.js'

const isUint32ArraySuite = Benchmark.Suite( 'isUint32ArrayNamespace.isUint32Array', Testing.createSuiteOptions() )
                                     .add( 'isUint32Array()', Testing.iterateOverDataMap( isUint32ArrayNamespace.isUint32Array ), Testing.createBenchmarkOptions() )

const isNotUint32ArraySuite = Benchmark.Suite( 'isUint32ArrayNamespace.isNotUint32Array', Testing.createSuiteOptions() )
                                     .add( 'isNotUint32Array()', Testing.iterateOverDataMap( isUint32ArrayNamespace.isNotUint32Array ), Testing.createBenchmarkOptions() )

export { isUint32ArraySuite,isNotUint32ArraySuite }

