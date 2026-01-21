import * as isvalidfilepathNamespace from '../../../../sources/file-system/files/isValidFilePath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidFilePathSuite = Benchmark.Suite( 'isvalidfilepathNamespace.isValidFilePath', Testing.createSuiteOptions() )
                                     .add( 'isValidFilePath()', Testing.iterateOverDataMap( isvalidfilepathNamespace.isValidFilePath ), Testing.createBenchmarkOptions() )

const isInvalidFilePathSuite = Benchmark.Suite( 'isvalidfilepathNamespace.isInvalidFilePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidFilePath()', Testing.iterateOverDataMap( isvalidfilepathNamespace.isInvalidFilePath ), Testing.createBenchmarkOptions() )

export { isValidFilePathSuite,isInvalidFilePathSuite }

