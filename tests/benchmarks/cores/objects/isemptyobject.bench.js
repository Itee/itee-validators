import * as isemptyobjectNamespace from '../../../../sources/cores/objects/isEmptyObject.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyObjectSuite = Benchmark.Suite( 'isemptyobjectNamespace.isEmptyObject', Testing.createSuiteOptions() )
                                     .add( 'isEmptyObject()', Testing.iterateOverDataMap( isemptyobjectNamespace.isEmptyObject ), Testing.createBenchmarkOptions() )

const isNotEmptyObjectSuite = Benchmark.Suite( 'isemptyobjectNamespace.isNotEmptyObject', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyObject()', Testing.iterateOverDataMap( isemptyobjectNamespace.isNotEmptyObject ), Testing.createBenchmarkOptions() )

export { isEmptyObjectSuite,isNotEmptyObjectSuite }

