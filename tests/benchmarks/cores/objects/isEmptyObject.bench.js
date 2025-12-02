import * as isEmptyObjectNamespace from '../../../../sources/cores/objects/isEmptyObject.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyObjectSuite = Benchmark.Suite( 'isEmptyObjectNamespace.isEmptyObject', Testing.createSuiteOptions() )
                                     .add( 'isEmptyObject()', Testing.iterateOverDataMap( isEmptyObjectNamespace.isEmptyObject ), Testing.createBenchmarkOptions() )

const isNotEmptyObjectSuite = Benchmark.Suite( 'isEmptyObjectNamespace.isNotEmptyObject', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyObject()', Testing.iterateOverDataMap( isEmptyObjectNamespace.isNotEmptyObject ), Testing.createBenchmarkOptions() )

export { isEmptyObjectSuite,isNotEmptyObjectSuite }

