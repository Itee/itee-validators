
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isNullNamespace from '../../../../sources/cores/voids/isNull.js'

const isNotNullSuite = Benchmark.Suite( 'isNullNamespace.isNotNull', Testing.createSuiteOptions() )
                                     .add( 'isNotNull()', Testing.iterateOverDataMap( isNullNamespace.isNotNull ), Testing.createBenchmarkOptions() )
const isNullSuite = Benchmark.Suite( 'isNullNamespace.isNull', Testing.createSuiteOptions() )
                                     .add( 'isNull()', Testing.iterateOverDataMap( isNullNamespace.isNull ), Testing.createBenchmarkOptions() )
                                     .add( 'isNull_0()', Testing.iterateOverDataMap( isNullNamespace.isNull_0 ), Testing.createBenchmarkOptions() )

export { isNotNullSuite,isNullSuite }

