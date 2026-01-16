import * as isValidFIFOPathNamespace from '../../../../sources/file-system/fifo-pipes/isValidFIFOPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidFIFOPathSuite = Benchmark.Suite( 'isValidFIFOPathNamespace.isValidFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isValidFIFOPath()', Testing.iterateOverDataMap( isValidFIFOPathNamespace.isValidFIFOPath ), Testing.createBenchmarkOptions() )

const isInvalidFIFOPathSuite = Benchmark.Suite( 'isValidFIFOPathNamespace.isInvalidFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidFIFOPath()', Testing.iterateOverDataMap( isValidFIFOPathNamespace.isInvalidFIFOPath ), Testing.createBenchmarkOptions() )

export { isValidFIFOPathSuite,isInvalidFIFOPathSuite }

