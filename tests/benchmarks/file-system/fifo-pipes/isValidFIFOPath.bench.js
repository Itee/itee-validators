
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isValidFIFOPathNamespace from '../../../../sources/file-system/fifo-pipes/isValidFIFOPath.js'

const isInvalidFIFOPathSuite = Benchmark.Suite( 'isValidFIFOPathNamespace.isInvalidFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidFIFOPath()', Testing.iterateOverDataMap( isValidFIFOPathNamespace.isInvalidFIFOPath ), Testing.createBenchmarkOptions() )
const isValidFIFOPathSuite = Benchmark.Suite( 'isValidFIFOPathNamespace.isValidFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isValidFIFOPath()', Testing.iterateOverDataMap( isValidFIFOPathNamespace.isValidFIFOPath ), Testing.createBenchmarkOptions() )

export { isInvalidFIFOPathSuite,isValidFIFOPathSuite }

