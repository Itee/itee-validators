import * as isarrayofbooleanNamespace from '../../../../sources/cores/arrays/isArrayOfBoolean.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfBooleanSuite = Benchmark.Suite( 'isarrayofbooleanNamespace.isArrayOfBoolean', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfBoolean()', Testing.iterateOverDataMap( isarrayofbooleanNamespace.isArrayOfBoolean ), Testing.createBenchmarkOptions() )

const isNotArrayOfBooleanSuite = Benchmark.Suite( 'isarrayofbooleanNamespace.isNotArrayOfBoolean', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfBoolean()', Testing.iterateOverDataMap( isarrayofbooleanNamespace.isNotArrayOfBoolean ), Testing.createBenchmarkOptions() )

export { isArrayOfBooleanSuite,isNotArrayOfBooleanSuite }

