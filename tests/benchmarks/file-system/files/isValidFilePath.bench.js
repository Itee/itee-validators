
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isValidFilePathNamespace from '../../../../sources/file-system/files/isValidFilePath.js'

const isInvalidFilePathSuite = Benchmark.Suite( 'isValidFilePathNamespace.isInvalidFilePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidFilePath()', Testing.iterateOverDataMap( isValidFilePathNamespace.isInvalidFilePath ), Testing.createBenchmarkOptions() )
const isValidFilePathSuite = Benchmark.Suite( 'isValidFilePathNamespace.isValidFilePath', Testing.createSuiteOptions() )
                                     .add( 'isValidFilePath()', Testing.iterateOverDataMap( isValidFilePathNamespace.isValidFilePath ), Testing.createBenchmarkOptions() )

export { isInvalidFilePathSuite,isValidFilePathSuite }

