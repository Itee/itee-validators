import * as isUint8ClampedArrayNamespace from '../../../../sources/cores/typed-arrays/isUint8ClampedArray.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isUint8ClampedArraySuite = Benchmark.Suite( 'isUint8ClampedArrayNamespace.isUint8ClampedArray', Testing.createSuiteOptions() )
                                     .add( 'isUint8ClampedArray()', Testing.iterateOverDataMap( isUint8ClampedArrayNamespace.isUint8ClampedArray ), Testing.createBenchmarkOptions() )

const isNotUint8ClampedArraySuite = Benchmark.Suite( 'isUint8ClampedArrayNamespace.isNotUint8ClampedArray', Testing.createSuiteOptions() )
                                     .add( 'isNotUint8ClampedArray()', Testing.iterateOverDataMap( isUint8ClampedArrayNamespace.isNotUint8ClampedArray ), Testing.createBenchmarkOptions() )

export { isUint8ClampedArraySuite,isNotUint8ClampedArraySuite }

