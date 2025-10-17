
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isValidDirectoryPathNamespace from '../../../../sources/file-system/directories/isValidDirectoryPath.js'

const isValidDirectoryPathSuite = Benchmark.Suite( 'isValidDirectoryPathNamespace.isValidDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isValidDirectoryPath()', Testing.iterateOverDataMap( isValidDirectoryPathNamespace.isValidDirectoryPath ), Testing.createBenchmarkOptions() )

const isInvalidDirectoryPathSuite = Benchmark.Suite( 'isValidDirectoryPathNamespace.isInvalidDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidDirectoryPath()', Testing.iterateOverDataMap( isValidDirectoryPathNamespace.isInvalidDirectoryPath ), Testing.createBenchmarkOptions() )

export { isValidDirectoryPathSuite,isInvalidDirectoryPathSuite }

