import * as isvalidsocketpathNamespace from '../../../../sources/file-system/sockets/isValidSocketPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidSocketPathSuite = Benchmark.Suite( 'isvalidsocketpathNamespace.isValidSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isValidSocketPath()', Testing.iterateOverDataMap( isvalidsocketpathNamespace.isValidSocketPath ), Testing.createBenchmarkOptions() )

const isInvalidSocketPathSuite = Benchmark.Suite( 'isvalidsocketpathNamespace.isInvalidSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidSocketPath()', Testing.iterateOverDataMap( isvalidsocketpathNamespace.isInvalidSocketPath ), Testing.createBenchmarkOptions() )

export { isValidSocketPathSuite,isInvalidSocketPathSuite }

