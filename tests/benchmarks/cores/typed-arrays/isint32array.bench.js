import * as isint32arrayNamespace from '../../../../sources/cores/typed-arrays/isInt32Array.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isInt32ArraySuite = Benchmark.Suite( 'isint32arrayNamespace.isInt32Array', Testing.createSuiteOptions() )
                                     .add( 'isInt32Array()', Testing.iterateOverDataMap( isint32arrayNamespace.isInt32Array ), Testing.createBenchmarkOptions() )

const isNotInt32ArraySuite = Benchmark.Suite( 'isint32arrayNamespace.isNotInt32Array', Testing.createSuiteOptions() )
                                     .add( 'isNotInt32Array()', Testing.iterateOverDataMap( isint32arrayNamespace.isNotInt32Array ), Testing.createBenchmarkOptions() )

export { isInt32ArraySuite,isNotInt32ArraySuite }

