import * as isFilePathNamespace from '../../../../sources/file-system/files/isFilePath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFilePathSuite = Benchmark.Suite( 'isFilePathNamespace.isFilePath', Testing.createSuiteOptions() )
                                     .add( 'isFilePath()', Testing.iterateOverDataMap( isFilePathNamespace.isFilePath ), Testing.createBenchmarkOptions() )

const isNotFilePathSuite = Benchmark.Suite( 'isFilePathNamespace.isNotFilePath', Testing.createSuiteOptions() )
                                     .add( 'isNotFilePath()', Testing.iterateOverDataMap( isFilePathNamespace.isNotFilePath ), Testing.createBenchmarkOptions() )

export { isFilePathSuite,isNotFilePathSuite }

