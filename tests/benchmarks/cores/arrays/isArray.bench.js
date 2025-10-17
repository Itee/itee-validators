
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isArrayNamespace from '../../../../sources/cores/arrays/isArray.js'

const isArraySuite = Benchmark.Suite( 'isArrayNamespace.isArray', Testing.createSuiteOptions() )
                                     .add( 'isArray()', Testing.iterateOverDataMap( isArrayNamespace.isArray ), Testing.createBenchmarkOptions() )
                                     .add( 'isArray_0()', Testing.iterateOverDataMap( isArrayNamespace.isArray_0 ), Testing.createBenchmarkOptions() )

const isNotArraySuite = Benchmark.Suite( 'isArrayNamespace.isNotArray', Testing.createSuiteOptions() )
                                     .add( 'isNotArray()', Testing.iterateOverDataMap( isArrayNamespace.isNotArray ), Testing.createBenchmarkOptions() )
                                     .add( 'isNotArray_0()', Testing.iterateOverDataMap( isArrayNamespace.isNotArray_0 ), Testing.createBenchmarkOptions() )

export { isArraySuite,isNotArraySuite }

