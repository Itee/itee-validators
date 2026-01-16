import * as isObjectNamespace from '../../../../sources/cores/objects/isObject.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isObjectSuite = Benchmark.Suite( 'isObjectNamespace.isObject', Testing.createSuiteOptions() )
                                     .add( 'isObject()', Testing.iterateOverDataMap( isObjectNamespace.isObject ), Testing.createBenchmarkOptions() )

const isNotObjectSuite = Benchmark.Suite( 'isObjectNamespace.isNotObject', Testing.createSuiteOptions() )
                                     .add( 'isNotObject()', Testing.iterateOverDataMap( isObjectNamespace.isNotObject ), Testing.createBenchmarkOptions() )

export { isObjectSuite,isNotObjectSuite }

