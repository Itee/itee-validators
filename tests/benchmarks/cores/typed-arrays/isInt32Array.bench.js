import * as isInt32ArrayNamespace from '../../../../sources/cores/typed-arrays/isInt32Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isInt32ArraySuite = Benchmark.Suite( 'isInt32ArrayNamespace.isInt32Array', Testing.createSuiteOptions() )
                                     .add( 'isInt32Array()', Testing.iterateOverDataMap( isInt32ArrayNamespace.isInt32Array ), Testing.createBenchmarkOptions() )

const isNotInt32ArraySuite = Benchmark.Suite( 'isInt32ArrayNamespace.isNotInt32Array', Testing.createSuiteOptions() )
                                     .add( 'isNotInt32Array()', Testing.iterateOverDataMap( isInt32ArrayNamespace.isNotInt32Array ), Testing.createBenchmarkOptions() )

export { isInt32ArraySuite,isNotInt32ArraySuite }

