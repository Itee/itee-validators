
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isEmptyFileNamespace from '../../../../sources/file-system/files/isEmptyFile.js'

const isEmptyFileSuite = Benchmark.Suite( 'isEmptyFileNamespace.isEmptyFile', Testing.createSuiteOptions() )
                                     .add( 'isEmptyFile()', Testing.iterateOverDataMap( isEmptyFileNamespace.isEmptyFile ), Testing.createBenchmarkOptions() )

const isNotEmptyFileSuite = Benchmark.Suite( 'isEmptyFileNamespace.isNotEmptyFile', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyFile()', Testing.iterateOverDataMap( isEmptyFileNamespace.isNotEmptyFile ), Testing.createBenchmarkOptions() )

export { isEmptyFileSuite,isNotEmptyFileSuite }

