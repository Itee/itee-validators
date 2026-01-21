import * as isarrayofnumberNamespace from '../../../../sources/cores/arrays/isArrayOfNumber.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfNumberSuite = Benchmark.Suite( 'isarrayofnumberNamespace.isArrayOfNumber', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfNumber()', Testing.iterateOverDataMap( isarrayofnumberNamespace.isArrayOfNumber ), Testing.createBenchmarkOptions() )

const isNotArrayOfNumberSuite = Benchmark.Suite( 'isarrayofnumberNamespace.isNotArrayOfNumber', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfNumber()', Testing.iterateOverDataMap( isarrayofnumberNamespace.isNotArrayOfNumber ), Testing.createBenchmarkOptions() )

export { isArrayOfNumberSuite,isNotArrayOfNumberSuite }

