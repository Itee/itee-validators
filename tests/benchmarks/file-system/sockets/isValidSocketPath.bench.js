
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isValidSocketPathNamespace from '../../../../sources/file-system/sockets/isValidSocketPath.js'

const isInvalidSocketPathSuite = Benchmark.Suite( 'isValidSocketPathNamespace.isInvalidSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidSocketPath()', Testing.iterateOverDataMap( isValidSocketPathNamespace.isInvalidSocketPath ), Testing.createBenchmarkOptions() )
const isValidSocketPathSuite = Benchmark.Suite( 'isValidSocketPathNamespace.isValidSocketPath', Testing.createSuiteOptions() )
                                     .add( 'isValidSocketPath()', Testing.iterateOverDataMap( isValidSocketPathNamespace.isValidSocketPath ), Testing.createBenchmarkOptions() )

export { isInvalidSocketPathSuite,isValidSocketPathSuite }

