
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isDirectoryPathNamespace from '../../../../sources/file-system/directories/isDirectoryPath.js'

const isDirectoryPathSuite = Benchmark.Suite( 'isDirectoryPathNamespace.isDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isDirectoryPath()', Testing.iterateOverDataMap( isDirectoryPathNamespace.isDirectoryPath ), Testing.createBenchmarkOptions() )

const isNotDirectoryPathSuite = Benchmark.Suite( 'isDirectoryPathNamespace.isNotDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isNotDirectoryPath()', Testing.iterateOverDataMap( isDirectoryPathNamespace.isNotDirectoryPath ), Testing.createBenchmarkOptions() )

export { isDirectoryPathSuite,isNotDirectoryPathSuite }

