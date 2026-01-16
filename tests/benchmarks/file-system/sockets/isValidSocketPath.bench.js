import * as isValidSocketPathNamespace from '../../../../sources/file-system/sockets/isValidSocketPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidSocketPathSuite = Benchmark.Suite( 'isValidSocketPathNamespace.isValidSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isValidSocketPath()', Testing.iterateOverDataMap( isValidSocketPathNamespace.isValidSocketPath ), Testing.createBenchmarkOptions() )

const isInvalidSocketPathSuite = Benchmark.Suite( 'isValidSocketPathNamespace.isInvalidSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidSocketPath()', Testing.iterateOverDataMap( isValidSocketPathNamespace.isInvalidSocketPath ), Testing.createBenchmarkOptions() )

export { isValidSocketPathSuite,isInvalidSocketPathSuite }

