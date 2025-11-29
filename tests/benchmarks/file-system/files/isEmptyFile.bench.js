import * as isEmptyFileNamespace from '../../../../sources/file-system/files/isEmptyFile.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyFileSuite = Benchmark.Suite( 'isEmptyFileNamespace.isEmptyFile', Testing.createSuiteOptions() )
                                     .add( 'isEmptyFile()', Testing.iterateOverDataMap( isEmptyFileNamespace.isEmptyFile ), Testing.createBenchmarkOptions() )

const isNotEmptyFileSuite = Benchmark.Suite( 'isEmptyFileNamespace.isNotEmptyFile', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyFile()', Testing.iterateOverDataMap( isEmptyFileNamespace.isNotEmptyFile ), Testing.createBenchmarkOptions() )

export { isEmptyFileSuite,isNotEmptyFileSuite }

