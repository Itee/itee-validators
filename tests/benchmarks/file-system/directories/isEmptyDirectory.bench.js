
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isEmptyDirectoryNamespace from '../../../../sources/file-system/directories/isEmptyDirectory.js'

const isEmptyDirectorySuite = Benchmark.Suite( 'isEmptyDirectoryNamespace.isEmptyDirectory', Testing.createSuiteOptions() )
                                     .add( 'isEmptyDirectory()', Testing.iterateOverDataMap( isEmptyDirectoryNamespace.isEmptyDirectory ), Testing.createBenchmarkOptions() )

const isNotEmptyDirectorySuite = Benchmark.Suite( 'isEmptyDirectoryNamespace.isNotEmptyDirectory', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyDirectory()', Testing.iterateOverDataMap( isEmptyDirectoryNamespace.isNotEmptyDirectory ), Testing.createBenchmarkOptions() )

export { isEmptyDirectorySuite,isNotEmptyDirectorySuite }

