import * as issocketpathNamespace from '../../../../sources/file-system/sockets/isSocketPath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isSocketPathSuite = Benchmark.Suite( 'issocketpathNamespace.isSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isSocketPath()', Testing.iterateOverDataMap( issocketpathNamespace.isSocketPath ), Testing.createBenchmarkOptions() )

const isNotSocketPathSuite = Benchmark.Suite( 'issocketpathNamespace.isNotSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isNotSocketPath()', Testing.iterateOverDataMap( issocketpathNamespace.isNotSocketPath ), Testing.createBenchmarkOptions() )

export { isSocketPathSuite,isNotSocketPathSuite }

