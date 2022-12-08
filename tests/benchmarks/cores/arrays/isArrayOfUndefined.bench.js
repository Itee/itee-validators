
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isArrayOfUndefinedNamespace from '../../../../sources/cores/arrays/isArrayOfUndefined.js'

const isArrayOfUndefinedSuite = Benchmark.Suite( 'isArrayOfUndefinedNamespace.isArrayOfUndefined', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfUndefined()', Testing.iterateOverDataMap( isArrayOfUndefinedNamespace.isArrayOfUndefined ), Testing.createBenchmarkOptions() )
const isNotArrayOfUndefinedSuite = Benchmark.Suite( 'isArrayOfUndefinedNamespace.isNotArrayOfUndefined', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfUndefined()', Testing.iterateOverDataMap( isArrayOfUndefinedNamespace.isNotArrayOfUndefined ), Testing.createBenchmarkOptions() )

export { isArrayOfUndefinedSuite,isNotArrayOfUndefinedSuite }

