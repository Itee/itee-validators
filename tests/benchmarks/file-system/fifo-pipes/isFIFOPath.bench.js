import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isFIFOPathNamespace from '../../../../sources/file-system/fifo-pipes/isFIFOPath.js'

const isFIFOPathSuite = Benchmark.Suite( 'isFIFOPathNamespace.isFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isFIFOPath()', Testing.iterateOverDataMap( isFIFOPathNamespace.isFIFOPath ), Testing.createBenchmarkOptions() )

const isNotFIFOPathSuite = Benchmark.Suite( 'isFIFOPathNamespace.isNotFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isNotFIFOPath()', Testing.iterateOverDataMap( isFIFOPathNamespace.isNotFIFOPath ), Testing.createBenchmarkOptions() )

export { isFIFOPathSuite,isNotFIFOPathSuite }

