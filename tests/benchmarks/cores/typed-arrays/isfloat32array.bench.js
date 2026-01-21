import * as isfloat32arrayNamespace from '../../../../sources/cores/typed-arrays/isFloat32Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFloat32ArraySuite = Benchmark.Suite( 'isfloat32arrayNamespace.isFloat32Array', Testing.createSuiteOptions() )
                                     .add( 'isFloat32Array()', Testing.iterateOverDataMap( isfloat32arrayNamespace.isFloat32Array ), Testing.createBenchmarkOptions() )

const isNotFloat32ArraySuite = Benchmark.Suite( 'isfloat32arrayNamespace.isNotFloat32Array', Testing.createSuiteOptions() )
                                     .add( 'isNotFloat32Array()', Testing.iterateOverDataMap( isfloat32arrayNamespace.isNotFloat32Array ), Testing.createBenchmarkOptions() )

export { isFloat32ArraySuite,isNotFloat32ArraySuite }

