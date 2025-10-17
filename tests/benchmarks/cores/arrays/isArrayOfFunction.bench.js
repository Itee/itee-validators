
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isArrayOfFunctionNamespace from '../../../../sources/cores/arrays/isArrayOfFunction.js'

const isArrayOfFunctionSuite = Benchmark.Suite( 'isArrayOfFunctionNamespace.isArrayOfFunction', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfFunction()', Testing.iterateOverDataMap( isArrayOfFunctionNamespace.isArrayOfFunction ), Testing.createBenchmarkOptions() )

const isNotArrayOfFunctionSuite = Benchmark.Suite( 'isArrayOfFunctionNamespace.isNotArrayOfFunction', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfFunction()', Testing.iterateOverDataMap( isArrayOfFunctionNamespace.isNotArrayOfFunction ), Testing.createBenchmarkOptions() )

export { isArrayOfFunctionSuite,isNotArrayOfFunctionSuite }

