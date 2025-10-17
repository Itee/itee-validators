
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isValidFIFOPathNamespace from '../../../../sources/file-system/fifo-pipes/isValidFIFOPath.js'

const isValidFIFOPathSuite = Benchmark.Suite( 'isValidFIFOPathNamespace.isValidFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isValidFIFOPath()', Testing.iterateOverDataMap( isValidFIFOPathNamespace.isValidFIFOPath ), Testing.createBenchmarkOptions() )

const isInvalidFIFOPathSuite = Benchmark.Suite( 'isValidFIFOPathNamespace.isInvalidFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidFIFOPath()', Testing.iterateOverDataMap( isValidFIFOPathNamespace.isInvalidFIFOPath ), Testing.createBenchmarkOptions() )

export { isValidFIFOPathSuite,isInvalidFIFOPathSuite }

