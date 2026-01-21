import * as isdirectorypathNamespace from '../../../../sources/file-system/directories/isDirectoryPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isDirectoryPathSuite = Benchmark.Suite( 'isdirectorypathNamespace.isDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isDirectoryPath()', Testing.iterateOverDataMap( isdirectorypathNamespace.isDirectoryPath ), Testing.createBenchmarkOptions() )

const isNotDirectoryPathSuite = Benchmark.Suite( 'isdirectorypathNamespace.isNotDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isNotDirectoryPath()', Testing.iterateOverDataMap( isdirectorypathNamespace.isNotDirectoryPath ), Testing.createBenchmarkOptions() )

export { isDirectoryPathSuite,isNotDirectoryPathSuite }

