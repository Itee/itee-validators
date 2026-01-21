import * as iseventtargetNamespace from '../../../sources/dom/isEventTarget.js'
import { getBenchmarkPackage } from '../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEventTargetSuite = Benchmark.Suite( 'iseventtargetNamespace.isEventTarget', Testing.createSuiteOptions() )
                                     .add( 'isEventTarget()', Testing.iterateOverDataMap( iseventtargetNamespace.isEventTarget ), Testing.createBenchmarkOptions() )

const isNotEventTargetSuite = Benchmark.Suite( 'iseventtargetNamespace.isNotEventTarget', Testing.createSuiteOptions() )
                                     .add( 'isNotEventTarget()', Testing.iterateOverDataMap( iseventtargetNamespace.isNotEventTarget ), Testing.createBenchmarkOptions() )

export { isEventTargetSuite,isNotEventTargetSuite }

