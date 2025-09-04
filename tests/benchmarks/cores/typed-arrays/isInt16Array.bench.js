
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isInt16ArrayNamespace from '../../../../sources/cores/typed-arrays/isInt16Array.js'

const isInt16ArraySuite = Benchmark.Suite( 'isInt16ArrayNamespace.isInt16Array', Testing.createSuiteOptions() )
                                     .add( 'isInt16Array()', Testing.iterateOverDataMap( isInt16ArrayNamespace.isInt16Array ), Testing.createBenchmarkOptions() )

const isNotInt16ArraySuite = Benchmark.Suite( 'isInt16ArrayNamespace.isNotInt16Array', Testing.createSuiteOptions() )
                                     .add( 'isNotInt16Array()', Testing.iterateOverDataMap( isInt16ArrayNamespace.isNotInt16Array ), Testing.createBenchmarkOptions() )

export { isInt16ArraySuite,isNotInt16ArraySuite }

