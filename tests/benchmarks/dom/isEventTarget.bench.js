
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isEventTargetNamespace from '../../../sources/dom/isEventTarget.js'

const isEventTargetSuite = Benchmark.Suite( 'isEventTargetNamespace.isEventTarget', Testing.createSuiteOptions() )
                                     .add( 'isEventTarget()', Testing.iterateOverDataMap( isEventTargetNamespace.isEventTarget ), Testing.createBenchmarkOptions() )
const isNotEventTargetSuite = Benchmark.Suite( 'isEventTargetNamespace.isNotEventTarget', Testing.createSuiteOptions() )
                                     .add( 'isNotEventTarget()', Testing.iterateOverDataMap( isEventTargetNamespace.isNotEventTarget ), Testing.createBenchmarkOptions() )

export { isEventTargetSuite,isNotEventTargetSuite }

