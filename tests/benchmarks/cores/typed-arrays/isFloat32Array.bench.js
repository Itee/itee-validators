
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isFloat32ArrayNamespace from '../../../../sources/cores/typed-arrays/isFloat32Array.js'

const isFloat32ArraySuite = Benchmark.Suite( 'isFloat32ArrayNamespace.isFloat32Array', Testing.createSuiteOptions() )
                                     .add( 'isFloat32Array()', Testing.iterateOverDataMap( isFloat32ArrayNamespace.isFloat32Array ), Testing.createBenchmarkOptions() )

const isNotFloat32ArraySuite = Benchmark.Suite( 'isFloat32ArrayNamespace.isNotFloat32Array', Testing.createSuiteOptions() )
                                     .add( 'isNotFloat32Array()', Testing.iterateOverDataMap( isFloat32ArrayNamespace.isNotFloat32Array ), Testing.createBenchmarkOptions() )

export { isFloat32ArraySuite,isNotFloat32ArraySuite }

