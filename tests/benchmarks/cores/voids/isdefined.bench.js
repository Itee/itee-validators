import * as isdefinedNamespace from '../../../../sources/cores/voids/isDefined.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isDefinedSuite = Benchmark.Suite( 'isdefinedNamespace.isDefined', Testing.createSuiteOptions() )
                                     .add( 'isDefined()', Testing.iterateOverDataMap( isdefinedNamespace.isDefined ), Testing.createBenchmarkOptions() )

const isNotDefinedSuite = Benchmark.Suite( 'isdefinedNamespace.isNotDefined', Testing.createSuiteOptions() )
                                     .add( 'isNotDefined()', Testing.iterateOverDataMap( isdefinedNamespace.isNotDefined ), Testing.createBenchmarkOptions() )

export { isDefinedSuite,isNotDefinedSuite }

