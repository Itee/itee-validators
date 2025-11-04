import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isInt32ArrayNamespace from '../../../../sources/cores/typed-arrays/isInt32Array.js'

const isInt32ArraySuite = Benchmark.Suite( 'isInt32ArrayNamespace.isInt32Array', Testing.createSuiteOptions() )
                                     .add( 'isInt32Array()', Testing.iterateOverDataMap( isInt32ArrayNamespace.isInt32Array ), Testing.createBenchmarkOptions() )

const isNotInt32ArraySuite = Benchmark.Suite( 'isInt32ArrayNamespace.isNotInt32Array', Testing.createSuiteOptions() )
                                     .add( 'isNotInt32Array()', Testing.iterateOverDataMap( isInt32ArrayNamespace.isNotInt32Array ), Testing.createBenchmarkOptions() )

export { isInt32ArraySuite,isNotInt32ArraySuite }

