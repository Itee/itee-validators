import * as isundefinedNamespace from '../../../../sources/cores/voids/isUndefined.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isUndefinedSuite = Benchmark.Suite( 'isundefinedNamespace.isUndefined', Testing.createSuiteOptions() )
                                     .add( 'isUndefined()', Testing.iterateOverDataMap( isundefinedNamespace.isUndefined ), Testing.createBenchmarkOptions() )

const isNotUndefinedSuite = Benchmark.Suite( 'isundefinedNamespace.isNotUndefined', Testing.createSuiteOptions() )
                                     .add( 'isNotUndefined()', Testing.iterateOverDataMap( isundefinedNamespace.isNotUndefined ), Testing.createBenchmarkOptions() )

export { isUndefinedSuite,isNotUndefinedSuite }

