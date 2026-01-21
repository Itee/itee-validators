import * as isint8arrayNamespace from '../../../../sources/cores/typed-arrays/isInt8Array.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isInt8ArraySuite = Benchmark.Suite( 'isint8arrayNamespace.isInt8Array', Testing.createSuiteOptions() )
                                     .add( 'isInt8Array()', Testing.iterateOverDataMap( isint8arrayNamespace.isInt8Array ), Testing.createBenchmarkOptions() )

const isNotInt8ArraySuite = Benchmark.Suite( 'isint8arrayNamespace.isNotInt8Array', Testing.createSuiteOptions() )
                                     .add( 'isNotInt8Array()', Testing.iterateOverDataMap( isint8arrayNamespace.isNotInt8Array ), Testing.createBenchmarkOptions() )

export { isInt8ArraySuite,isNotInt8ArraySuite }

