import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isArrayOfArrayNamespace from '../../../../sources/cores/arrays/isArrayOfArray.js'

const isArrayOfArraySuite = Benchmark.Suite( 'isArrayOfArrayNamespace.isArrayOfArray', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfArray()', Testing.iterateOverDataMap( isArrayOfArrayNamespace.isArrayOfArray ), Testing.createBenchmarkOptions() )

const isNotArrayOfArraySuite = Benchmark.Suite( 'isArrayOfArrayNamespace.isNotArrayOfArray', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfArray()', Testing.iterateOverDataMap( isArrayOfArrayNamespace.isNotArrayOfArray ), Testing.createBenchmarkOptions() )

export { isArrayOfArraySuite,isNotArrayOfArraySuite }

