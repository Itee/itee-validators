import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isEmptyArrayNamespace from '../../../../sources/cores/arrays/isEmptyArray.js'

const isEmptyArraySuite = Benchmark.Suite( 'isEmptyArrayNamespace.isEmptyArray', Testing.createSuiteOptions() )
                                     .add( 'isEmptyArray()', Testing.iterateOverDataMap( isEmptyArrayNamespace.isEmptyArray ), Testing.createBenchmarkOptions() )

const isNotEmptyArraySuite = Benchmark.Suite( 'isEmptyArrayNamespace.isNotEmptyArray', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyArray()', Testing.iterateOverDataMap( isEmptyArrayNamespace.isNotEmptyArray ), Testing.createBenchmarkOptions() )

export { isEmptyArraySuite,isNotEmptyArraySuite }

