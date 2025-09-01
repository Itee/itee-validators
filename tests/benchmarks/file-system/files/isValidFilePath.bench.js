
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isValidFilePathNamespace from '../../../../sources/file-system/files/isValidFilePath.js'

const isValidFilePathSuite = Benchmark.Suite( 'isValidFilePathNamespace.isValidFilePath', Testing.createSuiteOptions() )
                                     .add( 'isValidFilePath()', Testing.iterateOverDataMap( isValidFilePathNamespace.isValidFilePath ), Testing.createBenchmarkOptions() )

const isInvalidFilePathSuite = Benchmark.Suite( 'isValidFilePathNamespace.isInvalidFilePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidFilePath()', Testing.iterateOverDataMap( isValidFilePathNamespace.isInvalidFilePath ), Testing.createBenchmarkOptions() )

export { isValidFilePathSuite,isInvalidFilePathSuite }

