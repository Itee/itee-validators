
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isUint8ClampedArrayNamespace from '../../../../sources/cores/typed-arrays/isUint8ClampedArray.js'

const isNotUint8ClampedArraySuite = Benchmark.Suite( 'isUint8ClampedArrayNamespace.isNotUint8ClampedArray', Testing.createSuiteOptions() )
                                     .add( 'isNotUint8ClampedArray()', Testing.iterateOverDataMap( isUint8ClampedArrayNamespace.isNotUint8ClampedArray ), Testing.createBenchmarkOptions() )
const isUint8ClampedArraySuite = Benchmark.Suite( 'isUint8ClampedArrayNamespace.isUint8ClampedArray', Testing.createSuiteOptions() )
                                     .add( 'isUint8ClampedArray()', Testing.iterateOverDataMap( isUint8ClampedArrayNamespace.isUint8ClampedArray ), Testing.createBenchmarkOptions() )

export { isNotUint8ClampedArraySuite,isUint8ClampedArraySuite }

