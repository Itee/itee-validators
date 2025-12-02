import * as isDefinedNamespace from '../../../../sources/cores/voids/isDefined.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isDefinedSuite = Benchmark.Suite( 'isDefinedNamespace.isDefined', Testing.createSuiteOptions() )
                                     .add( 'isDefined()', Testing.iterateOverDataMap( isDefinedNamespace.isDefined ), Testing.createBenchmarkOptions() )

const isNotDefinedSuite = Benchmark.Suite( 'isDefinedNamespace.isNotDefined', Testing.createSuiteOptions() )
                                     .add( 'isNotDefined()', Testing.iterateOverDataMap( isDefinedNamespace.isNotDefined ), Testing.createBenchmarkOptions() )

export { isDefinedSuite,isNotDefinedSuite }

