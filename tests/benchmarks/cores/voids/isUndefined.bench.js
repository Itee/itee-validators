
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isUndefinedNamespace from '../../../../sources/cores/voids/isUndefined.js'

const isNotUndefinedSuite = Benchmark.Suite( 'isUndefinedNamespace.isNotUndefined', Testing.createSuiteOptions() )
                                     .add( 'isNotUndefined()', Testing.iterateOverDataMap( isUndefinedNamespace.isNotUndefined ), Testing.createBenchmarkOptions() )
const isUndefinedSuite = Benchmark.Suite( 'isUndefinedNamespace.isUndefined', Testing.createSuiteOptions() )
                                     .add( 'isUndefined()', Testing.iterateOverDataMap( isUndefinedNamespace.isUndefined ), Testing.createBenchmarkOptions() )

export { isNotUndefinedSuite,isUndefinedSuite }

