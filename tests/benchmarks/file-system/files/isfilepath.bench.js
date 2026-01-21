import * as isfilepathNamespace from '../../../../sources/file-system/files/isFilePath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFilePathSuite = Benchmark.Suite( 'isfilepathNamespace.isFilePath', Testing.createSuiteOptions() )
                                     .add( 'isFilePath()', Testing.iterateOverDataMap( isfilepathNamespace.isFilePath ), Testing.createBenchmarkOptions() )

const isNotFilePathSuite = Benchmark.Suite( 'isfilepathNamespace.isNotFilePath', Testing.createSuiteOptions() )
                                     .add( 'isNotFilePath()', Testing.iterateOverDataMap( isfilepathNamespace.isNotFilePath ), Testing.createBenchmarkOptions() )

export { isFilePathSuite,isNotFilePathSuite }

