import * as isUint32ArrayNamespace from '../../../../sources/cores/typed-arrays/isUint32Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isUint32ArraySuite = Benchmark.Suite( 'isUint32ArrayNamespace.isUint32Array', Testing.createSuiteOptions() )
                                     .add( 'isUint32Array()', Testing.iterateOverDataMap( isUint32ArrayNamespace.isUint32Array ), Testing.createBenchmarkOptions() )

const isNotUint32ArraySuite = Benchmark.Suite( 'isUint32ArrayNamespace.isNotUint32Array', Testing.createSuiteOptions() )
                                     .add( 'isNotUint32Array()', Testing.iterateOverDataMap( isUint32ArrayNamespace.isNotUint32Array ), Testing.createBenchmarkOptions() )

export { isUint32ArraySuite,isNotUint32ArraySuite }

