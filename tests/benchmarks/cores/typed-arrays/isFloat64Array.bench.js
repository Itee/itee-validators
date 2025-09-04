
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isFloat64ArrayNamespace from '../../../../sources/cores/typed-arrays/isFloat64Array.js'

const isFloat64ArraySuite = Benchmark.Suite( 'isFloat64ArrayNamespace.isFloat64Array', Testing.createSuiteOptions() )
                                     .add( 'isFloat64Array()', Testing.iterateOverDataMap( isFloat64ArrayNamespace.isFloat64Array ), Testing.createBenchmarkOptions() )

const isNotFloat64ArraySuite = Benchmark.Suite( 'isFloat64ArrayNamespace.isNotFloat64Array', Testing.createSuiteOptions() )
                                     .add( 'isNotFloat64Array()', Testing.iterateOverDataMap( isFloat64ArrayNamespace.isNotFloat64Array ), Testing.createBenchmarkOptions() )

export { isFloat64ArraySuite,isNotFloat64ArraySuite }

