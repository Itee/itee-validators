import * as isArrayOfUndefinedNamespace from '../../../../sources/cores/arrays/isArrayOfUndefined.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfUndefinedSuite = Benchmark.Suite( 'isArrayOfUndefinedNamespace.isArrayOfUndefined', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfUndefined()', Testing.iterateOverDataMap( isArrayOfUndefinedNamespace.isArrayOfUndefined ), Testing.createBenchmarkOptions() )

const isNotArrayOfUndefinedSuite = Benchmark.Suite( 'isArrayOfUndefinedNamespace.isNotArrayOfUndefined', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfUndefined()', Testing.iterateOverDataMap( isArrayOfUndefinedNamespace.isNotArrayOfUndefined ), Testing.createBenchmarkOptions() )

export { isArrayOfUndefinedSuite,isNotArrayOfUndefinedSuite }

