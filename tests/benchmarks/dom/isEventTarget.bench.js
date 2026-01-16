import * as isEventTargetNamespace from '../../../sources/dom/isEventTarget.js'
import { getBenchmarkPackage } from '../../import.benchmarks.js'
import { getTestingPackage } from '../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEventTargetSuite = Benchmark.Suite( 'isEventTargetNamespace.isEventTarget', Testing.createSuiteOptions() )
                                     .add( 'isEventTarget()', Testing.iterateOverDataMap( isEventTargetNamespace.isEventTarget ), Testing.createBenchmarkOptions() )

const isNotEventTargetSuite = Benchmark.Suite( 'isEventTargetNamespace.isNotEventTarget', Testing.createSuiteOptions() )
                                     .add( 'isNotEventTarget()', Testing.iterateOverDataMap( isEventTargetNamespace.isNotEventTarget ), Testing.createBenchmarkOptions() )

export { isEventTargetSuite,isNotEventTargetSuite }

