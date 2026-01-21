import * as isuint16arrayNamespace from '../../../../sources/cores/typed-arrays/isUint16Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isUint16ArraySuite = Benchmark.Suite( 'isuint16arrayNamespace.isUint16Array', Testing.createSuiteOptions() )
                                     .add( 'isUint16Array()', Testing.iterateOverDataMap( isuint16arrayNamespace.isUint16Array ), Testing.createBenchmarkOptions() )

const isNotUint16ArraySuite = Benchmark.Suite( 'isuint16arrayNamespace.isNotUint16Array', Testing.createSuiteOptions() )
                                     .add( 'isNotUint16Array()', Testing.iterateOverDataMap( isuint16arrayNamespace.isNotUint16Array ), Testing.createBenchmarkOptions() )

export { isUint16ArraySuite,isNotUint16ArraySuite }

