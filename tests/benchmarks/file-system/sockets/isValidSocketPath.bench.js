import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isValidSocketPathNamespace from '../../../../sources/file-system/sockets/isValidSocketPath.js'

const isValidSocketPathSuite = Benchmark.Suite( 'isValidSocketPathNamespace.isValidSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isValidSocketPath()', Testing.iterateOverDataMap( isValidSocketPathNamespace.isValidSocketPath ), Testing.createBenchmarkOptions() )

const isInvalidSocketPathSuite = Benchmark.Suite( 'isValidSocketPathNamespace.isInvalidSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidSocketPath()', Testing.iterateOverDataMap( isValidSocketPathNamespace.isInvalidSocketPath ), Testing.createBenchmarkOptions() )

export { isValidSocketPathSuite,isInvalidSocketPathSuite }

