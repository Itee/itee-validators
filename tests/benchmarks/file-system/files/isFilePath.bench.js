
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isFilePathNamespace from '../../../../sources/file-system/files/isFilePath.js'

const isFilePathSuite = Benchmark.Suite( 'isFilePathNamespace.isFilePath', Testing.createSuiteOptions() )
                                     .add( 'isFilePath()', Testing.iterateOverDataMap( isFilePathNamespace.isFilePath ), Testing.createBenchmarkOptions() )

const isNotFilePathSuite = Benchmark.Suite( 'isFilePathNamespace.isNotFilePath', Testing.createSuiteOptions() )
                                     .add( 'isNotFilePath()', Testing.iterateOverDataMap( isFilePathNamespace.isNotFilePath ), Testing.createBenchmarkOptions() )

export { isFilePathSuite,isNotFilePathSuite }

