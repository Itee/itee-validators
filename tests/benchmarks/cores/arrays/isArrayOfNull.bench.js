
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isArrayOfNullNamespace from '../../../../sources/cores/arrays/isArrayOfNull.js'

const isArrayOfNullSuite = Benchmark.Suite( 'isArrayOfNullNamespace.isArrayOfNull', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfNull()', Testing.iterateOverDataMap( isArrayOfNullNamespace.isArrayOfNull ), Testing.createBenchmarkOptions() )

const isNotArrayOfNullSuite = Benchmark.Suite( 'isArrayOfNullNamespace.isNotArrayOfNull', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfNull()', Testing.iterateOverDataMap( isArrayOfNullNamespace.isNotArrayOfNull ), Testing.createBenchmarkOptions() )

export { isArrayOfNullSuite,isNotArrayOfNullSuite }

