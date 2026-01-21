import * as isarrayofundefinedNamespace from '../../../../sources/cores/arrays/isArrayOfUndefined.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfUndefinedSuite = Benchmark.Suite( 'isarrayofundefinedNamespace.isArrayOfUndefined', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfUndefined()', Testing.iterateOverDataMap( isarrayofundefinedNamespace.isArrayOfUndefined ), Testing.createBenchmarkOptions() )

const isNotArrayOfUndefinedSuite = Benchmark.Suite( 'isarrayofundefinedNamespace.isNotArrayOfUndefined', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfUndefined()', Testing.iterateOverDataMap( isarrayofundefinedNamespace.isNotArrayOfUndefined ), Testing.createBenchmarkOptions() )

export { isArrayOfUndefinedSuite,isNotArrayOfUndefinedSuite }

