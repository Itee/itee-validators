
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isArrayOfBooleanNamespace from '../../../../sources/cores/arrays/isArrayOfBoolean.js'

const isArrayOfBooleanSuite = Benchmark.Suite( 'isArrayOfBooleanNamespace.isArrayOfBoolean', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfBoolean()', Testing.iterateOverDataMap( isArrayOfBooleanNamespace.isArrayOfBoolean ), Testing.createBenchmarkOptions() )

const isNotArrayOfBooleanSuite = Benchmark.Suite( 'isArrayOfBooleanNamespace.isNotArrayOfBoolean', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfBoolean()', Testing.iterateOverDataMap( isArrayOfBooleanNamespace.isNotArrayOfBoolean ), Testing.createBenchmarkOptions() )

export { isArrayOfBooleanSuite,isNotArrayOfBooleanSuite }

