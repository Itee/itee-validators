
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isSocketPathNamespace from '../../../../sources/file-system/sockets/isSocketPath.js'

const isSocketPathSuite = Benchmark.Suite( 'isSocketPathNamespace.isSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isSocketPath()', Testing.iterateOverDataMap( isSocketPathNamespace.isSocketPath ), Testing.createBenchmarkOptions() )

const isNotSocketPathSuite = Benchmark.Suite( 'isSocketPathNamespace.isNotSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isNotSocketPath()', Testing.iterateOverDataMap( isSocketPathNamespace.isNotSocketPath ), Testing.createBenchmarkOptions() )

export { isSocketPathSuite,isNotSocketPathSuite }

