import * as isUndefinedNamespace from '../../../../sources/cores/voids/isUndefined.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isUndefinedSuite = Benchmark.Suite( 'isUndefinedNamespace.isUndefined', Testing.createSuiteOptions() )
                                     .add( 'isUndefined()', Testing.iterateOverDataMap( isUndefinedNamespace.isUndefined ), Testing.createBenchmarkOptions() )

const isNotUndefinedSuite = Benchmark.Suite( 'isUndefinedNamespace.isNotUndefined', Testing.createSuiteOptions() )
                                     .add( 'isNotUndefined()', Testing.iterateOverDataMap( isUndefinedNamespace.isNotUndefined ), Testing.createBenchmarkOptions() )

export { isUndefinedSuite,isNotUndefinedSuite }

