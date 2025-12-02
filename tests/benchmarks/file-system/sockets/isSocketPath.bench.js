import * as isSocketPathNamespace from '../../../../sources/file-system/sockets/isSocketPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isSocketPathSuite = Benchmark.Suite( 'isSocketPathNamespace.isSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isSocketPath()', Testing.iterateOverDataMap( isSocketPathNamespace.isSocketPath ), Testing.createBenchmarkOptions() )

const isNotSocketPathSuite = Benchmark.Suite( 'isSocketPathNamespace.isNotSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isNotSocketPath()', Testing.iterateOverDataMap( isSocketPathNamespace.isNotSocketPath ), Testing.createBenchmarkOptions() )

export { isSocketPathSuite,isNotSocketPathSuite }

