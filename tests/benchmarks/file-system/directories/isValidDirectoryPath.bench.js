import * as isValidDirectoryPathNamespace from '../../../../sources/file-system/directories/isValidDirectoryPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidDirectoryPathSuite = Benchmark.Suite( 'isValidDirectoryPathNamespace.isValidDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isValidDirectoryPath()', Testing.iterateOverDataMap( isValidDirectoryPathNamespace.isValidDirectoryPath ), Testing.createBenchmarkOptions() )

const isInvalidDirectoryPathSuite = Benchmark.Suite( 'isValidDirectoryPathNamespace.isInvalidDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidDirectoryPath()', Testing.iterateOverDataMap( isValidDirectoryPathNamespace.isInvalidDirectoryPath ), Testing.createBenchmarkOptions() )

export { isValidDirectoryPathSuite,isInvalidDirectoryPathSuite }

