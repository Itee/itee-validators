import * as isFIFOPathNamespace from '../../../../sources/file-system/fifo-pipes/isFIFOPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFIFOPathSuite = Benchmark.Suite( 'isFIFOPathNamespace.isFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isFIFOPath()', Testing.iterateOverDataMap( isFIFOPathNamespace.isFIFOPath ), Testing.createBenchmarkOptions() )

const isNotFIFOPathSuite = Benchmark.Suite( 'isFIFOPathNamespace.isNotFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isNotFIFOPath()', Testing.iterateOverDataMap( isFIFOPathNamespace.isNotFIFOPath ), Testing.createBenchmarkOptions() )

export { isFIFOPathSuite,isNotFIFOPathSuite }

