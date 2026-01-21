import * as isuint32arrayNamespace from '../../../../sources/cores/typed-arrays/isUint32Array.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isUint32ArraySuite = Benchmark.Suite( 'isuint32arrayNamespace.isUint32Array', Testing.createSuiteOptions() )
                                     .add( 'isUint32Array()', Testing.iterateOverDataMap( isuint32arrayNamespace.isUint32Array ), Testing.createBenchmarkOptions() )

const isNotUint32ArraySuite = Benchmark.Suite( 'isuint32arrayNamespace.isNotUint32Array', Testing.createSuiteOptions() )
                                     .add( 'isNotUint32Array()', Testing.iterateOverDataMap( isuint32arrayNamespace.isNotUint32Array ), Testing.createBenchmarkOptions() )

export { isUint32ArraySuite,isNotUint32ArraySuite }

