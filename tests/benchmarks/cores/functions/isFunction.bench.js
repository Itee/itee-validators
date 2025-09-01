
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isFunctionNamespace from '../../../../sources/cores/functions/isFunction.js'

const isFunctionSuite = Benchmark.Suite( 'isFunctionNamespace.isFunction', Testing.createSuiteOptions() )
                                     .add( 'isFunction()', Testing.iterateOverDataMap( isFunctionNamespace.isFunction ), Testing.createBenchmarkOptions() )

const isNotFunctionSuite = Benchmark.Suite( 'isFunctionNamespace.isNotFunction', Testing.createSuiteOptions() )
                                     .add( 'isNotFunction()', Testing.iterateOverDataMap( isFunctionNamespace.isNotFunction ), Testing.createBenchmarkOptions() )

export { isFunctionSuite,isNotFunctionSuite }

