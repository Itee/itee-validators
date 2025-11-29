import * as isInt8ArrayNamespace from '../../../../sources/cores/typed-arrays/isInt8Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isInt8ArraySuite = Benchmark.Suite( 'isInt8ArrayNamespace.isInt8Array', Testing.createSuiteOptions() )
                                     .add( 'isInt8Array()', Testing.iterateOverDataMap( isInt8ArrayNamespace.isInt8Array ), Testing.createBenchmarkOptions() )

const isNotInt8ArraySuite = Benchmark.Suite( 'isInt8ArrayNamespace.isNotInt8Array', Testing.createSuiteOptions() )
                                     .add( 'isNotInt8Array()', Testing.iterateOverDataMap( isInt8ArrayNamespace.isNotInt8Array ), Testing.createBenchmarkOptions() )

export { isInt8ArraySuite,isNotInt8ArraySuite }

