import * as isEmptyDirectoryNamespace from '../../../../sources/file-system/directories/isEmptyDirectory.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyDirectorySuite = Benchmark.Suite( 'isEmptyDirectoryNamespace.isEmptyDirectory', Testing.createSuiteOptions() )
                                     .add( 'isEmptyDirectory()', Testing.iterateOverDataMap( isEmptyDirectoryNamespace.isEmptyDirectory ), Testing.createBenchmarkOptions() )

const isNotEmptyDirectorySuite = Benchmark.Suite( 'isEmptyDirectoryNamespace.isNotEmptyDirectory', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyDirectory()', Testing.iterateOverDataMap( isEmptyDirectoryNamespace.isNotEmptyDirectory ), Testing.createBenchmarkOptions() )

export { isEmptyDirectorySuite,isNotEmptyDirectorySuite }

