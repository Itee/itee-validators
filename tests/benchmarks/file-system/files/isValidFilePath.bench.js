import * as isValidFilePathNamespace from '../../../../sources/file-system/files/isValidFilePath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidFilePathSuite = Benchmark.Suite( 'isValidFilePathNamespace.isValidFilePath', Testing.createSuiteOptions() )
                                     .add( 'isValidFilePath()', Testing.iterateOverDataMap( isValidFilePathNamespace.isValidFilePath ), Testing.createBenchmarkOptions() )

const isInvalidFilePathSuite = Benchmark.Suite( 'isValidFilePathNamespace.isInvalidFilePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidFilePath()', Testing.iterateOverDataMap( isValidFilePathNamespace.isInvalidFilePath ), Testing.createBenchmarkOptions() )

export { isValidFilePathSuite,isInvalidFilePathSuite }

