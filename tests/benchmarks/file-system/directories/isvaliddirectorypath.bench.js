import * as isvaliddirectorypathNamespace from '../../../../sources/file-system/directories/isValidDirectoryPath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidDirectoryPathSuite = Benchmark.Suite( 'isvaliddirectorypathNamespace.isValidDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isValidDirectoryPath()', Testing.iterateOverDataMap( isvaliddirectorypathNamespace.isValidDirectoryPath ), Testing.createBenchmarkOptions() )

const isInvalidDirectoryPathSuite = Benchmark.Suite( 'isvaliddirectorypathNamespace.isInvalidDirectoryPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidDirectoryPath()', Testing.iterateOverDataMap( isvaliddirectorypathNamespace.isInvalidDirectoryPath ), Testing.createBenchmarkOptions() )

export { isValidDirectoryPathSuite,isInvalidDirectoryPathSuite }

