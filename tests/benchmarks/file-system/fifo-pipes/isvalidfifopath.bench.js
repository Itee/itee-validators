import * as isvalidfifopathNamespace from '../../../../sources/file-system/fifo-pipes/isValidFIFOPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidFIFOPathSuite = Benchmark.Suite( 'isvalidfifopathNamespace.isValidFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isValidFIFOPath()', Testing.iterateOverDataMap( isvalidfifopathNamespace.isValidFIFOPath ), Testing.createBenchmarkOptions() )

const isInvalidFIFOPathSuite = Benchmark.Suite( 'isvalidfifopathNamespace.isInvalidFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidFIFOPath()', Testing.iterateOverDataMap( isvalidfifopathNamespace.isInvalidFIFOPath ), Testing.createBenchmarkOptions() )

export { isValidFIFOPathSuite,isInvalidFIFOPathSuite }

