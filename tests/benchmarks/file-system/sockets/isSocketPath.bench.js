
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isSocketPathNamespace from '../../../../sources/file-system/sockets/isSocketPath.js'

const isNotSocketPathSuite = Benchmark.Suite( 'isSocketPathNamespace.isNotSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isNotSocketPath()', Testing.iterateOverDataMap( isSocketPathNamespace.isNotSocketPath ), Testing.createBenchmarkOptions() )
const isSocketPathSuite = Benchmark.Suite( 'isSocketPathNamespace.isSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isSocketPath()', Testing.iterateOverDataMap( isSocketPathNamespace.isSocketPath ), Testing.createBenchmarkOptions() )

export { isNotSocketPathSuite,isSocketPathSuite }

