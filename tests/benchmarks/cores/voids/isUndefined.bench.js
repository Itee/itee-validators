
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isUndefinedNamespace from '../../../../sources/cores/voids/isUndefined.js'

const isUndefinedSuite = Benchmark.Suite( 'isUndefinedNamespace.isUndefined', Testing.createSuiteOptions() )
                                     .add( 'isUndefined()', Testing.iterateOverDataMap( isUndefinedNamespace.isUndefined ), Testing.createBenchmarkOptions() )

const isNotUndefinedSuite = Benchmark.Suite( 'isUndefinedNamespace.isNotUndefined', Testing.createSuiteOptions() )
                                     .add( 'isNotUndefined()', Testing.iterateOverDataMap( isUndefinedNamespace.isNotUndefined ), Testing.createBenchmarkOptions() )

export { isUndefinedSuite,isNotUndefinedSuite }

